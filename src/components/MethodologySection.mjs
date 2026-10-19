import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';

export function MethodologySection({ category, draft }) {
  const m = category.methodology;
  return html`
<section class="section methodology" id="methodology" aria-labelledby="methodology-title">
  <div class="container">
    <div class="section__head">
      <h2 id="methodology-title" class="section__title">${m.heading}</h2>
      <p class="section__intro">${m.intro}</p>
    </div>
    <ul class="methodology__grid">
      ${m.criteria.map((c) => html`
      <li class="methodology__item">
        ${c.icon ? html`<span class="methodology__icon">${icon(c.icon, { size: 20 })}</span>` : ''}
        <h3 class="methodology__title">${c.title}</h3>
        <p>${c.body}</p>
      </li>`)}
    </ul>
    <p class="methodology__note">${icon('info', { size: 20 })}<span>${m.note}</span></p>
    ${draft ? html`<div class="draft-flag"><strong>Draft only:</strong> ${m.draftNote}</div>` : ''}
  </div>
</section>`;
}
