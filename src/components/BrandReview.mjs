import { html } from '../lib/html.mjs';
import { CtaButton } from './CtaButton.mjs';

// Expandable review panel rendered inside each ranking card.
// Hidden until "Read Review" is pressed (shown by default without JS).
export function BrandReview({ brand, site, draft, uid = brand.id, placement = 'list' }) {
  const { review } = brand;
  const pending = draft && brand.pending?.length
    ? html`<div class="draft-flag"><strong>Pending verification (draft only):</strong><ul>${brand.pending.map((p) => html`<li>${p}</li>`)}</ul></div>`
    : '';

  return html`
<div class="review" id="review-${uid}" role="region" aria-label="${brand.name} review" hidden>
  <div class="review__grid">
    <div class="review__main">
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
    ${CtaButton({ brand, position: placement === 'list' ? 'review_panel' : `${placement}_review_panel`, site, label: brand.cta?.label || `${site.experiments.ctaLabel} from ${shortName(brand)}` })}
  </div>
</div>`;
}

const shortName = (brand) => brand.shortName || brand.name;
