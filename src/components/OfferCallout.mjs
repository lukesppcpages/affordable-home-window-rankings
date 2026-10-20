import { html } from '../lib/html.mjs';
import { BrandLogo } from './BrandLogo.mjs';
import { CtaButton } from './CtaButton.mjs';

// Closing offer banner for the brand with `offerCallout` data (shown above the footer).
export function OfferCallout({ category, site, base }) {
  const brand = category.brands.find((b) => b.offerCallout && b.offer);
  if (!brand) return '';
  return html`
<section class="offer" aria-label="${brand.name} offer" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="offer_callout">
  <div class="container">
    <div class="offer__card">
      <div class="offer__logo">${BrandLogo({ brand, base })}</div>
      <div class="offer__copy">
        <p class="offer__kicker">${brand.offerCallout.kicker}</p>
        <p class="offer__text">${brand.offer}</p>
      </div>
      ${CtaButton({ brand, position: 'offer_callout', site })}
    </div>
  </div>
</section>`;
}
