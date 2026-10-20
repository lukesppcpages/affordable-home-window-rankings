// Home remodeling category (windows, roofing, siding, doors): page copy,
// rankings and partner settings. Same shape as window-replacement.mjs.
//
// Content rules (from the project brief):
// - Scores are Affordable Home editorial scores supplied by the business, not
//   customer ratings, test results or a calculated formula.
// - Every factual claim below was checked against the source listed in
//   `sources` (see README → Home Remodeling sources). Anything unconfirmed
//   lives in `pending` (shown in the draft build, stripped from production).
// - Power works with independent installation partners — never describe its
//   installers as exclusively in-house employees.

export default {
  slug: 'home-remodeling',
  name: 'Home Remodeling',
  updated: { label: 'October 2026', iso: '2026-10-01' },

  meta: {
    title: 'Best Home Remodeling Companies of 2026 | Affordable Home',
    description:
      'Compare top home remodeling companies for windows, roofing, siding, and doors. Explore company ratings, services, and reviews to find the right fit.',
    ogImage: 'images/power-home/power-truck-1024.webp',
  },

  // Page-specific overrides of src/config/site.mjs.
  siteOverrides: {
    experiments: { ctaLabel: 'Get Free Quote', variantId: 'remodeling-control' },
    disclosure:
      'Affordable Home may receive compensation from featured companies, which can influence their placement and visibility. Ratings reflect Affordable Home editorial assessments, not customer review averages.',
    disclosureShort:
      'Affordable Home may receive compensation from featured companies, which can influence their placement and visibility. Ratings reflect Affordable Home editorial assessments, not customer review averages.',
  },

  hero: {
    image: {
      src: 'images/hero-home-1100.webp',
      srcSmall: 'images/hero-home-640.webp',
      width: 1100,
      height: 619,
      alt: 'Two-story suburban home with new windows, roofing and siding in warm evening light',
    },
    headline: 'Best Home Remodeling Companies of 2026',
    intro:
      'From new windows and roofing to siding and doors, choosing the right remodeling company matters. We compared leading home improvement providers to help you find the right fit for your home and your next project.',
  },

  scoreLabel: 'Affordable Home Score',
  topPickRepeat: 'Our Top Rated Remodeling Company',

  brands: [
    {
      id: 'power-home-remodeling',
      rank: 1,
      name: 'Power Home Remodeling',
      shortName: 'Power',
      score: 10.0,
      featured: true,
      distinction: 'Best Overall',
      services: ['windows', 'roofing', 'siding', 'doors'],
      logo: { src: 'images/brands/power-home.webp', width: 198, height: 240 },
      // Root of Power's deals domain (not the window-specific page). Confirm it
      // is approved for a multi-service page and add tracking parameters.
      cta: { url: 'https://powerhrgdeals.com/', verified: false },
      bullets: [
        'Windows, roofing, siding and doors through one remodeling company',
        'Products from manufacturers including Pella, GAF and ProVia',
        'Project Pulse tracking and a limited lifetime labor warranty',
      ],
      summary:
        'Power stands out for bringing major exterior upgrades under one company, with specialized installation teams, established product partners, and a coordinated experience from consultation through completion.',
      deepReview: {
        anchor: 'power-home-review',
        title: 'Why Power Home Remodeling Earned Our Top Spot',
        intro: [
          "Power Home Remodeling earns our top spot by making major exterior home improvements easier to manage. Whether you're replacing aging windows, installing a new roof, updating your siding, or upgrading your doors, Power brings these projects together through one established remodeling company. With products from manufacturers like GAF, Pella and ProVia, professionally trained installation teams, dedicated project tracking, and a limited lifetime labor warranty, Power offers a compelling combination of quality, convenience, and long-term support.",
          'Power has been remodeling homes since 1992 and today serves homeowners in 25 states, so it brings real scale and experience to every project.',
        ],
        heroImage: {
          src: 'images/power-home/power-truck-1024.webp',
          srcSmall: 'images/power-home/power-truck-640.webp',
          width: 1024,
          height: 683,
          alt: 'Power Home Remodeling logo on the hood of a company service vehicle',
        },
        services: {
          title: 'Four Services. One Remodeling Company.',
          items: [
            {
              name: 'Windows',
              body: 'Custom-made vinyl replacement windows in double-hung, casement, sliding, bay and bow, picture and specialty styles. Double-pane Heat Shield glass with argon gas is built for efficiency and noise reduction, and Power sources from manufacturers including Pella and ProVia, depending on location.',
            },
            {
              name: 'Roofing',
              body: 'A complete roofing system built around GAF shingles made exclusively for Power, with a 50-year rating and 130 mph wind rating. Each roof includes leak barrier, underlayment, drip edge and PowerVent intake ventilation to help attic air circulate and protect the shingles.',
            },
            {
              name: 'Siding',
              body: 'Insulated vinyl siding with form-fitting Neopor foam, protective house wrap and fade-resistant panels rated for winds up to 130 mph. Choose wood- and stone-look profiles, cedar and accent shingles, and matching soffit, fascia and gutters for a low-maintenance exterior.',
            },
            {
              name: 'Doors',
              body: "Power's Freedom Series entry doors, made in partnership with ProVia, pair a 20-gauge steel-plated slab and insulated foam core with Schlage hardware and Heat Shield glass options. Power also installs vinyl sliding patio doors with tempered, insulated glass.",
            },
          ],
        },
        process: {
          title: 'A More Coordinated Remodeling Experience',
          image: {
            src: 'images/power-home/install-1200.webp',
            srcSmall: 'images/power-home/install-640.webp',
            width: 1200,
            height: 800,
            alt: 'Power Home Remodeling installers fitting a new window into a home',
          },
          steps: [
            { title: 'In-home consultation', body: 'A Power Remodeling Consultant inspects your home and walks you through styles, colors and product options in person.' },
            { title: 'Product selection & estimate', body: 'You leave with a free written estimate that Power says stays valid for up to one year, so you can plan and compare at your own pace.' },
            { title: 'Professional installation', body: 'Once you approve the project, Power confirms measurements, orders products and schedules installers trained in local codes and regulations.' },
            { title: 'Completion & ongoing support', body: "Your project is backed by manufacturer warranties and Power's limited lifetime labor warranty, with Customer Support available after the work is done." },
          ],
        },
        app: {
          logo: { src: 'images/power-home/project-pulse-logo.png', width: 111, height: 50, alt: 'Power Project Pulse' },
          image: { src: 'images/power-home/project-pulse-phone.webp', width: 560, height: 560, alt: 'Project Pulse app showing window and door installation progress' },
          title: "Know What's Happening With Your Project",
          body: "Project Pulse is Power's secure project-tracking app. It keeps every detail of your remodel in one place, from the first appointment through completion.",
          points: [
            'Monitor upcoming appointments',
            'Receive real-time project updates',
            'Access documents, photos and warranty copies',
            'Sign paperwork electronically from anywhere',
          ],
        },
        warranty: {
          title: 'Warranty & Long-Term Support',
          items: [
            {
              title: 'Manufacturer product warranties',
              body: 'Cover defects in the materials themselves, such as window glass, shingles or siding panels. They come from the manufacturer and are transferable, and Power helps file claims on your behalf.',
            },
            {
              title: "Power's limited lifetime labor warranty",
              body: 'Covers problems caused by the installation for as long as you own your home. It can be transferred to a buyer who contacts Power within 30 days of closing.',
            },
          ],
          note: 'Both warranties have specific terms and exclusions. Ask for the written warranty documents and review coverage, exclusions and transfer requirements before you sign.',
        },
        prosTitle: 'Potential Advantages',
        pros: [
          'Windows, roofing, siding and doors from one company',
          'Established partners including GAF, Pella and ProVia',
          'One coordinated process from consultation to completion',
          'Project Pulse app for appointments, updates and documents',
          'Limited lifetime labor warranty, subject to terms',
        ],
        consTitle: 'Things to Consider',
        cons: [
          'Pricing comes from an in-home consultation rather than an instant online quote',
          'Service and product availability depend on your location',
          "Not the best fit if you want to buy materials separately and hire your own installer",
          'Compare written quotes and warranty terms before committing',
        ],
        finalCta: {
          title: 'See What Power Can Do for Your Home',
          body: 'Explore your options for windows, roofing, siding, and doors with a free in-home consultation.',
          ctaLabel: 'Get Free Quote',
        },
      },
      pending: [
        'CTA: confirm powerhrgdeals.com is approved for this multi-service page; add tracking parameters',
        'Pella availability varies by market — confirm which markets the page will target',
        'No promotional offer is shown; add one only if Power approves it for this page',
      ],
    },
    {
      id: 'dabella',
      rank: 2,
      name: 'DaBella',
      score: 9.7,
      distinction: 'Best for Roofing & Siding',
      // Doors intentionally omitted: not an advertised DaBella service.
      services: ['windows', 'roofing', 'siding', 'gutters', 'baths'],
      logo: { src: 'images/brands/dabella.svg', width: 262, height: 57 },
      // PLACEHOLDER: dabelladeals.us redirects to a windows-only page. Replace
      // with an approved multi-service (roofing/siding) destination.
      cta: { url: 'https://dabella.us/', verified: false },
      bullets: [
        'GAF Master Elite roofing contractor',
        'James Hardie fiber cement and Alside vinyl siding',
        'Replacement windows, gutters and bath remodeling',
      ],
      summary:
        'DaBella is a strong option for homeowners focused on roofing or siding, with established manufacturer relationships and additional remodeling services that make it worth considering for larger exterior projects.',
      review: {
        overview:
          'DaBella focuses on roofing, siding, windows, gutters and bathroom remodeling. Its standout is manufacturer credentials: it holds GAF Master Elite status for roofing and James Hardie Elite Preferred status for siding. Siding choices include James Hardie fiber cement, Alside vinyl and TandoStone stone accents, and its windows are Fairfield and Glasswing vinyl lines.',
        strengths: [
          'Recognized GAF and James Hardie installer credentials',
          'Fiber cement, vinyl and stone-look siding options',
          'Roofs eligible for the GAF Golden Pledge manufacturer warranty',
        ],
        considerations: [
          "DaBella's own workmanship coverage is short — two years on roofing, one year on siding and windows — so manufacturer warranties carry most long-term protection",
          'Operates in select states, and products vary by location',
          'Door replacement is not an advertised service — confirm with your local office',
        ],
        bestFor:
          'Homeowners whose priority is a new roof or siding and who value manufacturer-certified installation.',
      },
      pending: [
        'CTA destination (currently dabella.us placeholder)',
        'Confirm the states/markets the page will target against DaBella locations',
      ],
    },
    {
      id: 'lowes',
      rank: 3,
      name: "Lowe's",
      score: 9.5,
      distinction: 'Best for Product Selection',
      services: ['windows', 'roofing', 'siding', 'doors'],
      logo: { src: 'images/brands/lowes.webp', width: 351, height: 160 },
      cta: { url: 'https://www.lowes.com/l/install/exterior', label: 'Explore Installation Services', verified: false },
      bullets: [
        'Windows, roofing, siding and door installation services',
        'Access to multiple product brands and material options',
        'Installation arranged through local independent professionals',
      ],
      summary:
        "Lowe's offers a different approach to remodeling, combining a broad retail product selection with professional installation services. It's a practical choice for homeowners who want to explore materials and brands before committing.",
      review: {
        overview:
          "Lowe's pairs its retail product selection with installation for windows, roofing, siding and entry and patio doors. Work is performed by independent local installers that Lowe's says are licensed, insured and background-checked, and Lowe's backs the installation with a limited labor warranty — one year for most categories.",
        strengths: [
          'Compare brands and materials in store or online before you buy',
          'Purchase and installation coordinated through one retailer',
          'Siding options across vinyl, wood and fiber cement',
        ],
        considerations: [
          'The installation experience depends partly on the local independent professional assigned',
          "The standard labor warranty is one year for most categories; longer coverage comes from manufacturer warranties",
          'Available services and products vary by store and market',
        ],
        bestFor:
          'Homeowners who want to compare brands and materials hands-on and prefer buying through an established national retailer.',
      },
      pending: ['Confirm lowes.com/l/install/exterior is the preferred destination (or an affiliate link)'],
    },
  ],

  education: {
    heading: 'What to Look for in a Home Remodeling Company',
    intro:
      "Whether you're replacing your roof, upgrading your windows, or refreshing your home's exterior, the right contractor can make a major difference in the finished result.",
    items: [
      { title: 'Products & Materials', body: 'Look beyond appearance and compare the materials, manufacturers, and performance features available for your project.' },
      { title: 'Installation Experience', body: 'Understand who will perform the work, how the project is managed, and what happens if an issue arises.' },
      { title: 'Warranty Protection', body: 'Review both product and workmanship warranties. Coverage, exclusions, and transferability can vary significantly.' },
      { title: 'Pricing & Project Scope', body: "Compare detailed written estimates that clearly explain materials, labor, timelines, and what's included." },
    ],
  },

  methodology: {
    heading: 'How We Evaluate Home Remodeling Companies',
    intro:
      'These are the factors Affordable Home considers when evaluating home remodeling companies across windows, roofing, siding and doors.',
    criteria: [
      { icon: 'house', title: 'Service Capabilities', body: "Range of remodeling projects offered and how well those services fit homeowners' needs." },
      { icon: 'app-window', title: 'Product Quality & Selection', body: 'Available manufacturers, materials, and product options.' },
      { icon: 'wrench', title: 'Installation & Project Management', body: 'How work is coordinated, who performs installation, and what support is available.' },
      { icon: 'shield-check', title: 'Warranty Coverage', body: 'Manufacturer warranties, labor coverage, and relevant limitations.' },
      { icon: 'messages-square', title: 'Customer Experience', body: 'Consultation, communication, transparency, and post-installation support.' },
      { icon: 'map-pin', title: 'Service Availability', body: 'Where the company operates and whether services are available locally.' },
    ],
    note:
      'Rankings and Affordable Home Scores are editorial assessments. They are not customer review averages, they are not calculated from a dataset, and they are not the result of product testing. Affordable Home may be compensated by companies on this page.',
    draftNote:
      'Before launch: the 10.0 / 9.7 / 9.5 scores were supplied for this page. Document the editorial rationale so each score can be substantiated.',
  },

  // Source record for substantive claims (checked October 2026).
  sources: [
    'powerhrg.com/services — services, partner FAQ (ProVia doors; GAF & CertainTeed roofing; Pella & ProVia windows), 28 territories / 25 states',
    'powerhrg.com/services/windows, /roofing, /siding, /doors — product specifications',
    'powerhrg.com/support/warranties — limited lifetime labor warranty, manufacturer warranties, 30-day transfer',
    'powerhrg.com/support/our-process — consultation, estimate valid up to one year, Project Pulse',
    'powerhrg.com/careers/partner-with-power — "partnered with independent installers" since 1992',
    'dabella.us, /siding, /windows, /warranty — services, GAF Master Elite, James Hardie Elite Preferred, Alside, TandoStone, Fairfield & Glasswing, warranty terms',
    "lowes.com installation pages (via search summaries) — independent licensed/insured/background-checked installers, 1-year labor warranty for most categories",
  ],
};
