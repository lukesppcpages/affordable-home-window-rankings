import { html } from '../lib/html.mjs';

// Qualitative word shown with the number. Editorial wording, tied to score only.
export function scoreWord(score) {
  if (score >= 9.8) return 'Exceptional';
  if (score >= 9.5) return 'Excellent';
  return 'Very Good';
}

// The score label is read to screen readers but not shown on the card.
export function RatingScore({ score, label }) {
  const value = score.toFixed(1);
  return html`
<div class="score">
  <span class="score__word">${scoreWord(score)}</span>
  <span class="score__value">${value}<span class="visually-hidden"> ${label}</span></span>
</div>`;
}
