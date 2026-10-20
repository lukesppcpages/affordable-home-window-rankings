import { html, raw } from '../lib/html.mjs';
import { Header } from './Header.mjs';
import { HeroSection } from './HeroSection.mjs';
import { RankingsList } from './RankingsList.mjs';
import { DeepReview } from './DeepReview.mjs';
import { OfferCallout } from './OfferCallout.mjs';
import { DisclosureDialog } from './DisclosureDialog.mjs';
import { EducationSection } from './EducationSection.mjs';
import { MethodologySection } from './MethodologySection.mjs';
import { FAQSection } from './FAQSection.mjs';
import { Footer } from './Footer.mjs';

// JSON for <script> blocks: escape "<" so content can never close the tag.
const json = (value) => raw(JSON.stringify(value).replace(/</g, '\\u003c'));

// Structured data limited to facts: the ordered list of companies and the FAQ (if any).
// No Review/AggregateRating markup — scores are editorial, not customer reviews.
function structuredData({ category, pageUrl }) {
  const brands = [...category.brands].sort((a, b) => a.rank - b.rank);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: category.hero.headline,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: brands.length,
      itemListElement: brands.map((b) => ({
        '@type': 'ListItem',
        position: b.rank,
        name: b.name,
        ...(pageUrl ? { url: `${pageUrl}#${b.id}` } : {}),
      })),
    },
    category.faqs?.length && {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: category.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ].filter(Boolean);
}

export function Page(ctx) {
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
${draft ? html`<meta name="robots" content="noindex, nofollow">` : ''}
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
<body>
${gtm ? raw(`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`) : ''}
<a class="skip-link" href="#rankings">Skip to rankings</a>
${draft ? html`<div class="draft-banner" role="note">Draft build — placeholders and pending-verification notes are visible. Run <code>npm run build</code> for production.</div>` : ''}
${Header(ctx)}
<main id="main">
${HeroSection(ctx)}
${RankingsList(ctx)}
${EducationSection(ctx)}
${DeepReview(ctx)}
${MethodologySection(ctx)}
${category.faqs?.length ? FAQSection(ctx) : ''}
${OfferCallout(ctx)}
</main>
${Footer(ctx)}
${DisclosureDialog(ctx)}
</body>
</html>
`;
}
