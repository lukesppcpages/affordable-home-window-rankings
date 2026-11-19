import { html, raw } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';
import { Header } from '../Header.mjs';
import { Footer } from '../Footer.mjs';
import { DisclosureDialog } from '../DisclosureDialog.mjs';
import { BrandLogo } from '../BrandLogo.mjs';
import { CtaButton } from '../CtaButton.mjs';
import { BrandReview } from '../BrandReview.mjs';
import { scoreWord } from '../RatingScore.mjs';
import { structuredData } from '../Page.mjs';

// Editorial template (category.template === 'editorial'). Same tracking hooks
// as the standard page — data-outbound CTAs, article[data-brand] impressions,
// data-review-toggle / data-review-jump, data-placement="deep_review" — so
// client.js and every analytics event work unchanged.

const json = (value) => raw(JSON.stringify(value).replace(/</g, '\\u003c'));
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const img = (base, i, sizes, { eager = false } = {}) =>
  html`<img src="${base}${i.srcSmall || i.src}"${i.srcSmall ? html` srcset="${base}${i.srcSmall} 640w, ${base}${i.src} ${i.width}w" sizes="${sizes}"` : ''} alt="${i.alt}" width="${i.width}" height="${i.height}"${eager ? '' : ' loading="lazy"'} decoding="async">`;

/* ---------- Hero ---------- */
function Hero({ category, base }) {
  const { hero, updated } = category;
  const i = hero.image;
  return html`
<section class="ed-hero" aria-labelledby="page-title">
  <div class="container ed-hero__inner">
    <div class="ed-hero__copy">
      <p class="ed-eyebrow">${hero.eyebrow}</p>
      <h1 id="page-title" class="ed-hero__title">${hero.headline}</h1>
      <p class="ed-hero__intro">${hero.intro}</p>
      <p class="ed-meta">
        <span>Updated <time datetime="${updated.iso}">${updated.label}</time></span>
        <a href="#methodology">How We Evaluate</a>
        <a href="#disclosure" data-disclosure-open>Advertising Disclosure</a>
      </p>
    </div>
    ${i ? html`
    <div class="ed-hero__media">
      <picture>
        <source media="(min-width: 900px)" srcset="${base}${i.srcSmall} 640w, ${base}${i.src} ${i.width}w" sizes="520px">
        <img src="${BLANK}" alt="${i.alt}" width="${i.width}" height="${i.height}" fetchpriority="high" decoding="async">
      </picture>
    </div>` : ''}
  </div>
</section>`;
}

/* ---------- Methodology strip + rankings ---------- */
function MethodStrip({ category }) {
  const m = category.editorial.methodStrip;
  return html`
<div class="ed-method">
  <p class="ed-method__lead">${m.lead}</p>
  <ul class="ed-method__list">${m.criteria.map((c) => html`<li>${c}</li>`)}</ul>
  <a class="ed-method__link" href="#methodology">${m.link}${icon('arrow-right', { size: 16 })}</a>
</div>`;
}

function Card({ brand, category, site, base, draft }) {
  const top = brand.featured;
  const uid = brand.id;
  const exp = site.experiments;
  const reviewLink = top && brand.deepReview
    ? html`<a class="ed-card__review" href="#${brand.deepReview.anchor}" data-review-jump><span>${exp.featuredReviewLabel}</span>${icon('arrow-down', { size: 16 })}</a>`
    : html`<button type="button" class="ed-card__review" aria-expanded="false" aria-controls="review-${uid}" data-review-toggle><span>${exp.reviewLabel}</span>${icon('chevron-down', { size: 16, className: 'rc__toggle-icon' })}</button>`;

  return html`
<li>
<article class="ed-card${top ? ' ed-card--top' : ''}" id="${uid}" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="list" aria-labelledby="${uid}-name">
  ${top ? html`<p class="ed-card__flag">${exp.featuredFlagLabel}</p>` : ''}
  <div class="ed-card__grid">
    <div class="ed-card__id">
      <span class="ed-card__rank" aria-label="Rank ${brand.rank}">${brand.rank}</span>
      ${BrandLogo({ brand, base, eager: brand.rank <= 2 })}
      <div class="ed-card__title">
        <h3 class="ed-card__name" id="${uid}-name">${brand.name}</h3>
        ${brand.distinction ? html`<p class="ed-card__dist">${brand.distinction}</p>` : ''}
      </div>
    </div>
    <div class="ed-card__body">
      ${brand.summary ? html`<p class="ed-card__summary">${brand.summary}</p>` : ''}
      <ul class="ed-card__bullets">
        ${brand.bullets.map((b) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${b}</span></li>`)}
      </ul>
      ${brand.offer ? html`<p class="ed-card__offer"><strong>${brand.offer}</strong>${brand.offerTerms ? html` <span>${brand.offerTerms}</span>` : ''}</p>` : ''}
      ${brand.consider ? html`<p class="ed-card__consider"><strong>Consider:</strong> ${brand.consider}</p>` : ''}
    </div>
    <div class="ed-card__side">
      <div class="ed-score">
        <span class="ed-score__label">${category.scoreLabel}</span>
        <span class="ed-score__value">${brand.score.toFixed(1)}<span class="visually-hidden"> out of 10</span></span>
        <span class="ed-score__word">${scoreWord(brand.score)}</span>
      </div>
      <div class="ed-card__actions">
        ${CtaButton({ brand, position: top ? 'featured_card' : 'ranking_card', site })}
        ${reviewLink}
      </div>
    </div>
  </div>
  ${brand.deepReview ? '' : BrandReview({ brand, site, base, draft, uid })}
</article>
</li>`;
}

function Rankings(ctx) {
  const brands = [...ctx.category.brands].sort((a, b) => a.rank - b.rank);
  return html`
<section class="ed-rankings" id="rankings" aria-labelledby="rankings-title">
  <div class="container">
    <h2 class="visually-hidden" id="rankings-title">${ctx.category.name} Rankings</h2>
    ${MethodStrip(ctx)}
    <ol class="ed-list">${brands.map((brand) => Card({ ...ctx, brand }))}</ol>
  </div>
</section>`;
}

/* ---------- Verdict (replaces the repeated #1 card) ---------- */
function Verdict({ category }) {
  const v = category.editorial.verdict;
  const top = category.brands.find((b) => b.featured);
  return html`
<section class="ed-verdict" aria-labelledby="verdict-title" data-brand="${top.id}" data-rank="${top.rank}" data-placement="verdict">
  <div class="container ed-verdict__inner">
    <div class="ed-verdict__copy">
      <p class="ed-kicker">Our Verdict</p>
      <h2 class="ed-h2" id="verdict-title">${v.heading}</h2>
      <p>${v.body}</p>
      <a class="ed-textlink" href="#${top.deepReview.anchor}" data-review-jump>${v.link}${icon('arrow-down', { size: 16 })}</a>
    </div>
    <ul class="ed-verdict__points">
      ${v.points.map((p) => html`<li><h3>${p.title}</h3><p>${p.body}</p></li>`)}
    </ul>
  </div>
</section>`;
}

/* ---------- Buying guide ---------- */
function Guide({ category }) {
  const g = category.editorial.guide;
  return html`
<section class="ed-guide" id="what-to-look-for" aria-labelledby="guide-title">
  <div class="container">
    <header class="ed-section-head">
      <p class="ed-kicker">Buying Guide</p>
      <h2 class="ed-h2" id="guide-title">${g.heading}</h2>
      <p class="ed-lede">${g.intro}</p>
    </header>
    <div class="ed-guide__grid">
      ${g.items.map((it, n) => html`
      <article class="ed-guide__item">
        <h3><span class="ed-guide__num" aria-hidden="true">${String(n + 1).padStart(2, '0')}</span>${it.title}</h3>
        <p>${it.body}</p>
        <p class="ed-guide__ask">Questions to ask</p>
        <ul>${it.questions.map((q) => html`<li>${q}</li>`)}</ul>
      </article>`)}
    </div>
  </div>
</section>`;
}

/* ---------- In-depth review ---------- */
function OfferModule({ brand, site, base, position, lead, kicker }) {
  return html`
<div class="ed-offer" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="${position}">
  <div class="ed-offer__logo">${BrandLogo({ brand, base })}</div>
  <div class="ed-offer__copy">
    <p class="ed-offer__kicker">${kicker}</p>
    <p class="ed-offer__text">${brand.offer}</p>
    <p class="ed-offer__terms">${brand.offerTerms || ''}${lead ? html` ${lead}` : ''}</p>
  </div>
  <div class="ed-offer__cta">${CtaButton({ brand, position, site })}</div>
</div>`;
}

function Review(ctx) {
  const { category, site, base, draft } = ctx;
  const brand = category.brands.find((b) => b.featured && b.deepReview);
  if (!brand) return '';
  const d = brand.deepReview;
  const r = category.editorial.review;
  const pending = draft && brand.pending?.length
    ? html`<div class="draft-flag"><strong>Pending verification (draft only):</strong><ul>${brand.pending.map((p) => html`<li>${p}</li>`)}</ul></div>`
    : '';

  return html`
<section class="ed-review" id="${d.anchor}" aria-labelledby="review-title" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="deep_review" tabindex="-1">
  <div class="container">
    <header class="ed-review__head">
      <div class="ed-review__head-copy">
        <p class="ed-kicker">${r.kicker}</p>
        <h2 class="ed-h2" id="review-title">${r.heading}</h2>
        <p class="ed-lede">${r.verdict}</p>
      </div>
      <dl class="ed-review__facts">
        <div class="ed-review__logo">${BrandLogo({ brand, base })}</div>
        <div><dt>${category.scoreLabel}</dt><dd><strong>${brand.score.toFixed(1)}</strong> ${scoreWord(brand.score)}</dd></div>
        <div><dt>Best for</dt><dd>${r.bestFor}</dd></div>
      </dl>
    </header>

    <div class="ed-split">
      <figure class="ed-split__media">${img(base, d.heroImage, '(min-width: 1024px) 560px, 100vw')}</figure>
      <div class="ed-split__copy">
        <h3 class="ed-h3">${r.system.heading}</h3>
        <p>${r.system.intro}</p>
        <dl class="ed-features">
          ${r.system.features.map((f) => html`<div><dt>${f.title}</dt><dd>${f.body}</dd></div>`)}
        </dl>
      </div>
    </div>

    <div class="ed-split ed-split--reverse">
      <figure class="ed-split__media">${img(base, d.process.image, '(min-width: 1024px) 560px, 100vw')}</figure>
      <div class="ed-split__copy">
        <h3 class="ed-h3">${r.install.heading}</h3>
        <p>${r.install.intro}</p>
        <ol class="ed-steps">
          ${d.process.steps.map((s) => html`<li><h4>${s.title}</h4><p>${s.body}</p></li>`)}
        </ol>
      </div>
    </div>

    <div class="ed-warranty">
      <h3 class="ed-h3">${r.warranty.heading}</h3>
      <p class="ed-warranty__intro">${r.warranty.intro}</p>
      <div class="ed-warranty__grid">
        ${r.warranty.columns.map((c) => html`
        <div class="ed-warranty__col">
          <p class="ed-warranty__label">${c.label}</p>
          <h4>${c.title}</h4>
          ${c.body ? html`<p>${c.body}</p>` : ''}
          ${c.list ? html`<ul>${c.list.map((x) => html`<li>${x}</li>`)}</ul>` : ''}
        </div>`)}
      </div>
    </div>

    <div class="ed-proscons">
      <div class="ed-proscons__col ed-proscons__col--pro">
        <h3 class="ed-h3">Pros</h3>
        <ul>${r.pros.map((p) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${p}</span></li>`)}</ul>
      </div>
      <div class="ed-proscons__col ed-proscons__col--know">
        <h3 class="ed-h3">Things to Know</h3>
        <ul>${r.thingsToKnow.map((p) => html`<li>${icon('circle-alert', { size: 18 })}<span>${p}</span></li>`)}</ul>
      </div>
    </div>

    ${pending}
    ${brand.offer ? OfferModule({ brand, site, base, position: 'deep_review_cta', kicker: r.offer.kicker, lead: r.offer.lead }) : ''}
  </div>
</section>`;
}

/* ---------- Methodology ---------- */
function Methodology({ category, draft }) {
  const m = category.methodology;
  return html`
<section class="ed-methodology" id="methodology" aria-labelledby="methodology-title" tabindex="-1">
  <div class="container">
    <header class="ed-section-head">
      <p class="ed-kicker">Methodology</p>
      <h2 class="ed-h2" id="methodology-title">${m.heading}</h2>
      <p class="ed-lede">${m.intro} Each company is reviewed against its own published product, installation and warranty information.</p>
    </header>
    <ol class="ed-criteria">
      ${m.criteria.map((c) => html`<li><h3>${c.title}</h3><p>${c.body}</p></li>`)}
    </ol>
    <div class="ed-scale">
      <h3>How to read our scores</h3>
      <p>Scores are on a 10-point scale: <strong>9.8–10</strong> Exceptional, <strong>9.5–9.7</strong> Excellent, <strong>below 9.5</strong> Very Good. ${m.note}</p>
    </div>
    ${draft && m.draftNote ? html`<p class="draft-flag">${m.draftNote}</p>` : ''}
  </div>
</section>`;
}

/* ---------- Closing offer ---------- */
function ClosingOffer({ category, site, base }) {
  const brand = category.brands.find((b) => b.featured && b.offer);
  if (!brand) return '';
  return html`
<section class="ed-closing" aria-label="${brand.name} offer">
  <div class="container">
    ${OfferModule({ brand, site, base, position: 'offer_callout', kicker: brand.offerCallout?.kicker || 'Current Offer' })}
  </div>
</section>`;
}

export function EditorialPage(ctx) {
  const { site, category, css, base, pageUrl, draft } = ctx;
  const { meta } = category;
  const gtm = site.analytics.gtmId;
  const clientConfig = {
    category: category.slug,
    variant: site.experiments.variantId,
    debug: site.analytics.debug || draft,
    scrollDepthMarks: site.analytics.scrollDepthMarks,
    impressionThreshold: site.analytics.impressionThreshold,
    passthroughParams: site.outbound.passthroughParams,
  };

  return html`<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
${draft || category.noindex ? html`<meta name="robots" content="noindex, nofollow">` : ''}
${pageUrl ? html`<link rel="canonical" href="${pageUrl}">` : ''}
<meta property="og:type" content="article">
<meta property="og:site_name" content="${site.brandName}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
${pageUrl ? html`<meta property="og:url" content="${pageUrl}">
<meta property="og:image" content="${site.siteUrl}/${meta.ogImage}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#2F4679">
<link rel="icon" href="${base}images/favicon.svg" type="image/svg+xml">
<script>document.documentElement.className='js';window.AH_CONFIG=${json(clientConfig)};</script>
${gtm ? raw(`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');</script>`) : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap">
<style>${raw(css)}</style>
${structuredData({ category, pageUrl }).map((d) => html`<script type="application/ld+json">${json(d)}</script>`)}
<script src="${base}assets/client.js" defer></script>
</head>
<body class="ed">
${gtm ? raw(`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`) : ''}
<a class="skip-link" href="#rankings">Skip to rankings</a>
${draft ? html`<div class="draft-banner" role="note">Draft build — placeholders and pending-verification notes are visible. Run <code>npm run build</code> for production.</div>` : ''}
${Header(ctx)}
<main id="main">
${Hero(ctx)}
${Rankings(ctx)}
${Verdict(ctx)}
${Guide(ctx)}
${Review(ctx)}
${Methodology(ctx)}
${ClosingOffer(ctx)}
</main>
${Footer(ctx)}
${DisclosureDialog(ctx)}
</body>
</html>
`;
}
