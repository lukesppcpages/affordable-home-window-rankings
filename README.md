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
| `ah_cta_click` | each partner click (double-clicks ignored) | `brand`, `brand_rank`, `placement`, `cta_position` (`featured_card` / `ranking_card` / `review_panel` / `repeat_card` / `review_offer_callout` / `offer_callout`) |
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
- [ ] Confirm all five CTA URLs (currently placeholders from the brief, `verified: false`) and add partner tracking parameters

**Content to verify** (listed per brand under `pending` in the data file; visible in the draft build)
- **Installer wording:** Power partners with independent installation contractors (powerhrg.com/careers/partner-with-power). Describe them as professionally trained installers — never as in-house only or "no subcontractors".
- **Power in-page review** (`deepReview` in the data file) uses claims carried over from the ServiceReview partner section — confirm with Power before scaling spend: limited lifetime warranty (wording + coverage), energy-efficient glass packages, Project Pulse app features
- Warranty terms and financing for the other brands — deliberately not stated
- Power Home: product lines/styles offered, current service area
- Champion, DaBella: service area; DaBella window brands offered
- Also confirm the facts currently stated: Power founded 1992; Champion making windows since 1953; Andersen dating to 1903 and Fibrex composite; Lowe's using independent installers

**Methodology**
- [ ] Scores were supplied for this page. Finalize and document the scoring method so each score can be substantiated.

## Design notes
- Brand orange `#FE6C34` with white text is 2.8:1 contrast, below WCAG AA. CTA buttons use `#EC5A22` (a slightly deeper step) with 18px/16px bold text so they pass AA for large text; `#FE6C34` remains the accent colour.
- The featured photo is served only at ≥1024px (`<picture>` source), so phones never download it.
- No Review/AggregateRating structured data — scores are editorial. Only `ItemList` and `FAQPage` are emitted.
- Affordable Home logo is the existing `logo.svg` from the window-replacement project; the favicon is a crop of its house mark.

---

## Home Remodeling page (`/home-remodeling/`)

Second category built from the same components: `src/data/categories/home-remodeling.mjs`. Page-specific settings (CTA label "Get Free Quote", disclosure copy) are in its `siteOverrides`; service labels come from `src/data/services.mjs`. The window page's markup is unchanged by this addition.

### Sources (checked October 2026)
- powerhrg.com/services (+ FAQ) — services; partners ProVia (doors), GAF & CertainTeed (roofing), Pella & ProVia (windows); 28 territories / 25 states
- powerhrg.com/services/windows · /roofing · /siding · /doors — product specifications quoted in the review
- powerhrg.com/support/warranties — limited lifetime labor warranty; manufacturer warranties; 30-day transfer
- powerhrg.com/support/our-process — consultation, estimate valid up to one year, Project Pulse
- powerhrg.com/careers/partner-with-power — Power "partnered with independent installers" since 1992
- dabella.us, /siding, /windows, /warranty — GAF Master Elite, James Hardie Elite Preferred, Alside, TandoStone, Fairfield & Glasswing; warranties (2-yr roofing / 1-yr siding & windows workmanship + manufacturer)
- Lowe's installation pages (lowes.com blocks automated fetches; confirmed via search summaries) — independent licensed, insured, background-checked installers; 1-year labor warranty for most categories

### Open items
- [ ] Power CTA: confirm `powerhrgdeals.com` is approved for a multi-service page
- [ ] DaBella CTA: placeholder `dabella.us` — `dabelladeals.us` redirects to a windows-only page
- [ ] Lowe's CTA: confirm `lowes.com/l/install/exterior` or supply an affiliate link
- [ ] No promotional offer shown — add only if Power approves one for this page
- [ ] Document the editorial rationale for the 10.0 / 9.7 / 9.5 scores
- [ ] Re-verify Lowe's details directly on lowes.com before launch

---

## Power Home Remodeling review (`/power-home-remodeling-review/`)

Branded-search company review for Google Ads traffic ("Power Home Remodeling reviews / cost / complaints"). Qualitative only — no score or star rating. Separate page type from the rankings: own components (`src/components/review/`), stylesheet (`src/review.css`, navy `#142544` / lime `#B1F726`) and client (`src/client/review.js`); shares site config, the `html` renderer, icons and images.

| Path | What it holds |
| --- | --- |
| `src/data/reviews/power-home-remodeling.mjs` | **All copy + config**: the four services (labels, CTAs, panel + card copy, form headings), review sections, intents, form settings |
| `src/data/reviews/power-home-remodeling.sources.md` | Research notes: every factual claim → source; flagged inferences |
| `src/components/review/` | `SiteHeader`, `AdvertisingDisclosure`, `ReviewHero`, `ReviewSummary`, `ServiceSelector` + `DynamicServicePanel`, `InDepthReview`, `ServiceOverview`, `IdealCustomerSection`, `EstimateForm`, `MobileStickyCTA`, `SiteFooter` |

**Service selection** is one state shared by the picker, service cards, every CTA label, the form's project field/heading/button and the sticky CTA; it persists for the session (`sessionStorage`). No redirects.

**Search-intent variants:** add `?intent=` to the ad's final URL. `reviews` and `cost` swap the H1/intro (before first paint); `windows`/`roofing`/`siding`/`doors` preselect that service. Unknown values show the default.

**Form:** service, first/last name, email, phone, ZIP (street address behind `form.requireAddress`). Inline validation, phone formatting, duplicate-submit guard, loading/error states; inputs are never cleared. `form.endpoint = null` runs the **development-only handler** — nothing is sent and the visitor sees a "not connected" notice. When set, the lead is POSTed as JSON (with attribution) and only a 2xx shows the success state.

**Attribution** (session-stored, sent with the lead only): `gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid`, `utm_*`, `campaignid`, `adgroupid`, `keyword`, `matchtype`, `device`, `intent`, landing page, referrer. A new click ID replaces the stored set.

### Events (`window.dataLayer`)
| Event | When | Notes |
| --- | --- | --- |
| `ah_page_view` | load | |
| `ah_service_select` | visitor picks a service | `service`, `select_source` (`selector` / `service_card` / `form`) |
| `ah_cta_click` | any estimate CTA | `cta_position` (`header`, `summary`, `service_panel`, `after_pricing`, `service_card`, `sticky`, `hero_services`) |
| `ah_form_view` | form 35% visible (once) | |
| `ah_form_start` | first input (once) | |
| `ah_form_validation_error` | submit blocked | `invalid_fields` (names only) |
| `ah_form_submit` | valid submit | |
| `ah_lead_success` | endpoint returned 2xx | **Primary Google Ads conversion** |
| `ah_lead_error` | endpoint failed | `error_type` (`http_###` / `network` / `timeout`) |
| `ah_lead_not_sent` | dev handler (no endpoint) | never counts as a conversion |

Every event carries `page_type`, `page_slug`, `company`, `content_intent`, `selected_service`, `device_type`. No form values are ever pushed or logged. Service selections and CTA clicks are diagnostic — don't import them as conversions.

### Before launch
- [ ] `form.endpoint` — approved lead destination (and confirm whether Power needs street address)
- [ ] `form.consent` — consent / contact-permission language from legal review (`checkbox: true` for a required checkbox)
- [ ] `site.analytics.gtmId`; in GTM map `ah_lead_success` to the Google Ads conversion + GA4 key event
- [ ] Confirm permission to use Power's logo and photos
- [ ] Footer links (privacy policy required for Google Ads)
- [ ] Re-check items in the data file's `pending` list and the flagged inferences in the sources file
