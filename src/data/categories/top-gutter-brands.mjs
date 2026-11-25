// Top Gutter Brands: clone of gutter protection page 2 (LeafFilter #1),
// rebranded. Every "Affordable Home" in the page data becomes "Top Gutter
// Brands", and the site name, disclosures and logo are overridden for this
// page only. noindex: duplicate of page 2.
import page2 from './gutter-protection-v2.mjs';
import { site } from '../../config/site.mjs';

const FROM = 'Affordable Home';
const TO = 'Top Gutter Brands';

// Recursively swap the brand name in every string (possessive first).
function rebrand(value) {
  if (typeof value === 'string') return value.replaceAll(`${FROM}'s`, `${TO}'`).replaceAll(`${FROM}’s`, `${TO}’`).replaceAll(FROM, TO);
  if (Array.isArray(value)) return value.map(rebrand);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, rebrand(v)]));
  return value;
}

const data = rebrand(page2);

export default {
  ...data,
  slug: 'top-gutter-brands',
  noindex: true,
  // The stacked logo (house above the wordmark) needs more height than the
  // wide Affordable Home logo to stay readable.
  extraCss: '.site-header__logo img{height:54px}.site-footer__brand img{height:80px}@media(min-width:768px){.site-header__logo img{height:66px}}',
  siteOverrides: {
    ...(data.siteOverrides || {}),
    brandName: TO,
    description: rebrand(site.description),
    disclosure: rebrand(site.disclosure),
    disclosureShort: rebrand(site.disclosureShort),
    logo: {
      src: 'images/top-gutter-brands-logo.svg',
      srcOnDark: 'images/top-gutter-brands-logo-white.svg',
      width: 1500,
      height: 684,
    },
  },
};
