import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';

// Native <details> accordion. The shared name attribute keeps one item open at
// a time in modern browsers; client.js enforces the same in older ones.
export function FAQSection({ category }) {
  return html`
<section class="section faq" id="faq" aria-labelledby="faq-title">
  <div class="container">
    <h2 id="faq-title" class="section__title">${category.faqHeading || 'Frequently Asked Questions'}</h2>
    <div class="faq__list">
      ${category.faqs.map((f, i) => html`
      <details class="faq__item" name="faq" data-faq-index="${i + 1}">
        <summary class="faq__q"><span>${f.q}</span>${icon('plus', { size: 20, className: 'faq__icon' })}</summary>
        <div class="faq__a"><p>${f.a}</p></div>
      </details>`)}
    </div>
  </div>
</section>`;
}
