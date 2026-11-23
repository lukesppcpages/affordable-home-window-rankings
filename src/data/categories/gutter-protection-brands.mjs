// Shared brand data for the gutter protection pages. Each page picks a top
// brand with buildGutterPage(); everything else is identical between pages.
//
// Every claim was checked against the company's own site in November 2026
// (see `sources` and README → Gutter Protection). Claims are the companies' own
// statements; anything unconfirmed lives in `pending` (draft build only).
//
// Leafguard and LeafFilter each carry both a dropdown `review` (used when ranked
// #2) and a `deepReview` (used when they're the #1 top pick).

export const GUTTER_BRANDS = {
  leafguard: {
    id: 'leafguard',
    name: 'Leafguard',
    shortName: 'Leafguard',
    distinction: 'Best One-Piece Gutter System',
    logo: { src: 'images/brands/leafguard.svg', width: 235, height: 57 },
    cta: { url: 'https://www.leafguard.com/', verified: false },
    bullets: [
      'One-piece seamless gutter with a built-in, debris-shedding hood',
      'Thick .032 aluminum with hangers roughly every two feet',
      'Guaranteed not to clog for as long as you own your home',
    ],
    summary:
      'Leafguard replaces your gutters with a single seamless piece formed on site, so the hood, trough and hangers work as one unit instead of a guard clipped onto an old gutter.',
    // Current Leafguard homepage offer (Nov 2026); subject to credit approval.
    offer: '0% Financing: No Interest if Paid in Full in 18 Months',
    offerCallout: { kicker: 'Current Offer' },
    review: {
      overview:
        'Introduced by gutter manufacturer Englert in 1993 and now part of Great Day Improvements, Leafguard replaces your gutters with a patented one-piece seamless aluminum system that is roll-formed on site. The debris-shedding hood is part of the gutter itself, which is made from .032 aluminum and supported by internal hangers about every two feet.',
      strengths: [
        'No separate guard to loosen, sag or blow off',
        'Rated by Leafguard to handle up to 32 inches of rain per hour',
        'Lifetime no-clog guarantee — or Leafguard cleans the gutters for free',
      ],
      considerations: [
        'Replaces your existing gutters, so it is a larger project than adding a guard',
        'Per the warranty documents, clog claims are handled by the installing dealer',
      ],
      bestFor:
        'Homeowners ready to replace aging gutters who want the gutter and guard built as one piece.',
    },
    deepReview: {
      anchor: 'leafguard-review',
      title: 'Why Leafguard Earned Our Top Spot',
      intro: [
        'Most gutter guards are add-ons: a screen or cover attached to the gutters you already have. Leafguard takes a different approach. It replaces your gutters with a patented, one-piece seamless system that is roll-formed on site to fit your home, with the debris-shedding hood built into the gutter itself. Rainwater follows the curve of the hood into the trough while leaves, pine needles and other debris roll off the edge.',
        'Because the hood, gutter and hangers are one piece of thick .032 aluminum, there is no separate guard to loosen, sag or blow off. Leafguard backs it with a promise that your gutters will not clog for as long as you own your home, or it will clean them for free. Introduced by Englert in 1993 and now part of Great Day Improvements, Leafguard has served more than 500,000 customers.',
      ],
      heroImage: {
        src: 'images/leafguard/gutter-closeup-1100.webp',
        srcSmall: 'images/leafguard/gutter-closeup-640.webp',
        width: 1100,
        height: 733,
        alt: 'Close-up of a white Leafguard one-piece gutter and downspout on a home',
      },
      quality: {
        columns: [
          {
            title: 'The System',
            points: [
              'One-piece seamless gutter with the hood built in',
              '.032 aluminum, about 20% thicker than conventional gutters',
              'Internal hangers about every two feet and oversized downspouts',
              'Rated by Leafguard to handle up to 32 inches of rain per hour',
              'ScratchGuard finish that resists chipping, peeling and rust',
            ],
          },
          {
            title: 'The Installation & Service',
            points: [
              'Free in-home estimate with a written quote the same visit',
              'Gutters custom roll-formed on site to your home’s exact dimensions',
              'Old gutters removed and disposed of for you',
              'Attaches to the fascia board, not under your shingles',
              'Most installations completed in one day or less',
            ],
          },
        ],
      },
      process: {
        title: 'What a Leafguard Installation Looks Like',
        image: {
          src: 'images/leafguard/installers-1200.webp',
          srcSmall: 'images/leafguard/installers-640.webp',
          width: 1200,
          height: 800,
          alt: 'Two Leafguard installers on ladders fitting new gutters to a home',
        },
        steps: [
          { title: 'Free in-home estimate', body: 'A specialist inspects and measures your home, demonstrates how the system works and gives you a written estimate.' },
          { title: 'Old gutters come down', body: 'The installation team removes your existing gutters and disposes of them.' },
          { title: 'Formed on site', body: 'A roll-forming machine on the truck shapes your new seamless gutters to the exact dimensions of your home.' },
          { title: 'Installed in a day', body: 'Most installations are finished in one day or less, mounted to the fascia rather than under the shingles.' },
        ],
      },
      warranty: {
        title: 'Guarantee & Warranty',
        items: [
          { title: 'Lifetime no-clog guarantee', body: 'Leafguard guarantees your gutters will not clog for as long as you own your home, or it will clean them for free.' },
          { title: 'Transferable finish warranty', body: 'Englert warrants the ScratchGuard finish against blistering, chipping, cracking, peeling and rust from manufacturing defects, and the coverage can transfer to a new owner.' },
        ],
        note: 'Register within 30 days of installation, and notify Englert within 30 days of a home sale to transfer the finish warranty. Homes within a half mile of the seacoast are excluded. Ask for the written terms before you sign.',
      },
      pros: [
        'One-piece system with no separate guard to detach',
        'Thick aluminum with hangers about every two feet',
        'Built for heavy rainfall (up to 32 inches per hour, per Leafguard)',
        'Lifetime no-clog guarantee',
        'Custom-formed on site and usually installed in a day',
      ],
      consTitle: 'Things to Know',
      cons: [
        'Leafguard replaces your gutters entirely, so it is a bigger project than adding a guard to existing gutters. In return, you get new seamless gutters and guards in one installation.',
      ],
    },
    pending: [
      'Confirm the 0% financing offer is current for the campaign dates (homepage, Nov 2026; Home Design Credit Card, subject to credit approval)',
      'Good Housekeeping Seal and "500,000+ customers" are Leafguard’s own statements',
      'CTA: replace leafguard.com with the approved campaign/affiliate link',
    ],
  },

  leaffilter: {
    id: 'leaffilter',
    name: 'LeafFilter',
    shortName: 'LeafFilter',
    distinction: 'Best for Keeping Your Existing Gutters',
    logo: { src: 'images/brands/leaffilter.svg', width: 246, height: 83 },
    cta: { url: 'https://www.leaffilter.com/', verified: false },
    bullets: [
      'Installs on your existing gutters after cleaning, sealing and realigning them',
      '275-micron surgical-grade stainless steel micromesh',
      'Lifetime, transferable no-clog warranty',
    ],
    summary:
      'LeafFilter keeps the gutters you already have and covers them with a fine stainless steel micromesh set in a uPVC frame, so even pine needles and shingle grit stay out.',
    review: {
      overview:
        'Founded in 2005 in Hudson, Ohio and now part of Leaf Home, LeafFilter installs a patented three-piece system over your existing gutters: a 275-micron stainless steel micromesh in a uPVC frame, with a built-in pitch and hidden hangers fastened into the fascia. Crews clean, seal and realign your gutters before installing it.',
      strengths: [
        'Fine micromesh stops small debris like pine needles and shingle grit',
        'Existing gutters are cleaned, sealed and realigned first',
        'Warranty lasts for the life of the home and transfers to the next owner',
      ],
      considerations: [
        'Full warranty terms come from your local representative, so ask for a copy',
        'Availability depends on your location (LeafFilter lists service in 46 states)',
      ],
      bestFor:
        'Homeowners whose gutters are in good shape and who want fine-mesh protection added to them.',
    },
    deepReview: {
      anchor: 'leaffilter-review',
      title: 'Why LeafFilter Earned Our Top Spot',
      intro: [
        'LeafFilter earns our top spot by solving clogged gutters without replacing the gutters you already have. Its patented three-piece system pairs a 275-micron, surgical-grade stainless steel micromesh, fine enough to stop pine needles and shingle grit, with a uPVC frame that will not warp, a built-in pitch that helps debris slide off, and hidden structural hangers fastened into your fascia.',
        'Before installation, LeafFilter’s trained crews clean, seal and realign your existing gutters, so the system starts on gutters that are working properly. It is backed by a lifetime, transferable no-clog warranty: if your gutters clog and overflow, the manufacturer will repair the problem or refund 100% of the material price. Founded in 2005 and now part of Leaf Home, LeafFilter lists service in 46 states.',
      ],
      heroImage: {
        src: 'images/leaffilter/micromesh-592.webp',
        width: 592,
        height: 444,
        alt: 'Gutter guard covering the gutter along the roof edge of a home',
      },
      quality: {
        columns: [
          {
            title: 'The System',
            points: [
              '275-micron, surgical-grade stainless steel micromesh',
              'uPVC frame built not to warp or deteriorate',
              'Built-in pitch that helps leaves and debris slide off',
              'Hidden structural hangers fastened into the fascia board',
              'Keeps out leaves, pine needles, shingle grit and other debris',
            ],
          },
          {
            title: 'The Installation & Service',
            points: [
              'Free, no-obligation estimate',
              'Gutters inspected and measured, with a quote good for one full year',
              'Existing gutters cleaned, sealed and realigned before installation',
              'Crews trained at LeafFilter’s own training facility',
              'Warranty registration online after installation',
            ],
          },
        ],
      },
      process: {
        title: 'What a LeafFilter Installation Looks Like',
        image: {
          src: 'images/leaffilter/installer-1200.webp',
          srcSmall: 'images/leaffilter/installer-640.webp',
          width: 1200,
          height: 615,
          alt: 'LeafFilter installer on a ladder checking a home’s gutter',
        },
        steps: [
          { title: 'Free estimate', body: 'Schedule by phone or online; a LeafFilter professional comes out to look at your home.' },
          { title: 'Inspect & measure', body: 'Your gutters are inspected and measured, and you get a custom quote that is good for one full year.' },
          { title: 'Clean, seal & realign', body: 'On installation day, the crew cleans, seals and realigns your existing gutters.' },
          { title: 'Install & register', body: 'LeafFilter is installed over your gutters, and you register your lifetime warranty online.' },
        ],
      },
      warranty: {
        title: 'Warranty & No-Clog Promise',
        items: [
          { title: 'Lifetime no-clog warranty', body: 'If your gutters clog and overflow, or the clog causes interior water damage, the manufacturer will repair the problem or refund 100% of the material purchase price.' },
          { title: 'Transferable for the life of the home', body: 'The warranty stays with the house and transfers to the next homeowner. LeafFilter recommends registering it online after installation.' },
        ],
        note: 'Full warranty terms are provided by your local LeafFilter representative. Ask for a copy and review the conditions before you sign.',
      },
      pros: [
        'Installs on your existing gutters',
        'Ultra-fine 275-micron stainless steel micromesh',
        'Gutters cleaned, sealed and realigned before installation',
        'Lifetime, transferable no-clog warranty',
        'Quote stays valid for a full year',
      ],
      consTitle: 'Things to Know',
      cons: [
        'Pricing comes from an in-home estimate rather than an instant online quote. This helps LeafFilter provide accurate pricing and avoid surprises later on.',
      ],
      finalCta: {
        title: 'See If LeafFilter Is Right for Your Home',
        body: 'Schedule a free, no-obligation estimate. Your custom quote stays valid for a full year.',
      },
    },
    pending: [
      'No verified LeafFilter promotion — add one (and offer banners) only once confirmed',
      '"Nation’s largest" and 46-state coverage are LeafFilter’s own statements',
      'CTA: replace leaffilter.com with the approved campaign/affiliate link',
    ],
  },

  // Gutter Savings is a matching service (connects homeowners with local
  // installers), not an installer. Facts from guttersavings.com/v2 (Nov 2026).
  'gutter-savings': {
    id: 'gutter-savings',
    name: 'Gutter Savings',
    shortName: 'Gutter Savings',
    distinction: 'Best for Debris and Pest Protection',
    logo: { src: 'images/brands/gutter-savings.webp', width: 400, height: 222 },
    cta: { url: 'https://guttersavings.com/v2/index.html', verified: true },
    // Benefit-led (no promotional offer wording on the card).
    bullets: [
      'Keeps out leaves, pine needles and roof grit, so you can stop cleaning your gutters',
      'Custom-fit to your existing gutters by professional local installers',
      'Lifetime warranty, plus protection against nesting birds, rodents and insects',
    ],
    summary:
      'Gutter Savings connects homeowners with professional installers for custom-fit gutter guards that keep out debris and pests, backed by a lifetime warranty.',
    review: {
      overview:
        'Gutter Savings is a matching service rather than an installer: you enter your zip code, and it connects you with a professional gutter guard installer in your area for a free, no-obligation estimate. The guards are measured and fitted to your existing gutters, keep out leaves, pine needles and roof grit, stop birds, rodents and insects from nesting, and come with a lifetime warranty, according to Gutter Savings.',
      strengths: [
        'Ends seasonal gutter cleaning and ladder climbs',
        'Blocks pests as well as debris',
        'Fits the gutters you already have, with no roof modifications',
      ],
      considerations: [
        'It is a matching service, so ask which company will install your system and for its written warranty',
        'Availability depends on your zip code',
        'Submitting your number lets Gutter Savings and its partners contact you by phone, text and email',
      ],
      bestFor:
        'Homeowners who want low-maintenance gutter protection that also keeps out pests, installed on their existing gutters.',
    },
    pending: [
      'Debris-proof, pest-resistant, existing-gutter fit and lifetime warranty are Gutter Savings’ own statements',
    ],
  },

  'gutter-helmet': {
    id: 'gutter-helmet',
    name: 'Gutter Helmet',
    distinction: 'Best Filter-Free Hood System',
    logo: { src: 'images/brands/gutter-helmet.webp', width: 391, height: 140 },
    cta: { url: 'https://www.gutterhelmet.com/', verified: false },
    bullets: [
      'Patented surface-tension hood with no filter to clog',
      'Textured surface and stiffening ribs on aluminum supports',
      'Lifetime, transferable performance warranty',
    ],
    summary:
      'Gutter Helmet covers your gutters with a solid, ribbed hood that guides water in by surface tension while leaves and needles fall to the ground.',
    review: {
      overview:
        'Gutter Helmet has installed its patented, filter-free hood for more than 45 years. Water follows the textured hood into the gutter by surface tension, while leaves and pine needles fall away. It is installed by a nationwide network of factory-trained, certified dealers, who clean, seal and adjust your gutters as part of the job.',
      strengths: [
        'No mesh or filter that can collect fine debris',
        'PermaLife multilayer finish built to resist chipping, cracking and fading',
        'Optional Helmet Heat add-on for ice and snow',
      ],
      considerations: [
        'Installed by independent certified dealers, so the experience varies by market',
        'The warranty applies only to installation by a certified Gutter Helmet dealer',
      ],
      bestFor:
        'Homeowners who prefer a solid hood to mesh, especially in snowy climates where Helmet Heat is useful.',
    },
    pending: ['Promotion ($200 off at participating dealers) not shown — dates not published'],
  },

  'all-american-gutter-protection': {
    id: 'all-american-gutter-protection',
    name: 'All American Gutter Protection',
    shortName: 'All American',
    distinction: 'Best All-Metal Micromesh Guard',
    logo: { src: 'images/brands/all-american-gutter-protection.webp', width: 279, height: 108 },
    cta: { url: 'https://www.allamericangutterprotection.com/', verified: false },
    bullets: [
      'Rigid aluminum body with stainless steel micromesh',
      'Company-certified crews, with most homes done in a day',
      'Lifetime performance guarantee covering the entire system',
    ],
    summary:
      'A family-owned company that installs an all-aluminum micromesh guard on existing gutters and can replace damaged gutter sections during the same visit.',
    review: {
      overview:
        'All American Gutter Protection is a family-owned company based in Ohio, serving homeowners across the Midwest, Mid-Atlantic, Southeast and Mountain states. Its guard pairs a 100% aluminum body with surgical-grade stainless steel micromesh and fastens under the drip edge to the fascia, never under the shingles.',
      strengths: [
        'Written quote on the spot, honored for one year',
        'Can replace worn gutter sections during the same visit',
        'Discounts for seniors and military families',
      ],
      considerations: [
        'Regional coverage, so confirm your area is served',
        'Written warranty terms are not published online, so ask for them before signing',
      ],
      bestFor:
        'Homeowners in its service area who want a metal micromesh guard and a quick, single-visit installation.',
    },
    pending: ['Service area: the site says both 18 and 20 states — confirm before launch'],
  },

  'thompson-creek': {
    id: 'thompson-creek',
    name: 'Thompson Creek',
    distinction: 'Best for MD, DC & VA Homeowners',
    logo: { src: 'images/brands/thompson-creek.webp', width: 364, height: 160 },
    cta: { url: 'https://www.thompsoncreek.com/gutters/', verified: false },
    bullets: [
      'Seamless gutters and hoods built in its own Maryland factory',
      'Guaranteed not to clog or pull away for up to 50 years',
      'Available in 16 colors and installed by factory-trained experts',
    ],
    summary:
      'A Maryland manufacturer that replaces your gutters with an enclosed, hooded seamless system, available in Maryland, DC and Virginia.',
    review: {
      overview:
        'Thompson Creek designs, builds and installs its own gutter system: seamless aluminum gutters with an enclosed hood, made at its 70,000 sq ft Maryland facility. Brackets and hoods are anchored every 24 inches, elbows are curved for better flow, and a high-back design with eight flow reducers helps prevent overflow.',
      strengths: [
        'No middlemen: it sells, builds, installs and services the system',
        'Choice of 16 colors that never need painting',
        'Guarantee extends to the next owner for a limited time',
      ],
      considerations: [
        'Available only in Maryland, DC and Virginia',
        'A full gutter replacement rather than a guard for existing gutters',
      ],
      bestFor:
        'Homeowners in Maryland, DC or Virginia who want new gutters and guards from a single local manufacturer.',
    },
  },
};

// Builds a gutter page with `topId` as the featured #1 brand. `order` lists the
// remaining brands in rank order. Only the top pick keeps its in-depth review,
// offer and banners; every other brand uses its dropdown review.
export function buildGutterPage({ slug, topId, order, scores, noindex = false, variantId }) {
  const ids = [topId, ...order];
  const brands = ids.map((id, i) => {
    const b = GUTTER_BRANDS[id];
    const top = i === 0;
    return {
      ...b,
      rank: i + 1,
      score: scores[i],
      featured: top,
      distinction: top ? 'Best Overall' : i === 1 ? b.distinction : undefined,
      deepReview: top ? b.deepReview : undefined,
      review: top ? undefined : b.review,
      summary: top && b.offer ? undefined : b.summary,
      offer: top ? b.offer : undefined,
      offerCallout: top ? b.offerCallout : undefined,
    };
  });

  return {
    slug,
    name: 'Gutter Protection',
    noindex,
    updated: { label: 'November 2026', iso: '2026-11-01' },
    siteOverrides: variantId ? { experiments: { variantId } } : undefined,

    meta: {
      title: 'Best Gutter Protection Companies of 2027 | Affordable Home',
      description:
        'Compare the top gutter protection companies, from one-piece gutter systems to micromesh guards. See how each works, what the warranties cover and who each one suits best.',
      ogImage: 'images/leafguard/installers-1200.webp',
    },

    hero: {
      image: {
        src: 'images/gutter-hero-1100.webp',
        srcSmall: 'images/gutter-hero-640.webp',
        width: 1100,
        height: 619,
        alt: 'Sunlit craftsman-style home with a covered front porch',
      },
      headline: 'Best Gutter Protection Companies of 2027',
      intro:
        'Clogged gutters can lead to overflow, fascia rot and water damage. We compared leading gutter protection companies, from one-piece gutter systems to micromesh guards, to help you find the right fit for your home.',
    },

    scoreLabel: 'Affordable Home Score',
    topPickRepeat: 'Our Top Rated Gutter Protection Company',
    brands,

    education: {
      heading: 'What to Look for in a Gutter Protection Company',
      intro:
        'Gutter guards are not all built the same way. These are the differences that matter most before you choose a system.',
      items: [
        { title: 'Guard Design & Materials', body: 'Compare fine mesh, solid hoods and one-piece systems. Mesh stops very small debris; hoods and one-piece designs avoid filters entirely.' },
        { title: 'Your Existing Gutters', body: 'Ask whether the system installs on your current gutters or replaces them, and what happens if your gutters need repair.' },
        { title: 'Warranty & Clog Guarantee', body: 'Separate the no-clog promise from finish or material warranties, and check transferability and who handles claims.' },
        { title: 'Pricing & Estimates', body: 'Get a written estimate and ask how long it is valid. Several companies honor quotes for up to a year.' },
      ],
    },

    methodology: {
      heading: 'How We Evaluate Gutter Protection Companies',
      intro:
        'These are the factors Affordable Home considers when evaluating gutter protection companies.',
      criteria: [
        { icon: 'app-window', title: 'Guard Design & Performance', body: 'How the system keeps debris out and handles heavy rain.' },
        { icon: 'shield-check', title: 'Materials & Durability', body: 'Gutter and guard materials, finishes and how they are fastened to the home.' },
        { icon: 'wrench', title: 'Installation Approach', body: 'Who installs the system, how long it takes and whether existing gutters are kept or replaced.' },
        { icon: 'receipt', title: 'Warranty & Clog Guarantee', body: 'What the no-clog promise and product warranties cover, transferability and claims.' },
        { icon: 'messages-square', title: 'Customer Experience', body: 'Estimates, communication and support after installation.' },
        { icon: 'map-pin', title: 'Service Availability', body: 'Where the company operates and whether it serves your area.' },
      ],
      note:
        'Rankings and Affordable Home Scores are editorial assessments. They are not customer review averages, and they are not the result of product testing. Affordable Home may be compensated by companies on this page.',
      draftNote:
        'Before launch: document the editorial rationale for each score. Brand facts are the companies’ own published statements.',
    },

    sources: [
      'leafguard.com, /how-it-works, /warranty, /installation, /our-story, /financing, /resources/faq',
      'leaffilter.com, /why-leaffilter/leaffilter, /purchase/warranty, /purchase/purchase-process, /company, /locations',
      'gutterhelmet.com, /our-products, /our-promise, /our-process, /dealers',
      'allamericangutterprotection.com, /gutter-guards, /lifetime-warranty-performance, /about, /locations, /faq',
      'thompsoncreek.com/gutters',
    ],
  };
}

export const SCORES = [10.0, 9.7, 9.6, 9.5, 9.4];
// Pages 1 & 2 (six brands, Gutter Savings #3 at 9.6; the rest move down 0.1).
export const SCORES_6 = [10.0, 9.7, 9.6, 9.5, 9.4, 9.3];
