// Window Replacement V2: identical to window-replacement.mjs except DaBella is
// the #1 ranked, featured brand (with the in-depth review and offer banners).
// DaBella and Power swap positions and scores; everything else is inherited,
// so shared copy edits to the original flow through automatically.
import base from './window-replacement.mjs';

const original = Object.fromEntries(base.brands.map((b) => [b.id, b]));

const dabella = {
  ...original.dabella,
  rank: 1,
  score: 10.0,
  featured: true,
  shortName: 'DaBella',
  distinction: 'Best Overall',
  bullets: [
    'Exclusive dealer of Fairfield and Glasswing vinyl windows',
    'Double- and triple-pane Low-E glass with argon gas',
    'In-home consultation with a detailed, transparent quote',
  ],
  // Offer carried over from earlier DaBella landing pages — confirm it is current.
  offer: '10% Off + No Payments for 12 Months',
  offerCallout: { kicker: 'Limited Time Offer!' },
  summary: undefined,
  review: undefined,
  deepReview: {
    anchor: 'dabella-review',
    title: 'Why DaBella Earned Our Top Spot',
    intro: [
      'DaBella earns our top spot by pairing quality replacement windows with a straightforward, homeowner-first buying experience. As the exclusive dealer of Fairfield and Glasswing vinyl windows, DaBella offers energy-efficient double- and triple-pane glass with Low-E coatings and argon gas, in classic, contemporary and specialty styles. Every project starts with an in-home visit and a detailed, transparent quote, and expert, certified installers handle the work. With a limited lifetime manufacturer warranty on its windows and recognized manufacturer credentials across its roofing and siding business, DaBella gives homeowners new windows they can feel confident in.',
    ],
    heroImage: {
      src: 'images/dabella/review-home-1100.webp',
      srcSmall: 'images/dabella/review-home-640.webp',
      width: 1100,
      height: 619,
      alt: 'Two-story home with gray siding and white-trimmed replacement windows',
    },
    quality: {
      columns: [
        {
          title: 'The Windows',
          points: [
            'Fairfield and Glasswing vinyl windows, available exclusively through DaBella',
            'Double- and triple-pane glass with Low-E coatings and argon gas',
            'Single- and double-hung, casement, sliding, picture, awning and garden styles',
            'Robust, maintenance-free vinyl frames',
          ],
        },
        {
          title: 'The Installation & Service',
          points: [
            'An in-home consultation that starts with your goals for the project',
            'A detailed, transparent written quote before anything is ordered',
            'Expert, certified installers on install day',
            'Financing through third-party lenders, on approved credit',
          ],
        },
      ],
    },
    process: {
      title: 'What a DaBella Project Looks Like',
      image: {
        src: 'images/dabella/project-974.webp',
        srcSmall: 'images/dabella/project-640.webp',
        width: 974,
        height: 730,
        alt: 'Completed DaBella exterior project with new siding and windows',
      },
      steps: [
        { title: 'Consultation', body: 'A DaBella specialist talks through your goals and the window styles that fit your home.' },
        { title: 'Estimate', body: 'DaBella visits your home, measures and provides a detailed, transparent quote.' },
        { title: 'Financing (optional)', body: 'If you choose to finance, DaBella introduces you to third-party lenders; terms depend on approved credit.' },
        { title: 'Installation', body: 'Expert, certified installers replace your windows using DaBella’s product lines.' },
      ],
    },
    pros: [
      'Exclusive Fairfield and Glasswing window lines',
      'Double- and triple-pane energy-efficient glass options',
      'Classic, contemporary and specialty window styles',
      'Limited lifetime manufacturer warranty on windows',
      'Can also handle roofing, siding and gutters',
    ],
    consTitle: 'Cons',
    cons: [
      'Pricing comes from an in-home visit rather than an instant online estimate. This helps DaBella provide accurate pricing and avoid surprises later on.',
    ],
  },
  pending: [
    'Confirm the "10% Off + No Payments for 12 Months" offer is current (an earlier version expired June 30, 2026) and add required fine print',
    'States served — DaBella operates in select states',
    'DaBella workmanship warranty on windows is one year (manufacturer warranty is limited lifetime via Alside) — not stated on the page',
  ],
};

const power = {
  ...original['power-home-remodeling'],
  rank: 3,
  score: 9.6,
  featured: false,
  distinction: 'Best for Bundled Exterior Projects',
  deepReview: undefined,
  offerCallout: undefined,
  review: {
    overview:
      'Power Home Remodeling is a full-service exterior remodeler founded in 1992 that serves homeowners in 25 states. Its custom-made vinyl windows use double-pane Heat Shield glass with argon gas, and Power also handles roofing, siding and doors, coordinating each project through its Project Pulse app.',
    strengths: [
      'Limited lifetime labor warranty on its installations',
      'Project Pulse app for appointments, updates and documents',
      'Can bundle windows with roofing, siding or doors',
    ],
    considerations: [
      'Pricing comes from an in-home consultation rather than an instant online quote',
      'Available only in the markets Power serves',
    ],
    bestFor: 'Homeowners planning several exterior projects who want one company coordinating the work.',
  },
};

export default {
  ...base,
  slug: 'window-replacement-v2',
  // Variant of the original page for testing — keep it out of search results.
  noindex: true,
  siteOverrides: { experiments: { variantId: 'dabella-top-pick' } },
  brands: base.brands.map((b) => (b.id === 'dabella' ? dabella : b.id === 'power-home-remodeling' ? power : b)),
};
