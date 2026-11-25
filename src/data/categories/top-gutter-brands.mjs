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
  // The round badge logo needs more height than the wide Affordable Home
  // logo for its lettering to stay readable.
  extraCss: '.site-header__logo img{height:60px;margin:4px 0}.site-footer__brand img{height:110px}@media(min-width:768px){.site-header__logo img{height:72px}}',
  siteOverrides: {
    ...(data.siteOverrides || {}),
    brandName: TO,
    description: rebrand(site.description),
    disclosure: rebrand(site.disclosure),
    disclosureShort: rebrand(site.disclosureShort),
    logo: {
      src: 'images/top-gutter-brands-logo.svg',
      // Green badge with white lettering: reads on light and dark backgrounds.
      srcOnDark: 'images/top-gutter-brands-logo.svg',
      width: 1445,
      height: 1445,
    },
  },
};
