import { html } from '../../lib/html.mjs';

// Methodology with criteria list and score scale. Styled by editorial.css
// (needs a .ed ancestor).
export function Methodology({ category, draft }) {
  const m = category.methodology;
  return html`
<section class="ed-methodology" id="methodology" aria-labelledby="methodology-title" tabindex="-1">
  <div class="container">
    <header class="ed-section-head">
      <p class="ed-kicker">Methodology</p>
      <h2 class="ed-h2" id="methodology-title">${m.heading}</h2>
      <p class="ed-lede">${m.intro} Each company is reviewed against its own published product, installation and warranty information.</p>
    </header>
    <ol class="ed-criteria">
      ${m.criteria.map((c) => html`<li><h3>${c.title}</h3><p>${c.body}</p></li>`)}
    </ol>
    <div class="ed-scale">
      <h3>How to read our scores</h3>
      <p>Scores are on a 10-point scale: <strong>9.8–10</strong> Exceptional, <strong>9.5–9.7</strong> Excellent, <strong>below 9.5</strong> Very Good. ${m.note}</p>
    </div>
    ${draft && m.draftNote ? html`<p class="draft-flag">${m.draftNote}</p>` : ''}
  </div>
</section>`;
}
