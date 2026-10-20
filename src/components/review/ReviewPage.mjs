// Company review page shell (e.g. /power-home-remodeling-review/).
// Separate from the rankings Page: different layout, palette (src/review.css)
// and client script (src/client/review.js). Shares site config, html renderer,
// icons and images with the rankings pages.
import { html, raw } from '../../lib/html.mjs';
import { SiteHeader, MobileStickyCTA, SiteFooter } from './layout.mjs';
import { ReviewHero, ReviewSummary, ServiceSelector } from './top.mjs';
import { InDepthReview, ServiceOverview, IdealCustomerSection } from './body.mjs';
import { EstimateForm } from './EstimateForm.mjs';

const json = (value) => raw(JSON.stringify(value).replace(/</g, '\\u003c'));

export function ReviewPage(ctx) {
  const { site, review, css, base, pageUrl, draft } = ctx;
  const { meta } = review;
  const gtm = site.analytics.gtmId;
  const origin = pageUrl ? pageUrl.replace(/\/[^/]*\/?$/, '') : null;

  // Everything the client needs; service copy comes from the same config as the markup.
  const clientConfig = {
    page: review.slug,
    company: 'power-home-remodeling',
    debug: site.analytics.debug || draft,
    endpoint: review.form.endpoint,
    consentText: review.form.consent.text,
    defaults: { cta: 'Get a Free Estimate', heading: review.form.heading, submit: review.form.submit },
    services: Object.fromEntries(
      [...review.services, review.form.multiOption].map((s) => [
        s.id,
        { label: s.label, cta: s.cta, heading: s.formHeading, submit: s.submit },
      ]),
    ),
    serviceIntents: Object.fromEntries(
      Object.entries(review.intents).filter(([, v]) => v.service).map(([k, v]) => [k, v.service]),
    ),
    attributionParams: [
      'gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid',
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
      'utm_id', 'campaignid', 'adgroupid', 'keyword', 'matchtype', 'device', 'intent',
    ],
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: review.hero.headline,
    description: meta.description,
    dateModified: review.reviewed.iso,
    publisher: { '@type': 'Organization', name: site.brandName },
    about: { '@type': 'Organization', name: review.company, url: 'https://www.powerhrg.com/' },
    ...(pageUrl ? { mainEntityOfPage: pageUrl, image: `${origin}/${meta.ogImage}` } : {}),
  };

  return html`<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
${draft ? html`<meta name="robots" content="noindex, nofollow">` : ''}
${pageUrl ? html`<link rel="canonical" href="${pageUrl}">` : ''}
<meta property="og:type" content="article">
<meta property="og:site_name" content="${site.brandName}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
${pageUrl ? html`<meta property="og:url" content="${pageUrl}">
<meta property="og:image" content="${origin}/${meta.ogImage}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#142544">
<link rel="icon" href="${base}images/favicon.svg" type="image/svg+xml">
<script>document.documentElement.className='js';window.AH_REVIEW=${json(clientConfig)};</script>
${gtm ? raw(`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');</script>`) : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<style>${raw(css)}</style>
<script type="application/ld+json">${json(article)}</script>
<script src="${base}assets/review.js" defer></script>
</head>
<body class="rv">
${gtm ? raw(`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`) : ''}
<a class="skip-link" href="#review">Skip to the review</a>
${draft ? html`<div class="draft-banner" role="note">Draft build — pending items: ${review.pending.join(' · ')}</div>` : ''}
${SiteHeader(ctx)}
<main id="main">
${ReviewHero(ctx)}
${ReviewSummary(ctx)}
${ServiceSelector(ctx)}
${InDepthReview(ctx)}
${ServiceOverview(ctx)}
${IdealCustomerSection(ctx)}
${EstimateForm(ctx)}
</main>
${SiteFooter(ctx)}
${MobileStickyCTA(ctx)}
</body>
</html>
`;
}
