// Gutter Protection, page 1: Leafguard is the #1 top pick.
import { buildGutterPage, SCORES } from './gutter-protection-brands.mjs';

const page = buildGutterPage({
  slug: 'gutter-protection',
  topId: 'leafguard',
  order: ['leaffilter', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES,
  variantId: 'leafguard-top-pick',
});

export default {
  ...page,
  // Ranking cards: logo carries the brand (name kept for screen readers),
  // no summary line under the bullets.
  hideBrandName: true,
  // Green replaces the orange accent (CTAs, offer kicker, numbers, focus ring).
  accent: { color: '#EF5F17', hover: '#D14F0F', glow: 'rgba(239, 95, 23, 0.45)',
    blue: { color: '#17803D', tint: '#EDF6F0', tint2: '#D9EDE0', shadow: 'rgba(23, 128, 61, 0.4)' } },
  // "How We Evaluate" uses the editorial redesign's section (gutter-protection-v3).
  editorialMethodology: true,
  siteOverrides: {
    ...page.siteOverrides,
    experiments: { ...page.siteOverrides?.experiments, ctaLabel: 'See Offer' },
  },
  brands: page.brands.map((b) => {
    const brand = { ...b, summary: undefined };
    if (b.id !== 'leafguard') return brand;
    return {
      ...brand,
      // Page 1 only. Unverified: confirm terms/dates with Leafguard before launch.
      offer: 'Limited-Time Deal: 75% Off Installation + $200 Off!',
      offerCallout: {
        kicker: 'Current Offer',
        style: 'card',
        note: 'Start with a free in-home estimate and a written quote the same visit.',
      },
      pending: [
        'Confirm the "75% Off Installation + $200 Off" offer terms, eligibility and dates',
        ...b.pending.filter((p) => !p.startsWith('Confirm the 0% financing')),
      ],
    };
  }),
};
