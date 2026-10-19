import { html } from '../lib/html.mjs';
import { RankingCard } from './RankingCard.mjs';

// #1 pick: same layout as every other card, plus a navy frame, the
// "Our #1 Top Pick" banner, an inverted score block and a full-width
// "Read Full Review" bar along the bottom.
export function FeaturedRankingCard(props) {
  const flag = html`
  <div class="rc__flag">${props.site.experiments.featuredFlagLabel}</div>`;
  return RankingCard({ ...props, featured: true, flag });
}
