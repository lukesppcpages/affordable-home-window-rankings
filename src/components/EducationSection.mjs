import { html } from '../lib/html.mjs';

export function EducationSection({ category }) {
  const { education } = category;
  return html`
<section class="section education" aria-labelledby="education-title">
  <div class="container">
    <div class="section__head">
      <h2 id="education-title" class="section__title">${education.heading}</h2>
      <p class="section__intro">${education.intro}</p>
    </div>
    <div class="education__grid">
      ${education.items.map((item, i) => html`
      <div class="education__item">
        <span class="education__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="education__title">${item.title}</h3>
        <p>${item.body}</p>
      </div>`)}
    </div>
  </div>
</section>`;
}
