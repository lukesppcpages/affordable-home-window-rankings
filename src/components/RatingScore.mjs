import { html } from '../lib/html.mjs';

// Qualitative word shown with the number. Editorial wording, tied to score only.
export function scoreWord(score) {
  if (score >= 9.8) return 'Exceptional';
  if (score >= 9.5) return 'Excellent';
  return 'Very Good';
}

export function RatingScore({ score, label, featured = false }) {
  const value = score.toFixed(1);
  return html`
<div class="score${featured ? ' score--featured' : ''}">
  <span class="score__word">${scoreWord(score)}</span>
  <span class="score__value">${value}</span>
  <span class="score__label">${label}</span>
</div>`;
}
