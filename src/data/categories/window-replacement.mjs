// Window replacement category: all page copy, rankings and partner settings.
// Presentation components never hard-code brand facts — edit them here.
//
// Content rules (from the project brief):
// - Scores are Affordable Home editorial scores, supplied by the business.
//   They are not customer review averages or test results.
// - Do not add warranties, financing, timelines, discounts or coverage claims
//   until they are confirmed. Put unconfirmed items in `pending` instead:
//   they appear in the draft build and are stripped from production.
// - `cta.verified: false` means the destination is a placeholder supplied in
//   the brief and must be confirmed (and tracking params added) before launch.

export default {
  slug: 'window-replacement',
  name: 'Window Replacement',
  updated: { label: 'October 2026', iso: '2026-10-01' },

  meta: {
    title: 'Best Window Replacement Companies of 2026 | Affordable Home',
    description:
      'Compare leading window replacement companies, explore ratings and reviews, and find the right window replacement provider for your home.',
    ogImage: 'images/power-home/install-1200.webp',
  },

  hero: {
    image: {
      src: 'images/hero-home-1100.webp',
      srcSmall: 'images/hero-home-640.webp',
      width: 1100,
      height: 619,
      alt: 'Two-story suburban home with white-trimmed windows in warm evening light',
    },
    headline: 'Best Window Replacement Companies of 2026',
    intro:
      "Replacing your windows is a big investment. We've brought together leading window replacement companies to help you compare your options and find the right fit for your home.",
  },

  scoreLabel: 'Affordable Home Score',
  // Heading above the repeated #1 card after the rankings. null = no repeat.
  topPickRepeat: 'Our Top Rated Window Company',

  brands: [
    {
      id: 'power-home-remodeling',
      rank: 1,
      name: 'Power Home Remodeling',
      shortName: 'Power',
      score: 10.0,
      featured: true,
      distinction: 'Best Overall',
      logo: { src: 'images/brands/power-home.webp', width: 198, height: 240 },
      cta: { url: 'https://powerhrgdeals.com/', verified: false },
      bullets: [
        'One company handles consultation, measuring and installation',
        'Also replaces roofing, siding, doors and attic insulation',
        'In-home consultation with a project quote',
      ],
      // Shown bold under the bullets on every screen size (replaces the summary).
      offer: '$0 Down + No Payments For 2 Years',
      // Offer banner shown above the footer.
      offerCallout: { kicker: 'Limited Time Offer!' },
      // In-page review (replaces the dropdown for this brand). "Read Full Review"
      // on both Power cards jumps here.
      deepReview: {
        anchor: 'power-home-review',
        title: 'Why Power Earned Our Top Spot',
        intro: [
          "Power Home Remodeling earns our top spot because they deliver more than quality windows. They deliver a complete replacement experience homeowners can feel confident in. Their custom-made, energy-efficient windows are designed for lasting comfort, while their own trained installation teams help ensure the job is done right. With over 30 years of experience, a limited lifetime warranty, and one company accountable from start to finish, Power stands out for both the quality of its products and the people behind them.",
        ],
        heroImage: {
          src: 'images/power-home/power-truck-1024.webp',
          srcSmall: 'images/power-home/power-truck-640.webp',
          width: 1024,
          height: 683,
          alt: 'Power Home Remodeling logo on the hood of a company service vehicle',
        },
        quality: {
          columns: [
            {
              title: 'The Windows',
              points: [
                'Custom-built to the exact measurements of each opening',
                'Energy-efficient, heat-reflective glass for year-round comfort',
                'Leak-resistant construction that keeps drafts and moisture out',
                'A wide range of styles, colors and finishes to match your home',
              ],
            },
            {
              title: 'The Installation & Service',
              points: [
                'Specialists who show you real options in your home, not just a brochure',
                'Trained Power crews on install day — never subcontractors',
                'Careful removal, a precise fit and proper sealing on every opening',
                'Full cleanup and a final walkthrough before the crew leaves',
              ],
            },
          ],
        },
        process: {
          title: 'What a Power Project Looks Like',
          image: {
            src: 'images/power-home/install-1200.webp',
            srcSmall: 'images/power-home/install-640.webp',
            width: 1200,
            height: 800,
            alt: 'Two Power Home Remodeling installers fitting a new window into a home',
          },
          steps: [
            { title: 'In-home consultation', body: 'A Power specialist walks through your goals, shows options in person and measures every opening.' },
            { title: 'A clear, written quote', body: "You see the full project and price before anything is ordered — no surprises on install day." },
            { title: 'Installation by Power crews', body: 'Trained Power installers remove the old windows, fit the new ones and seal everything properly.' },
            { title: 'Cleanup and walkthrough', body: "The crew cleans up and walks you through the finished work before they leave." },
          ],
        },
        app: {
          logo: { src: 'images/power-home/project-pulse-logo.png', width: 111, height: 50, alt: 'Power Project Pulse' },
          image: { src: 'images/power-home/project-pulse-phone.webp', width: 560, height: 560, alt: 'Project Pulse app showing window and door installation progress' },
          title: 'Track Every Step with Project Pulse',
          body: "Power's project-tracking app keeps you in the loop from contract to completion, so you're never left wondering what happens next.",
          points: [
            'See upcoming appointments',
            'Get real-time project updates',
            'Access documents and photos anytime',
            'Sign paperwork from anywhere',
          ],
        },
        pros: [
          'High-quality, energy-efficient windows custom-made for your home',
          'One company handles everything, from consultation to cleanup',
          'Installed by trained, in-house Power crews',
          'Limited lifetime warranty for long-term peace of mind',
          'Can bundle windows with roofing, siding or doors',
          'Project Pulse app keeps you updated at every step',
        ],
        consTitle: 'Cons',
        cons: [
          'Pricing comes from an in-home visit rather than an instant online estimate. This helps Power provide accurate pricing and avoid surprises later on.',
        ],
      },
      pending: [
        'Confirm with Power (carried over from ServiceReview copy): limited lifetime warranty wording and what it covers',
        'Confirm: installers are Power employees, not subcontractors',
        'Confirm: heat-reflective glass, leak-resistant construction, and range of styles/colors/finishes',
        'Confirm: Project Pulse app features listed',
        'Window product lines and styles offered',
        'Confirm the "$0 Down + No Payments For 2 Years" offer with Power, plus required fine print (e.g. subject to credit approval)',
        'Current service area / states served',
      ],
    },
    {
      id: 'champion-windows',
      rank: 2,
      name: 'Champion Windows',
      score: 9.7,
      distinction: 'Best for Factory-Direct Windows',
      logo: { src: 'images/brands/champion.svg', width: 288, height: 109 },
      cta: { url: 'https://championwindowdeals.com/', verified: false },
      bullets: [
        'Manufactures its own vinyl replacement windows',
        'Sells and installs factory-direct',
        'Also offers sunrooms, siding and entry doors',
      ],
      summary:
        'A long-running manufacturer that sells and installs its own windows rather than reselling other brands.',
      review: {
        overview:
          'Champion has made windows since 1953 and sells them directly to homeowners, handling the in-home consultation and installation itself. Because it builds its own product, the buying process stays with one company from quote to install.',
        strengths: [
          'Manufacturer-direct: no separate retailer or dealer in the middle',
          'Single company responsible for product and installation',
          'Broader exterior lineup including sunrooms and siding',
        ],
        considerations: [
          "Product choice is limited to Champion's own windows",
          'Availability depends on local showroom coverage',
        ],
        bestFor:
          'Homeowners who prefer buying straight from the manufacturer and want vinyl replacement windows.',
      },
      pending: ['Warranty terms', 'Financing options', 'Current service area'],
    },
    {
      id: 'dabella',
      rank: 3,
      name: 'DaBella',
      score: 9.6,
      distinction: 'Best for Bundled Exterior Projects',
      logo: { src: 'images/brands/dabella.svg', width: 262, height: 57 },
      cta: { url: 'https://dabelladeals.us/window-replacement/', verified: false },
      bullets: [
        'Replacement windows plus roofing, siding and gutters',
        'Free in-home estimates',
        'Also handles bathroom remodeling',
      ],
      summary:
        'A multi-service home improvement company that can pair window replacement with other exterior work.',
      review: {
        overview:
          'DaBella offers window replacement as part of a broader home improvement lineup that includes roofing, siding, gutters and bathroom remodeling. Projects begin with a free in-home estimate.',
        strengths: [
          'Can combine windows with other exterior projects',
          'Free in-home estimate to scope the work',
          'Broad service menu under one company',
        ],
        considerations: [
          'Service area is still growing — confirm availability for your address',
          'Ask which window brands and product lines are offered locally',
        ],
        bestFor:
          'Homeowners planning several exterior upgrades who want one company to quote them together.',
      },
      pending: ['Window brands/product lines', 'Warranty terms', 'Financing options', 'States served'],
    },
    {
      id: 'renewal-by-andersen',
      rank: 4,
      name: 'Renewal by Andersen',
      score: 9.5,
      distinction: 'Best for Composite Windows',
      logo: { src: 'images/brands/renewal-by-andersen.webp', width: 472, height: 160 },
      cta: { url: 'https://www.renewalbyandersen.com/', verified: false },
      bullets: [
        'Full-service replacement division of Andersen',
        'Fibrex composite frames, an alternative to vinyl',
        'Designs, builds and installs its own windows',
      ],
      summary:
        "Andersen's full-service replacement brand, built around its own Fibrex composite windows.",
      review: {
        overview:
          'Renewal by Andersen is the full-service window replacement division of Andersen Corporation, which dates to 1903. It manufactures its own windows — most using Fibrex, a wood-fiber and vinyl composite — and manages the sale and installation.',
        strengths: [
          'Backed by one of the best-known U.S. window manufacturers',
          'Composite frame material as an alternative to standard vinyl',
          'Product and installation handled by the same organization',
        ],
        considerations: [
          'Often positioned as a premium option — compare detailed quotes',
          "Product selection centers on the company's own window lines",
        ],
        bestFor:
          'Homeowners who want a nationally recognized manufacturer and are interested in composite window frames.',
      },
      pending: ['Warranty terms', 'Financing options'],
    },
    {
      id: 'lowes',
      rank: 5,
      name: "Lowe's",
      score: 9.4,
      distinction: 'Best for Brand Selection',
      logo: { src: 'images/brands/lowes.webp', width: 351, height: 160 },
      cta: { url: 'https://www.lowes.com/search?searchTerm=windows', verified: false },
      bullets: [
        'Compare several window brands in one place',
        "Installation arranged through Lowe's",
        'Nationwide stores for in-person help',
      ],
      summary:
        'A national home improvement retailer where you can compare multiple window brands and arrange installation.',
      review: {
        overview:
          "Lowe's sells replacement windows from several manufacturers and can arrange installation through its installation services program. It's a practical way to compare brands side by side, in store or online.",
        strengths: [
          'Wide selection of window brands and price points',
          'Shop online or in a local store',
          'Purchase and installation arranged through one retailer',
        ],
        considerations: [
          'Installation is typically performed by independent local installers',
          'Experience can vary by store and installer',
        ],
        bestFor:
          'Homeowners who want to compare several window brands and prefer shopping with a national retailer.',
      },
      pending: ['Installation warranty terms', 'Financing / credit options'],
    },
  ],

  education: {
    heading: 'What to Look for in a Window Replacement Company',
    intro:
      'Choosing the right window company goes beyond comparing prices. Here are a few important factors to consider before making your decision.',
    items: [
      {
        title: 'Window Quality & Efficiency',
        body: 'Look for materials, glass options, and energy-efficiency features that fit your home and climate.',
      },
      {
        title: 'Installation Experience',
        body: 'Understand who performs the installation and what the process includes.',
      },
      {
        title: 'Warranty Coverage',
        body: 'Compare product and labor warranties, including exclusions and limitations.',
      },
      {
        title: 'Pricing & Financing',
        body: 'Request a detailed estimate and understand the total project cost before committing.',
      },
    ],
  },

  methodology: {
    heading: 'How We Evaluate Window Replacement Companies',
    intro:
      'These are the factors Affordable Home considers when evaluating window replacement companies. Each one reflects a question homeowners should be able to answer before signing a contract.',
    criteria: [
      { icon: 'app-window', title: 'Product selection and quality', body: 'Range of window styles, frame materials and glass options available.' },
      { icon: 'wrench', title: 'Installation services', body: 'Who installs the windows and how the project is managed from measurement to cleanup.' },
      { icon: 'shield-check', title: 'Warranty terms', body: 'What product and labor warranties cover, for how long, and what they exclude.' },
      { icon: 'receipt', title: 'Pricing transparency', body: 'How clearly quotes explain total cost, and what financing is available.' },
      { icon: 'messages-square', title: 'Customer experience', body: 'How easy the company is to work with, from scheduling to follow-up.' },
      { icon: 'map-pin', title: 'Service availability', body: 'Where the company operates and how widely homeowners can access it.' },
    ],
    note:
      'Rankings and Affordable Home Scores are editorial assessments. They are not customer review averages, and they are not the result of product testing. Affordable Home may be compensated by companies on this page.',
    draftNote:
      'Before launch: the scores shown were supplied for this page. Finalize and document the scoring methodology so every score can be substantiated.',
  },

};
