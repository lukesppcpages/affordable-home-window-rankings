// Static build: renders each category in src/data/categories to plain HTML.
//   node build.mjs           production build -> dist/
//   node build.mjs --draft   draft build (placeholders visible, noindex) -> dist-draft/
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './src/config/site.mjs';
import { categories, defaultCategory } from './src/data/categories/index.mjs';
import { Page } from './src/components/Page.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const draft = process.argv.includes('--draft');
const out = join(root, draft ? 'dist-draft' : 'dist');

const warnings = [];
const errors = [];

function validate(category) {
  const ranks = new Set();
  for (const b of category.brands) {
    const where = `${category.slug} / ${b.name}`;
    if (ranks.has(b.rank)) errors.push(`${where}: duplicate rank ${b.rank}`);
    ranks.add(b.rank);
    if (typeof b.score !== 'number' || b.score < 0 || b.score > 10) errors.push(`${where}: score must be 0–10`);
    if (b.bullets?.length !== 3) warnings.push(`${where}: expected 3 bullets, found ${b.bullets?.length ?? 0}`);
    if (!b.cta?.url) (draft ? warnings : errors).push(`${where}: CTA destination URL not configured`);
    else if (!/^https:\/\//.test(b.cta.url)) errors.push(`${where}: CTA URL must be https`);
    else if (!b.cta.verified) warnings.push(`${where}: CTA URL is an unverified placeholder (${b.cta.url})`);
    if (b.pending?.length) warnings.push(`${where}: ${b.pending.length} content item(s) pending verification`);
  }
  if (category.brands.filter((b) => b.featured).length > 1) errors.push(`${category.slug}: only one brand can be featured`);
}

function validateSite() {
  if (!site.siteUrl) warnings.push('site.siteUrl not set — canonical URL and og:url/og:image omitted');
  for (const [k, v] of Object.entries(site.links)) if (!v) warnings.push(`site.links.${k} not set — link omitted from footer`);
  if (!site.analytics.gtmId) warnings.push('site.analytics.gtmId not set — events go to window.dataLayer only');
}

async function build() {
  validateSite();
  categories.forEach(validate);
  if (errors.length) {
    console.error('\nBuild failed:\n' + errors.map((e) => '  ✖ ' + e).join('\n'));
    process.exit(1);
  }

  const css = (await readFile(join(root, 'src/styles.css'), 'utf8'))
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*\n\s*/g, '\n')
    .trim();

  await rm(out, { recursive: true, force: true });
  await mkdir(join(out, 'assets'), { recursive: true });
  await cp(join(root, 'public'), out, { recursive: true });
  await cp(join(root, 'src/client/client.js'), join(out, 'assets/client.js'));

  for (const category of categories) {
    const targets = [{ dir: category.slug, base: '../' }];
    if (category.slug === defaultCategory) targets.push({ dir: '', base: '' });
    for (const { dir, base } of targets) {
      const pageUrl = site.siteUrl ? `${site.siteUrl}/${dir ? dir + '/' : ''}` : null;
      // A category can override site settings (e.g. CTA label, disclosure copy).
      const o = category.siteOverrides || {};
      const pageSite = { ...site, ...o, experiments: { ...site.experiments, ...(o.experiments || {}) } };
      const page = String(Page({ site: pageSite, category, css, base, pageUrl, draft }));
      await mkdir(join(out, dir), { recursive: true });
      await writeFile(join(out, dir, 'index.html'), page);
      console.log(`  ✔ ${join(draft ? 'dist-draft' : 'dist', dir, 'index.html')}  (${(page.length / 1024).toFixed(1)} KB)`);
    }
  }

  if (warnings.length) console.warn('\nTo resolve before launch:\n' + warnings.map((w) => '  • ' + w).join('\n'));
}

build();
