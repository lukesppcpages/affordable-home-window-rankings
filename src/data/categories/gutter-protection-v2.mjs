// Gutter Protection, page 2: same as page 1 with Leafguard and LeafFilter
// swapped, so LeafFilter is the #1 top pick. noindex: duplicate of page 1.
import { buildGutterPage, SCORES } from './gutter-protection-brands.mjs';
import { clogFreeStyle } from './gutter-protection-style.mjs';

export default clogFreeStyle(buildGutterPage({
  slug: 'gutter-protection-v2',
  topId: 'leaffilter',
  order: ['leafguard', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES,
  noindex: true,
  variantId: 'leaffilter-top-pick',
}));
