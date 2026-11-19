// Editorial redesign of the Gutter Protection page (page 1: Leafguard #1).
// Same brands, order, scores, offer and CTA destinations as gutter-protection;
// rendered with the editorial template (src/components/editorial/).
// Brief: "Affordable Home Gutter Protection Review Page Redesign" (Google Doc).
//
// Clone-only copy lives in `editorial` below. Every fact in it comes from the
// brand data in gutter-protection-brands.mjs (the companies' own published
// statements, Nov 2026); nothing here adds new product claims.
import { buildGutterPage, GUTTER_BRANDS, SCORES } from './gutter-protection-brands.mjs';

const page = buildGutterPage({
  slug: 'gutter-protection-v3',
  topId: 'leafguard',
  order: ['leaffilter', 'gutter-helmet', 'all-american-gutter-protection', 'thompson-creek'],
  scores: SCORES,
  noindex: true,
  variantId: 'editorial-redesign',
});

// All five companies advertise a free estimate/quote on their own sites
// (checked Nov 19, 2026), so "Get My Free Quote" is accurate for each.
const CTA_LABEL = 'Get My Free Quote';

// One short, honest consideration per card (from each brand's review).
const CONSIDER = {
  leafguard: 'Replaces your existing gutters, so it is a larger project than adding a guard.',
  leaffilter: 'Full warranty terms come from your local representative, so ask for a copy.',
  'gutter-helmet': 'Installed by independent certified dealers, so the experience can vary by market.',
  'all-american-gutter-protection': 'Regional coverage; confirm your area is served before booking.',
  'thompson-creek': 'Available only in Maryland, DC and Virginia.',
};

export default {
  ...page,
  template: 'editorial',
  siteOverrides: {
    ...page.siteOverrides,
    experiments: { ...page.siteOverrides?.experiments, ctaLabel: CTA_LABEL, reviewLabel: 'Read Full Review' },
  },
  brands: page.brands.map((b) => ({
    ...b,
    // The #1 card shows a fuller editorial description alongside its offer.
    summary: GUTTER_BRANDS[b.id].summary,
    cta: { ...b.cta, label: CTA_LABEL },
    consider: CONSIDER[b.id],
    // Financing is through a credit card account; show that next to the offer.
    offerTerms: b.offer && b.id === 'leafguard' ? 'Subject to credit approval.' : undefined,
  })),

  hero: {
    ...page.hero,
    eyebrow: 'Home Improvement / Gutter Protection',
    intro:
      'Compare leading gutter protection companies based on product design, installation, warranty coverage, and service availability.',
  },

  editorial: {
    // Compact strip above the rankings. Describes the actual process: an
    // editorial review of each company's published product, installation and
    // warranty information — no testing or surveys are claimed.
    methodStrip: {
      lead: 'How we compare:',
      criteria: [
        'Gutter design & performance',
        'Materials & durability',
        'Warranty coverage',
        'Installation approach',
        'Customer experience',
        'Service availability',
      ],
      link: 'How we evaluate',
    },

    // Replaces the repeated #1 card under the rankings.
    verdict: {
      heading: 'Why Leafguard Earned Our Top Spot',
      body:
        'Most gutter protection is an add-on: a screen or cover attached to gutters that were never designed for it. Leafguard removes that weak point. The hood, trough and hangers are roll-formed on site as one seamless piece of .032 aluminum, so there is no separate guard to loosen, sag or blow off.',
      points: [
        { title: 'Built as one piece', body: 'The debris-shedding hood is part of the gutter, not a cover fastened to it.' },
        { title: 'Heavier construction', body: '.032 aluminum with internal hangers about every two feet.' },
        { title: 'Backed for as long as you own the home', body: 'If it clogs, Leafguard says it will clean your gutters for free.' },
      ],
      link: 'Read our full Leafguard review',
    },

    // "What to Look for" rewritten as practical, decision-oriented guidance.
    guide: {
      heading: 'What to Look for in a Gutter Protection Company',
      intro:
        'Gutter protection systems work in different ways, and quotes are not always comparing the same thing. Use these four areas to compare options side by side.',
      items: [
        {
          title: 'Gutter Design & Materials',
          body: 'Systems fall into three groups: fine mesh screens that sit over the gutter, solid hoods that guide water in by surface tension, and one-piece gutters with the hood built in. Mesh stops the smallest debris; hoods and one-piece designs avoid a filter surface altogether. Material thickness and how the system is fastened matter as much as the design.',
          questions: [
            'What gauge or thickness is the gutter and the guard?',
            'How is it fastened: to the fascia, or under the shingles?',
            'How far apart are the hangers?',
          ],
        },
        {
          title: 'Your Existing Gutters',
          body: 'Some companies install on the gutters you already have, usually after cleaning and realigning them. Others replace your gutters entirely. Keeping sound gutters can mean a smaller project; replacing old or damaged ones avoids putting a new guard on a gutter near the end of its life.',
          questions: [
            'Will you keep or replace my gutters, and why?',
            'If you keep them, what repairs or realignment are included?',
            'Is removal and disposal of old gutters part of the price?',
          ],
        },
        {
          title: 'Warranty & Clog Guarantee',
          body: 'A no-clog promise and a product warranty are different things. One covers performance; the other covers defects in the material or finish. Check who stands behind each, how a claim is made, and whether coverage transfers if you sell the home.',
          questions: [
            'Can I see the written warranty before I sign?',
            'Who handles a clog claim: the manufacturer or the local installer?',
            'Does the coverage transfer to the next owner, and is registration required?',
          ],
        },
        {
          title: 'Pricing & Estimates',
          body: 'Most gutter protection companies price through an in-home estimate rather than online. Get written quotes from more than one company and confirm that each covers the same footage, downspouts and repairs so the numbers are comparable.',
          questions: [
            'Is the estimate free and in writing?',
            'How long is the quote valid?',
            'What financing is available, and what are its terms?',
          ],
        },
      ],
    },

    // In-depth Leafguard review, restructured (substance unchanged).
    review: {
      kicker: 'In-Depth Review',
      heading: 'Leafguard Review: A One-Piece Alternative to Gutter Guards',
      verdict:
        'Leafguard replaces your gutters with a patented one-piece seamless system that has the debris-shedding hood built in. It suits homeowners whose gutters are aging and who would rather replace them once than add a guard to them.',
      bestFor: 'Homeowners ready to replace aging gutters who want the gutter and guard built as one piece.',
      system: {
        heading: 'The Leafguard System',
        intro:
          'Rainwater follows the curve of the hood into the trough while leaves, pine needles and other debris roll off the edge. Because the hood, gutter and hangers are one piece, there is no seam between gutter and guard for debris to collect in.',
        features: [
          { title: 'One-piece construction', body: 'The hood is formed as part of the gutter, so there is no separate guard to detach.' },
          { title: '.032 aluminum', body: 'About 20% thicker than conventional gutters, per Leafguard.' },
          { title: 'Hangers about every two feet', body: 'Internal hangers and oversized downspouts support heavy loads.' },
          { title: 'Rated for heavy rain', body: 'Leafguard rates the system to handle up to 32 inches of rain per hour.' },
          { title: 'ScratchGuard finish', body: 'Resists chipping, peeling and rust.' },
        ],
      },
      install: {
        heading: 'The Installation Process',
        intro:
          'Leafguard’s gutters are custom roll-formed on site and mounted to the fascia board, not under your shingles. Most installations are finished in one day or less.',
      },
      warranty: {
        heading: 'Warranty & Guarantee',
        intro:
          'Leafguard’s coverage has two separate parts. Here is what each one says, and the conditions that apply.',
        columns: [
          {
            label: 'Leafguard’s guarantee',
            title: 'Lifetime no-clog guarantee',
            body: 'Leafguard states your gutters will not clog for as long as you own your home, or it will clean them for free.',
          },
          {
            label: 'Written warranty',
            title: 'Transferable finish warranty',
            body: 'Englert warrants the ScratchGuard finish against blistering, chipping, cracking, peeling and rust caused by manufacturing defects. Coverage can transfer to a new owner.',
          },
          {
            label: 'Conditions & exclusions',
            title: 'Read before you sign',
            list: [
              'Register within 30 days of installation.',
              'Notify Englert within 30 days of a home sale to transfer.',
              'Homes within a half mile of the seacoast are excluded.',
              'Per the warranty documents, clog claims are handled by the installing dealer.',
            ],
          },
        ],
      },
      pros: [
        'One-piece system with no separate guard to detach',
        'Thick .032 aluminum with hangers about every two feet',
        'Rated for up to 32 inches of rain per hour, per Leafguard',
        'Lifetime no-clog guarantee',
        'Custom-formed on site; most installs take a day or less',
      ],
      thingsToKnow: [
        'It replaces your gutters, so it is a bigger project than adding a guard to gutters you already have.',
        'Pricing comes from a free in-home estimate rather than published prices, so you will need a visit to compare costs.',
        'Clog claims go through the local installing dealer rather than directly to the manufacturer.',
        'The 0% financing offer is a credit account and requires credit approval.',
      ],
      offer: {
        kicker: 'Current Offer',
        lead: 'Start with a free in-home estimate and a written quote the same visit.',
      },
    },
  },
};
