# Affordable Home — Window Replacement Rankings

Comparison landing page: **Best Window Replacement Companies of 2026**.
Static build with no runtime dependencies — `dist/` is plain HTML/CSS/JS that can be hosted anywhere (GitHub Pages, Netlify, a WordPress template).

```
npm run build         # production → dist/   (fails if any CTA URL is missing)
npm run build:draft   # draft → dist-draft/  (noindex; shows pending-verification notes)
npm run serve         # http://localhost:4321
```

## Structure

| Path | What it holds |
| --- | --- |
| `src/config/site.mjs` | Site-wide settings: site URL, footer links, GTM ID, attribution params, experiment values |
| `src/data/categories/window-replacement.mjs` | **All page content**: rankings, scores, bullets, reviews, CTA URLs, FAQs, methodology |
| `src/data/categories/index.mjs` | Category registry — add roofing, gutters, etc. here |
| `src/components/` | `Header`, `HeroSection`, `RankingsList`, `RankingCard`, `FeaturedRankingCard`, `RatingScore`, `BrandLogo`, `BrandReview`, `CtaButton`, `EducationSection`, `MethodologySection`, `FAQSection`, `Footer`, `Page` |
| `src/styles.css` | Design tokens + mobile-first styles (inlined into the page at build) |
| `src/client/client.js` | Review toggles, FAQ accordion, attribution passthrough, tracking hooks |
| `public/images/` | Logos and photos (optimized WebP / SVG) |

### Adding a category
Copy `window-replacement.mjs`, change `slug`, copy and brands, register it in `index.mjs`, run the build. It is written to `dist/<slug>/index.html`.

## Tracking

Every event is pushed to `window.dataLayer` (GTM picks these up once `site.analytics.gtmId` is set) and to any adapter registered with `AH.addAdapter(fn)` — the hook for the affiliate platform.

| Event | Fires | Fields |
| --- | --- | --- |
| `ah_ranking_impression` | once per card, when 50% visible | `brand`, `brand_rank`, `placement` |
| `ah_cta_click` | each partner click (double-clicks ignored) | `brand`, `brand_rank`, `placement`, `cta_position` (`featured_card` / `ranking_card` / `review_panel` / `repeat_card` / `deep_review_verdict`) |
| `ah_review_expand` | first open per card | `brand`, `brand_rank`, `placement` |
| `ah_review_jump` | "Read Full Review" click to the in-page Power review | `brand`, `brand_rank`, `placement` |
| `ah_deep_review_view` | once, when the in-page review scrolls into view | `brand`, `brand_rank` |
| `ah_faq_open` | first open per question | `faq_index` |
| `ah_scroll_depth` | once each at 25/50/75/90% | `percent` |

`placement` is `list` for the main rankings or `repeat` for the #1 card repeated after them. All events also carry `page_category`, `page_variant`, `device_type`, `event_timestamp`. No personal data is collected. Incoming `utm_*`, `gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid` are copied onto partner links; nothing else from the URL is passed on.

**Status:** hooks are built and were checked in the browser (events reach `dataLayer`, dedupe works, params pass through). No analytics platform is connected yet.

## Experiments
`site.experiments` controls CTA label, review label, featured-card layout (`photo` / `compact`), card density, and the `variantId` attached to every event. Headline, bullets and card copy live in the category data file.

## Before launch — open items

**Configuration**
- [ ] `site.siteUrl` — needed for canonical URL, `og:url`, `og:image`
- [ ] Footer links: About, Contact, Privacy Policy, Terms of Use (hidden until set; a privacy policy is required for Google Ads)
- [ ] `site.analytics.gtmId`, then connect and test the affiliate tracking adapter
- [ ] Confirm all six CTA URLs (currently placeholders from the brief, `verified: false`) and add partner tracking parameters

**Content to verify** (listed per brand under `pending` in the data file; visible in the draft build)
- **Power in-page review** (`deepReview` in the data file) uses claims carried over from the ServiceReview partner section — confirm with Power before scaling spend: limited lifetime warranty (wording + coverage), installers are Power employees not subcontractors, energy-efficient glass packages, Project Pulse app features
- Warranty terms and financing for the other brands — deliberately not stated
- Power Home: product lines/styles offered, current service area
- Champion, DaBella: service area; DaBella window brands offered
- Windows USA: states served, whether windows are made in-house, product lines
- Also confirm the facts currently stated: Power founded 1992; Champion making windows since 1953; Andersen dating to 1903 and Fibrex composite; Lowe's using independent installers

**Methodology**
- [ ] Scores were supplied for this page. Finalize and document the scoring method so each score can be substantiated.

## Design notes
- Brand orange `#FE6C34` with white text is 2.8:1 contrast, below WCAG AA. CTA buttons use `#EC5A22` (a slightly deeper step) with 18px/16px bold text so they pass AA for large text; `#FE6C34` remains the accent colour.
- The featured photo is served only at ≥1024px (`<picture>` source), so phones never download it.
- No Review/AggregateRating structured data — scores are editorial. Only `ItemList` and `FAQPage` are emitted.
- Affordable Home logo is the existing `logo.svg` from the window-replacement project; the favicon is a crop of its house mark.
