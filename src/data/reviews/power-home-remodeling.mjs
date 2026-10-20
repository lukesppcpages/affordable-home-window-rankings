// Power Home Remodeling company review (/power-home-remodeling-review/).
//
// Single source of truth for the page: services (labels, CTAs, panels, form
// copy stay in sync from here), review copy, search-intent variants and the
// lead form settings. Every factual claim is listed with its source in
// power-home-remodeling.sources.md — keep the two in step.
//
// Content rules (from the project brief):
// - Qualitative review only: no score, star rating, testimonials or invented stats.
// - Power works with independent installation partners — never describe its
//   installers as exclusively in-house employees.
// - Anything unconfirmed goes in `pending` (shown in the draft build only).

export default {
  slug: 'power-home-remodeling-review',
  company: 'Power Home Remodeling',
  shortName: 'Power',
  // Date Power's published information was last checked for this page.
  reviewed: { label: 'October 2026', iso: '2026-10-20' },

  meta: {
    title: 'Power Home Remodeling Reviews | Affordable Home',
    description:
      "Research Power Home Remodeling's windows, roofing, siding, doors, installation process, warranties, and customer feedback before requesting an estimate.",
    ogImage: 'images/power-home/power-truck-1024.webp',
  },

  logo: { src: 'images/brands/power-home.webp', width: 198, height: 240, alt: 'Power Home Remodeling logo' },

  disclosure:
    'Affordable Home may earn compensation when you connect with companies featured on our site. This may influence how companies are presented.',
  notAffiliated:
    'Affordable Home is an independent review site and is not Power Home Remodeling. Power trademarks belong to their owner.',

  hero: {
    eyebrow: 'Company Review',
    headline: 'Power Home Remodeling Reviews: Is It Worth It?',
    intro:
      "A closer look at Power Home Remodeling's products, installation process, warranties, and what homeowners should know before choosing them for their next project.",
    image: {
      src: 'images/hero-home-1100.webp',
      width: 1100,
      height: 619,
      alt: 'Two-story suburban home with new windows, roofing and siding',
    },
  },

  // Optional headline variants for Google Ads ad groups. Add ?intent=<key> to
  // the ad's final URL (or URL suffix). Unknown keys fall back to the default.
  // Each variant must stay accurate to what the page actually covers.
  intents: {
    reviews: {
      headline: 'Power Home Remodeling Reviews: What Homeowners Should Know',
      intro:
        'What customers praise, what they complain about, and how Power Home Remodeling handles products, installation and warranties — so you can decide if a consultation is worth your time.',
    },
    cost: {
      headline: 'Power Home Remodeling Cost: How Pricing and Estimates Work',
      intro:
        "Power Home Remodeling doesn't publish prices. Here's what drives the cost of a Power project, how the in-home estimate works, and what to compare before you sign.",
    },
    windows: { service: 'windows' },
    roofing: { service: 'roofing' },
    siding: { service: 'siding' },
    doors: { service: 'doors' },
  },

  glance: {
    overview:
      'Power Home Remodeling is a large exterior remodeling company founded in 1992. It replaces windows, roofs, siding and entry doors for homeowners in 25 states, sells through free in-home consultations, and backs installation with a limited lifetime labor warranty.',
    facts: [
      ['Founded', '1992'],
      ['Service area', '25 states'],
      ['Pricing', 'In-home estimate'],
      ['Labor warranty', 'Limited lifetime'],
    ],
    verdict:
      "Worth a consultation if you're planning a full exterior replacement and want one company to handle the products, installation and labor warranty. Go in ready to compare: Power doesn't publish prices, and some customers describe the in-home sales process as high-pressure.",
    strengths: [
      'Windows, roofing, siding and doors from one company',
      'Power-specific products made with GAF, ProVia and Pella',
      'Written estimates Power says stay valid for up to a year',
      'Limited lifetime labor warranty, transferable once',
      'Project Pulse app for appointments, updates and documents',
    ],
    considerations: [
      'No published pricing — an in-home visit is required for a quote',
      'Available in 25 states; products vary by market',
      'Geared to full replacements rather than small repairs',
      'Public reviews are mixed on sales pressure and service response',
    ],
  },

  // The four services. Everything service-specific on the page reads from here.
  services: [
    {
      id: 'windows',
      label: 'Windows',
      noun: 'Window',
      cta: 'Get a Free Window Estimate',
      formHeading: 'Get Your Free Window Replacement Estimate',
      submit: 'Get My Free Window Estimate',
      panel: {
        title: 'Window replacement with Power',
        lead: 'Power installs custom-made vinyl replacement windows built to each measured opening. Most homeowners end up comparing glass packages, styles and how many openings to replace at once.',
        points: [
          ['Styles', 'Double-hung, casement, sliding, bay and bow, picture and specialty shapes.'],
          ['Glass', "Power's Heat Shield double-pane glass with argon gas, aimed at efficiency and cutting outside noise."],
          ['Manufacturers', 'Power sources windows from partners including Pella and ProVia, depending on your market.'],
        ],
        ask: "Ask which manufacturer's window you're being quoted, its U-factor, and whether interior and exterior trim are included.",
      },
      overview: {
        title: 'Window Replacement',
        body: 'Custom-built vinyl windows across the full range of styles, each made to the measured opening rather than pulled from stock sizes.',
        points: [
          ['Efficiency', 'Heat Shield double-pane, argon-filled glass helps limit heat transfer and outside noise.'],
          ['Customization', 'Double-hung, casement, slider, bay/bow, picture and specialty shapes.'],
          ['Worth checking', 'The manufacturer (Pella or ProVia) depends on your area — ask which line is in your quote.'],
        ],
      },
    },
    {
      id: 'roofing',
      label: 'Roofing',
      noun: 'Roofing',
      cta: 'Get a Free Roofing Estimate',
      formHeading: 'Get Your Free Roof Replacement Estimate',
      submit: 'Get My Free Roofing Estimate',
      panel: {
        title: 'Roof replacement with Power',
        lead: 'Power sells roofing as a complete system rather than shingles alone, built around GAF shingles made exclusively for Power.',
        points: [
          ['Shingles', 'Power lists a 50-year rating and a 130 mph wind rating for its GAF shingles.'],
          ['The layers underneath', 'Each roof includes leak barrier, underlayment, drip edge and PowerVent intake ventilation.'],
          ['Partners', 'Power names both GAF and CertainTeed as roofing manufacturers it works with.'],
        ],
        ask: "Ask how damaged roof decking is handled and priced — it often can't be fully assessed until the old roof is removed.",
      },
      overview: {
        title: 'Roofing',
        body: 'A full roof replacement system: Power-exclusive GAF shingles plus the waterproofing and ventilation layers that do much of the work.',
        points: [
          ['Wind & weather', 'Shingles rated for 130 mph winds, with leak barrier and underlayment beneath.'],
          ['Ventilation', 'PowerVent intake ventilation helps attic air circulate, which protects the shingles.'],
          ['Worth checking', 'Decking repairs are a common add-on cost — ask how they’re quoted before you sign.'],
        ],
      },
    },
    {
      id: 'siding',
      label: 'Siding',
      noun: 'Siding',
      cta: 'Get a Free Siding Estimate',
      formHeading: 'Get Your Free Siding Replacement Estimate',
      submit: 'Get My Free Siding Estimate',
      panel: {
        title: 'Siding replacement with Power',
        lead: "Power's siding is insulated vinyl. The foam backing is the main thing separating it from standard vinyl panels.",
        points: [
          ['Insulation', 'Form-fitting Neopor foam behind each panel, installed over protective house wrap.'],
          ['Durability', 'Fade-resistant panels rated for winds up to 130 mph.'],
          ['Looks', 'Wood- and stone-look profiles, cedar and accent shingles, with matching soffit, fascia and gutters.'],
        ],
        ask: "If you specifically want fiber cement or natural wood, confirm with Power first — its siding line centers on insulated vinyl.",
      },
      overview: {
        title: 'Siding',
        body: 'Insulated vinyl siding for homeowners who want a refreshed exterior without repainting or regular upkeep.',
        points: [
          ['Low maintenance', 'Vinyl panels don’t need painting; the foam backing adds rigidity and insulation.'],
          ['Appearance', 'Wood-look, stone-look, cedar and accent shingle profiles in multiple colors.'],
          ['Full exterior', 'Soffit, fascia and gutters can be matched in the same project.'],
        ],
      },
    },
    {
      id: 'doors',
      label: 'Doors',
      noun: 'Door',
      cta: 'Get a Free Door Estimate',
      formHeading: 'Get Your Free Door Replacement Estimate',
      submit: 'Get My Free Door Estimate',
      panel: {
        title: 'Door replacement with Power',
        lead: "Power's entry doors are its Freedom Series, made in partnership with ProVia. It also installs vinyl sliding patio doors.",
        points: [
          ['Construction', '20-gauge steel-plated slab with an insulated foam core.'],
          ['Hardware & glass', 'Schlage hardware, with Heat Shield glass options.'],
          ['Patio doors', 'Vinyl sliding patio doors with tempered, insulated glass.'],
        ],
        ask: 'A single door is a smaller job than most Power projects — ask whether Power will quote just one door in your area.',
      },
      overview: {
        title: 'Doors',
        body: 'Steel entry doors from the Freedom Series, made with ProVia, plus vinyl sliding patio doors.',
        points: [
          ['Security', '20-gauge steel-plated slab paired with Schlage hardware.'],
          ['Efficiency', 'Insulated foam core, with Heat Shield glass options.'],
          ['Patio', 'Sliding patio doors use tempered, insulated glass.'],
        ],
      },
    },
  ],

  review: {
    different: {
      paragraphs: [
        "Most homeowners replacing a roof, windows or siding end up juggling separate contractors for each. Power Home Remodeling's model is the opposite: one company that sells, schedules, installs and backs the labor on all four exterior categories. It has worked this way since 1992 and now operates in 28 territories across 25 states.",
        "The other distinguishing piece is how much of the product line is Power-specific. Its roofing is built around GAF shingles made exclusively for Power, its entry doors are a Power series made with ProVia, and its window glass is sold under Power's own Heat Shield name. That gives Power tighter control over what gets installed — and it means you'll be comparing Power's packages against other contractors' rather than shopping identical products.",
      ],
      takeaway:
        "Power's real advantage is coordination: one company for the consultation, product, installation and labor warranty across multiple exterior projects.",
    },
    products: {
      intro:
        'Across the board, Power leans on low-maintenance materials — vinyl and steel rather than wood — sourced from established manufacturers instead of unbranded product.',
      rows: [
        ['Windows', 'Custom vinyl, Heat Shield argon glass; Pella and ProVia partners'],
        ['Roofing', 'Power-exclusive GAF shingles in a full system with PowerVent'],
        ['Siding', 'Insulated vinyl with Neopor foam backing and house wrap'],
        ['Doors', 'Freedom Series steel entry doors (ProVia); vinyl patio doors'],
      ],
      note: "Exact options vary by location, so the lineup at your consultation may be narrower than what's on Power's website.",
    },
    install: {
      steps: [
        ['In-home consultation', 'A Power Remodeling Consultant inspects the home and walks through styles, colors and product options in person.'],
        ['Written estimate', 'You get a free written estimate that Power says stays valid for up to one year.'],
        ['Measure, order, schedule', 'After you approve, Power confirms measurements, orders the product and schedules the installation.'],
        ['Installation & support', 'Installers trained in local codes complete the work; Customer Support handles questions and warranty issues afterward.'],
      ],
      installers:
        'Power works with independent installation partners rather than relying solely on in-house crews — the company describes itself as having "partnered with independent installers" since 1992. Power schedules and manages the job, and the labor warranty is Power\'s, but it\'s reasonable to ask who will be on site and how long that crew has worked with Power.',
      pulse: {
        title: 'Project Pulse',
        body: "Power's project-tracking app keeps appointments, real-time updates, documents, photos and warranty copies in one place, and lets you sign paperwork electronically.",
      },
    },
    warranty: {
      items: [
        ['Manufacturer product warranties', 'Cover defects in the materials themselves — window glass, shingles, siding panels. They come from the manufacturer, and Power helps file claims on your behalf.'],
        ["Power's limited lifetime labor warranty", 'Covers problems caused by the installation for as long as you own the home. It can transfer to a buyer who contacts Power within 30 days of closing.'],
      ],
      verify: [
        'What the labor warranty excludes, in writing',
        'How a claim is filed and who comes out to inspect it',
        'Whether any manufacturer warranty needs to be registered',
        'Transfer steps if you might sell within a few years',
      ],
    },
    reputation: {
      intro:
        'Power has a large public review footprint across sites like Trustpilot, the BBB and Checkbook, and the picture is mixed in the way that is common for big in-home sales companies.',
      positive: [
        'Installation crews that were tidy and worked on schedule',
        'Clear communication once the project was underway',
        'Satisfaction with the finished look and comfort of the home',
      ],
      negative: [
        'In-home sales presentations that felt long or high-pressure',
        'Quotes that came in higher than other local contractors',
        'Slow response on some warranty and service calls',
      ],
      context:
        'In a 2018 Detroit TV consumer report on pushy sales complaints, Power said it would review its sales training techniques.',
      note:
        'These are recurring themes in public reviews, not a measured satisfaction rate. Experiences vary by local office and crew, so read recent reviews for your area.',
      sources: [
        ['Trustpilot', 'https://www.trustpilot.com/review/powerhrg.com'],
        ['BBB', 'https://www.bbb.org/search?find_text=Power%20Home%20Remodeling'],
        ['Checkbook', 'https://www.checkbook.org/md/greenbelt/roofers/power-home-remodeling/qpky4'],
      ],
    },
    pricing: {
      paragraphs: [
        "Power doesn't publish prices, which is normal for replacement work that's priced per home. Your number comes from the in-home consultation, after a Remodeling Consultant measures and you've picked products.",
        "Power says its written estimates stay valid for up to a year. Use that time: get one or two comparison quotes with the same scope, and compare the warranty terms as closely as the price.",
      ],
      factors: [
        ['Project size', 'Number of window openings, roof area or siding square footage'],
        ['Product choices', 'Glass package, profile, color and hardware upgrades'],
        ["What's underneath", 'Rotted framing or roof decking found during the work'],
        ['Access & height', 'Multi-story walls and steep roofs take more labor'],
        ['Local factors', 'Permits, code requirements and regional labor costs'],
        ['Financing', 'Power offers financing; interest adds to your total cost'],
      ],
    },
  },

  fit: {
    good: [
      'Are planning a full replacement — whole-house windows, a full roof or new siding',
      'Want several exterior projects handled by one company',
      'Value a lifetime labor warranty and one point of contact',
      'Are comfortable with an in-home consultation before getting a price',
    ],
    alternatives: [
      'You need a small repair, like a few shingles or one cracked pane',
      'You want a material or brand outside Power’s lineup',
      'You want an instant online price without a home visit',
      "Power doesn't serve your area — check availability first",
    ],
  },

  methodology:
    "This is a qualitative editorial review. It's based on Power Home Remodeling's published product, process and warranty information (checked October 2026) and on recurring themes in public customer reviews. Affordable Home did not test products, hire Power for a project, or assign a score.",

  form: {
    heading: 'Ready to See What Your Project Could Cost?',
    intro:
      "Tell us what you're planning and take the next step toward a personalized estimate from Power Home Remodeling.",
    submit: 'Get My Free Estimate',
    // Extra option for visitors with more than one project in mind.
    multiOption: { id: 'multiple', label: 'More than one' },
    // Who receives the request — shown above the submit button.
    recipientNotice:
      'Your request goes to Power Home Remodeling, who may contact you using the details you provide to schedule your free estimate.',
    // POST endpoint for leads (JSON). null = development-only handler: nothing
    // is sent and the visitor sees a clear "not connected" message.
    endpoint: null,
    // Consent language must come from legal review. null = not configured
    // (the build warns; the draft build shows a placeholder).
    consent: {
      text: null,
      // true = render a required, unchecked checkbox with `text` as its label.
      checkbox: false,
    },
    // Set true only if the lead buyer requires a street address.
    requireAddress: false,
  },

  pending: [
    'Lead endpoint not configured — form runs the development-only handler',
    'Consent / TCPA language not supplied — needs legal review before launch',
    'Confirm whether Power requires street address on leads',
    'Confirm Affordable Home has permission to use the Power logo and photos on this page',
    'Pella availability varies by market — confirm target markets',
    '"Geared to full replacements" is an editorial inference from Power\'s service pages — confirm with Power whether it takes small repair jobs',
  ],
};
