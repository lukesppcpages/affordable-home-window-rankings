import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { RankingCard } from './RankingCard.mjs';

// #1 pick: navy frame, "Our Top Pick" flag, inverted score block and (desktop
// only) a photo column. The photo uses a <picture> source gated to >=1024px,
// so phones never download it.
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export function FeaturedRankingCard(props) {
  const { brand, site, base } = props;
  const flag = html`
  <div class="rc__flag">
    ${icon('award', { size: 18 })}<span>Our Top Pick</span>
  </div>`;

  const img = brand.image;
  const media = site.experiments.featuredLayout === 'photo' && img
    ? html`
    <div class="rc__media">
      <picture>
        <source media="(min-width: 1024px)" srcset="${base}${img.srcSmall} 640w, ${base}${img.src} 1200w" sizes="280px">
        <img src="${BLANK}" alt="${img.alt}" width="${img.width}" height="${img.height}" fetchpriority="high" decoding="async">
      </picture>
    </div>`
    : '';

  return RankingCard({ ...props, featured: true, flag, media });
}
