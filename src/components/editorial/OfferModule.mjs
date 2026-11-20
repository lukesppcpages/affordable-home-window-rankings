import { html } from '../../lib/html.mjs';
import { BrandLogo } from '../BrandLogo.mjs';
import { CtaButton } from '../CtaButton.mjs';

// Offer card: logo | kicker + offer + terms | CTA. Styled by editorial.css
// (needs a .ed ancestor).
export function OfferModule({ brand, site, base, position, lead, kicker }) {
  return html`
<div class="ed-offer" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="${position}">
  <div class="ed-offer__logo">${BrandLogo({ brand, base })}</div>
  <div class="ed-offer__copy">
    <p class="ed-offer__kicker">${kicker}</p>
    <p class="ed-offer__text">${brand.offer}</p>
    <p class="ed-offer__terms">${brand.offerTerms || ''}${lead ? html` ${lead}` : ''}</p>
  </div>
  <div class="ed-offer__cta">${CtaButton({ brand, position, site })}</div>
</div>`;
}
