// Shared restyle for the gutter ranking pages 1 and 2 (not the editorial clone):
// colors, headline/title, logo-only ranking cards, "See Offer" CTAs and the
// editorial "How We Evaluate" section. Ranking order comes from each page.
export function clogFreeStyle(page) {
  return {
    ...page,
    // Ranking cards: logo carries the brand (name kept for screen readers),
    // no summary line under the bullets.
    hideBrandName: true,
    // Accent (CTAs, offer kicker, numbers) and navy (borders, links, badges, footer).
    accent: { color: '#19C37D', hover: '#14A86A', glow: 'rgba(25, 195, 125, 0.45)',
      blue: { color: '#243F6A', tint: '#EEF1F6', tint2: '#DCE2EC', shadow: 'rgba(36, 63, 106, 0.4)' },
      footer: '#243F6A' },
    meta: { ...page.meta, title: 'Best Clog-Free Gutter Systems of 2027 | Affordable Home' },
    hero: { ...page.hero, headline: 'Best Clog-Free Gutter Systems of 2027' },
    // "How We Evaluate" uses the editorial redesign's section (gutter-protection-v3).
    editorialMethodology: true,
    siteOverrides: {
      ...page.siteOverrides,
      experiments: { ...page.siteOverrides?.experiments, ctaLabel: 'See Offer' },
    },
    brands: page.brands.map((b) => {
      const brand = { ...b, summary: undefined };
      // Leafguard's offer only shows where it is the #1 pick (b.offer is set).
      if (b.id !== 'leafguard' || !b.offer) return brand;
      return {
        ...brand,
        // Unverified: confirm terms/dates with Leafguard before launch.
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
}
