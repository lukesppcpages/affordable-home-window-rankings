import { html } from '../lib/html.mjs';
import { CtaButton } from './CtaButton.mjs';
import { offerBrand } from './OfferCallout.mjs';

// Offer popup for the page's offer brand (category.exitPopup). Closed native
// <dialog>; client.js opens it once per session: exit intent on mouse/trackpad
// devices, 75% scroll depth on touch devices. Without JS it never shows.
export function ExitPopup({ category, site, base }) {
  const popup = category.exitPopup;
  const brand = offerBrand(category);
  if (!popup || !brand) return '';
  const lines = brand.offerCallout.popupLines || [brand.offer];
  const { logo } = brand;
  return html`
<dialog class="xp" id="exit-popup" aria-labelledby="exit-popup-title" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="exit_popup">
  <button type="button" class="xp__close" data-popup-close aria-label="Close">&times;</button>
  <div class="xp__visual"><img src="${base}${popup.image.src}" alt="${popup.image.alt}" width="${popup.image.width}" height="${popup.image.height}" loading="lazy" decoding="async"></div>
  <div class="xp__content">
    <img class="xp__logo" src="${base}${logo.src}" alt="${brand.name}" width="${logo.width}" height="${logo.height}" loading="lazy" decoding="async">
    <h2 class="xp__title" id="exit-popup-title">${lines.map((l, i) => html`${i ? html`<br>` : ''}${l}`)}</h2>
    ${CtaButton({ brand, site, position: 'exit_popup', label: popup.ctaLabel || 'View Offer →', className: 'xp__cta' })}
  </div>
</dialog>`;
}
