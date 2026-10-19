import { html } from '../lib/html.mjs';
import { RankingCard } from './RankingCard.mjs';
import { FeaturedRankingCard } from './FeaturedRankingCard.mjs';

export function RankingsList(ctx) {
  const brands = [...ctx.category.brands].sort((a, b) => a.rank - b.rank);
  return html`
<section class="rankings" id="rankings" aria-labelledby="rankings-title">
  <div class="container">
    <h2 id="rankings-title" class="visually-hidden">${ctx.category.hero.headline} — Rankings</h2>
    <ol class="rankings__list" data-density="${ctx.site.experiments.cardDensity}">
      ${brands.map((brand) => (brand.featured ? FeaturedRankingCard : RankingCard)({ ...ctx, brand }))}
    </ol>
    ${TopPickRepeat(ctx, brands)}
    <p class="rankings__note">Scores are <a href="#methodology">Affordable Home editorial ratings</a>, not customer review averages. We may be compensated when you click partner links. <a href="#disclosure">Advertising Disclosure</a></p>
  </div>
</section>`;
}

// Repeats the featured brand's card after the full list, so visitors who
// scrolled through every option land on the top pick again.
function TopPickRepeat(ctx, brands) {
  const top = brands.find((b) => b.featured);
  const heading = ctx.category.topPickRepeat;
  if (!top || !heading) return '';
  return html`
    <div class="top-repeat" aria-labelledby="top-repeat-title">
      <h2 id="top-repeat-title" class="top-repeat__title">${heading}</h2>
      ${FeaturedRankingCard({ ...ctx, brand: top, placement: 'repeat' })}
    </div>`;
}
