import { html } from '../lib/html.mjs';

const LINKS = [
  ['about', 'About'],
  ['contact', 'Contact'],
  ['privacy', 'Privacy Policy'],
  ['terms', 'Terms of Use'],
];

export function Footer({ site, base, draft }) {
  const year = new Date().getFullYear();
  const links = LINKS.map(([key, label]) => {
    const href = site.links[key];
    if (href) return html`<li><a href="${href}">${label}</a></li>`;
    return draft ? html`<li><span class="is-unconfigured-link" title="URL not configured">${label}</span></li>` : '';
  });

  return html`
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <img src="${base}${site.logo.srcOnDark}" alt="${site.brandName}" width="${site.logo.width}" height="${site.logo.height}" loading="lazy">
        <p>${site.description}</p>
      </div>
      <nav aria-label="Footer">
        <ul class="site-footer__links">
          ${links}
          <li><a href="#disclosure">Advertising Disclosure</a></li>
        </ul>
      </nav>
    </div>
    <div class="site-footer__disclosure" id="disclosure" tabindex="-1">
      <h2>Advertising Disclosure</h2>
      <p>Affordable Home may receive compensation when you click on links or request services through companies featured on our website. Compensation may influence which companies appear and how they are presented. Our rankings are editorial assessments and are not customer review averages.</p>
    </div>
    <p class="site-footer__copy">&copy; ${year} ${site.brandName}. All rights reserved.</p>
  </div>
</footer>`;
}
