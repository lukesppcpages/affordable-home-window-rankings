// Gutter Protection, page 1: Leafguard is the #1 top pick.
import { buildGutterPage, SCORES } from './gutter-protection-brands.mjs';
import { clogFreeStyle } from './gutter-protection-style.mjs';

export default clogFreeStyle(buildGutterPage({
  slug: 'gutter-protection',
  topId: 'leafguard',
  order: ['leaffilter', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES,
  variantId: 'leafguard-top-pick',
}));
