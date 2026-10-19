// Site-wide settings shared by every category page.
// Values set to null are not configured yet — the build warns about each one
// (and `npm run build:draft` shows them on the page) so nothing broken ships.

export const site = {
  brandName: 'Affordable Home',
  description:
    'Affordable Home helps homeowners compare trusted home service providers, evaluate their options and connect with companies that fit their needs.',

  // Absolute production origin, no trailing slash (e.g. "https://www.example.com").
  // Required for canonical URLs and Open Graph images.
  siteUrl: null,

  logo: {
    src: 'images/affordable-home-logo.svg',
    srcOnDark: 'images/affordable-home-logo-white.svg',
    width: 1283,
    height: 175,
  },

  // Footer links. null = not configured: omitted from the production build.
  links: {
    about: null,
    contact: null,
    privacy: null,
    terms: null,
  },

  analytics: {
    // Google Tag Manager container ID (e.g. "GTM-XXXXXXX"). null = not loaded.
    gtmId: null,
    // Logs every tracking event to the console. Turn off for production.
    debug: false,
    // Scroll-depth milestones (percent of page) reported once per page view.
    scrollDepthMarks: [25, 50, 75, 90],
    // Share of a ranking card that must be visible to count an impression.
    impressionThreshold: 0.5,
  },

  outbound: {
    // Incoming URL params copied onto partner CTA links (campaign attribution).
    passthroughParams: [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid',
    ],
    openInNewTab: true,
  },

  // CRO test surface. Each key is read by a component; swap values (or add
  // variants per category) without touching markup. The active variant id is
  // attached to every analytics event.
  experiments: {
    variantId: 'control',
    ctaLabel: 'Get a Free Quote',
    reviewLabel: 'Read Review',
    featuredReviewLabel: 'Read Full Review',
    featuredFlagLabel: 'Our #1 Top Pick',
    cardDensity: 'comfortable', // 'comfortable' | 'compact'
  },
};
