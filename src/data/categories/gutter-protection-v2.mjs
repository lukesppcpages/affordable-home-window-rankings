// Gutter Protection, page 2: identical to page 1 with Leafguard and LeafFilter
// swapped, so LeafFilter is the #1 top pick. noindex: duplicate of page 1.
import { buildGutterPage, SCORES } from './gutter-protection-brands.mjs';

export default buildGutterPage({
  slug: 'gutter-protection-v2',
  topId: 'leaffilter',
  order: ['leafguard', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES,
  noindex: true,
  variantId: 'leaffilter-top-pick',
});
