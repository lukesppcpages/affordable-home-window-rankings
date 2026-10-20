import { html } from '../lib/html.mjs';
import { BrandLogo } from './BrandLogo.mjs';
import { CtaButton } from './CtaButton.mjs';

// Offer banner for the brand with `offerCallout` data. Rendered at the end of
// the in-depth review (OfferCard) and again above the footer (OfferCallout).
export const offerBrand = (category) => category.brands.find((b) => b.offerCallout && b.offer);

export function OfferCard({ brand, site, base, position }) {
  return html`
    <div class="offer__card">
      <div class="offer__logo">${BrandLogo({ brand, base })}</div>
      <div class="offer__copy">
        <p class="offer__kicker">${brand.offerCallout.kicker}</p>
        <p class="offer__text">${brand.offer}</p>
      </div>
      ${CtaButton({ brand, position, site })}
    </div>`;
}

export function OfferCallout({ category, site, base }) {
  const brand = offerBrand(category);
  if (!brand) return '';
  return html`
<section class="offer" aria-label="${brand.name} offer" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="offer_callout">
  <div class="container">
    ${OfferCard({ brand, site, base, position: 'offer_callout' })}
  </div>
</section>`;
}
