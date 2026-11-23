// Gutter Protection, page 1: Leafguard is the #1 top pick.
import { buildGutterPage, SCORES_6 } from './gutter-protection-brands.mjs';
import { clogFreeStyle } from './gutter-protection-style.mjs';

export default clogFreeStyle(buildGutterPage({
  slug: 'gutter-protection',
  topId: 'leafguard',
  order: ['leaffilter', 'gutter-savings', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES_6,
  variantId: 'leafguard-top-pick',
}));
