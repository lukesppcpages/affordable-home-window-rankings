import { html, raw } from '../lib/html.mjs';
import { offerBrand } from './OfferCallout.mjs';

// Offer popup for the page's offer brand (category.exitPopup). Closed native
// <dialog>; client.js opens it once per session at 75% scroll depth.
// Everything except the close button is one link to the brand's offer page
// (same tracking attributes as CtaButton). Without JS it never shows.
export function ExitPopup({ category, site, base }) {
  const popup = category.exitPopup;
  const brand = offerBrand(category);
  if (!popup || !brand?.cta?.url) return '';
  const lines = brand.offerCallout.popupLines || [brand.offer];
  const { logo } = brand;
  const target = site.outbound.openInNewTab ? ' target="_blank"' : '';
  return html`
<dialog class="xp" id="exit-popup" aria-labelledby="exit-popup-title" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="exit_popup">
  <button type="button" class="xp__close" data-popup-close aria-label="Close">&times;</button>
  <a class="xp__link" href="${brand.cta.url}"${raw(target)} rel="sponsored noopener" data-outbound data-brand="${brand.id}" data-rank="${brand.rank}" data-position="exit_popup">
    <span class="xp__visual"><img src="${base}${popup.image.src}" alt="" width="${popup.image.width}" height="${popup.image.height}" decoding="async"></span>
    <span class="xp__content">
      <img class="xp__logo" src="${base}${logo.src}" alt="${brand.name}" width="${logo.width}" height="${logo.height}" decoding="async">
      <span class="xp__title" id="exit-popup-title">${lines.map((l, i) => html`${i ? html`<br>` : ''}${l}`)}</span>
      <span class="btn btn--cta xp__cta">${popup.ctaLabel || 'View Offer →'}</span>
    </span>
  </a>
</dialog>`;
}
