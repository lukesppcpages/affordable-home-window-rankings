import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { BrandLogo } from './BrandLogo.mjs';
import { RatingScore } from './RatingScore.mjs';
import { CtaButton } from './CtaButton.mjs';
import { BrandReview } from './BrandReview.mjs';

// Shared card for every ranked brand. FeaturedRankingCard wraps this with the
// "Our Top Pick" treatment so both stay structurally identical.
//
// Zones: brand (rank + logo) | body (name + bullets) | side (score + actions)
// On mobile the side zone splits: score sits beside the logo, actions go full width.
export function RankingCard(props) {
  const { brand, category, site, base, draft, featured = false, media = '', flag = '' } = props;
  const exp = site.experiments;
  const eager = brand.rank <= 2;

  return html`
<li class="rc-item">
<article class="rc${featured ? ' rc--featured' : ''}${media ? ' rc--has-media' : ''}" id="${brand.id}" data-brand="${brand.id}" data-rank="${brand.rank}" aria-labelledby="${brand.id}-name">
  ${flag}
  <div class="rc__main">
    ${media}
    <div class="rc__brand">
      <span class="rc__rank" aria-label="Rank ${brand.rank}">${brand.rank}</span>
      ${BrandLogo({ brand, base, eager })}
    </div>
    <div class="rc__body">
      <p class="rc__distinction">${brand.distinction}</p>
      <h3 class="rc__name" id="${brand.id}-name">${brand.name}</h3>
      <ul class="rc__bullets">
        ${brand.bullets.map((b) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${b}</span></li>`)}
      </ul>
      ${brand.summary ? html`<p class="rc__summary">${brand.summary}</p>` : ''}
    </div>
    <div class="rc__score">
      ${RatingScore({ score: brand.score, label: category.scoreLabel, featured })}
    </div>
    <div class="rc__actions">
      ${CtaButton({ brand, position: featured ? 'featured_card' : 'ranking_card', site })}
      <button type="button" class="rc__toggle" aria-expanded="false" aria-controls="review-${brand.id}" data-review-toggle>
        <span>${exp.reviewLabel}</span>${icon('chevron-down', { size: 18, className: 'rc__toggle-icon' })}
      </button>
    </div>
  </div>
  ${BrandReview({ brand, site, base, draft })}
</article>
</li>`;
}
