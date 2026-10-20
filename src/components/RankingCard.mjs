import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { BrandLogo } from './BrandLogo.mjs';
import { RatingScore } from './RatingScore.mjs';
import { CtaButton } from './CtaButton.mjs';
import { BrandReview } from './BrandReview.mjs';

// Shared card for every ranked brand. FeaturedRankingCard wraps this with the
// "Our Top Pick" treatment so both stay structurally identical.
//
// `placement` lets the same brand render twice (e.g. the repeated #1 pick after
// the list) with unique ids and its own tracking position.
//
// Zones: brand (rank + logo) | body (name + bullets) | side (score + actions)
// On mobile the side zone splits: score sits beside the logo, actions go full width.
export function RankingCard(props) {
  const { brand, category, site, base, draft, featured = false, flag = '', placement = 'list' } = props;
  const exp = site.experiments;
  const inList = placement === 'list';
  const uid = inList ? brand.id : `${brand.id}-${placement}`;
  const eager = inList && brand.rank <= 2;
  const position = inList ? (featured ? 'featured_card' : 'ranking_card') : `${placement}_card`;

  const card = html`
<article class="rc${featured ? ' rc--featured' : ''}" id="${uid}" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="${placement}" aria-labelledby="${uid}-name">
  ${flag}
  <div class="rc__main">
    <div class="rc__brand">
      <span class="rc__rank" aria-label="Rank ${brand.rank}">${brand.rank}</span>
      ${BrandLogo({ brand, base, eager })}
    </div>
    <div class="rc__body">
      <p class="rc__distinction">${brand.distinction}</p>
      <h3 class="rc__name" id="${uid}-name">${brand.name}</h3>
      <ul class="rc__bullets">
        ${brand.bullets.map((b) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${b}</span></li>`)}
      </ul>
      ${brand.offer ? html`<p class="rc__offer">${brand.offer}</p>` : ''}
      ${brand.summary ? html`<p class="rc__summary">${brand.summary}</p>` : ''}
    </div>
    <div class="rc__score">
      ${RatingScore({ score: brand.score, label: category.scoreLabel })}
    </div>
    <div class="rc__actions">
      ${CtaButton({ brand, position, site })}
      ${featured ? '' : reviewToggle(uid, exp.reviewLabel)}
    </div>
  </div>
  ${featured ? featuredReviewLink(brand, uid, exp.featuredReviewLabel) : ''}
  ${brand.deepReview ? '' : BrandReview({ brand, site, base, draft, uid, placement })}
</article>`;

  return inList ? html`<li class="rc-item">${card}</li>` : card;
}

// Brands with an in-page review link down to it; others open the dropdown panel.
function featuredReviewLink(brand, uid, label) {
  if (!brand.deepReview) return reviewToggle(uid, label, ' rc__toggle--bar');
  return html`<a class="rc__toggle rc__toggle--bar" href="#${brand.deepReview.anchor}" data-review-jump>
        <span>${label}</span>${icon('arrow-down', { size: 18, className: 'rc__toggle-icon' })}
      </a>`;
}

function reviewToggle(uid, label, modifier = '') {
  return html`<button type="button" class="rc__toggle${modifier}" aria-expanded="false" aria-controls="review-${uid}" data-review-toggle>
        <span>${label}</span>${icon('chevron-down', { size: 18, className: 'rc__toggle-icon' })}
      </button>`;
}
