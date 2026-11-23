// Gutter Protection, page 2: same as page 1 with Leafguard and LeafFilter
// swapped, so LeafFilter is the #1 top pick. noindex: duplicate of page 1.
import { buildGutterPage, SCORES } from './gutter-protection-brands.mjs';
import { clogFreeStyle } from './gutter-protection-style.mjs';

const page = clogFreeStyle(buildGutterPage({
  slug: 'gutter-protection-v2',
  topId: 'leaffilter',
  order: ['leafguard', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES,
  noindex: true,
  variantId: 'leaffilter-top-pick',
}));

export default {
  ...page,
  brands: page.brands.map((b) => (b.id !== 'leaffilter' ? b : {
    ...b,
    // Page 2 only. Unverified: confirm terms/dates with LeafFilter before launch.
    offer: 'Save Up to $500 + $0 Down',
    // End the in-depth review with the offer card, as on page 1, instead of
    // the generic "See If LeafFilter Is Right" block.
    deepReview: b.deepReview && { ...b.deepReview, finalCta: undefined },
    offerCallout: {
      kicker: 'Current Offer',
      style: 'card',
      note: 'Start with a free, no-obligation estimate. Your custom quote stays valid for a full year.',
      popupLines: ['Save Up to $500', '+ $0 Down'],
    },
    pending: [
      'Confirm the "Save Up to $500 + $0 Down" offer terms, eligibility and dates',
      ...b.pending.filter((p) => !p.startsWith('No verified LeafFilter promotion')),
    ],
  })),
};
