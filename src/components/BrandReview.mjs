import { html } from '../lib/html.mjs';
import { CtaButton } from './CtaButton.mjs';

// Expandable review panel rendered inside each ranking card.
// Hidden until "Read Review" is pressed (shown by default without JS).
export function BrandReview({ brand, site, base, draft }) {
  const { review } = brand;
  const photo = brand.image
    ? html`<img class="review__photo" src="${base}${brand.image.srcSmall}" srcset="${base}${brand.image.srcSmall} 640w, ${base}${brand.image.src} 1200w" sizes="(min-width: 768px) 320px, 100vw" alt="${brand.image.alt}" width="${brand.image.width}" height="${brand.image.height}" loading="lazy" decoding="async">`
    : '';
  const pending = draft && brand.pending?.length
    ? html`<div class="draft-flag"><strong>Pending verification (draft only):</strong><ul>${brand.pending.map((p) => html`<li>${p}</li>`)}</ul></div>`
    : '';

  return html`
<div class="review" id="review-${brand.id}" role="region" aria-label="${brand.name} review" hidden>
  <div class="review__grid">
    <div class="review__main">
      ${photo}
      <h4 class="review__heading">Overview</h4>
      <p>${review.overview}</p>
      <h4 class="review__heading">Best suited for</h4>
      <p>${review.bestFor}</p>
    </div>
    <div class="review__lists">
      <h4 class="review__heading">Key strengths</h4>
      <ul class="review__list review__list--pro">${review.strengths.map((s) => html`<li>${s}</li>`)}</ul>
      <h4 class="review__heading">Things to consider</h4>
      <ul class="review__list review__list--con">${review.considerations.map((s) => html`<li>${s}</li>`)}</ul>
    </div>
  </div>
  ${pending}
  <div class="review__footer">
    ${CtaButton({ brand, position: 'review_panel', site, label: `${site.experiments.ctaLabel} from ${shortName(brand)}` })}
  </div>
</div>`;
}

const shortName = (brand) => brand.shortName || brand.name;
