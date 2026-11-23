// Gutter Protection, page 2: same as page 1 with Leafguard and LeafFilter
// swapped, so LeafFilter is the #1 top pick. noindex: duplicate of page 1.
import { buildGutterPage, SCORES_6 } from './gutter-protection-brands.mjs';
import { clogFreeStyle } from './gutter-protection-style.mjs';

const page = clogFreeStyle(buildGutterPage({
  slug: 'gutter-protection-v2',
  topId: 'leaffilter',
  order: ['leafguard', 'gutter-savings', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES_6,
  noindex: true,
  variantId: 'leaffilter-top-pick',
}));

export default {
  ...page,
  brands: page.brands.map((b) => (b.id !== 'leaffilter' ? b : {
    ...b,
    // End the in-depth review with the offer card, as on page 1, instead of
    // the generic "See If LeafFilter Is Right" block.
    deepReview: b.deepReview && { ...b.deepReview, finalCta: undefined },
  })),
};
