import { html } from '../lib/html.mjs';

// Phones get a blank placeholder (and never download the photo): the real
// image is only offered through a >=1024px <picture> source.
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export function HeroSection({ category, base }) {
  const { hero, updated } = category;
  const img = hero.image;
  return html`
<section class="hero${img ? ' hero--has-image' : ''}" aria-labelledby="page-title">
  <div class="container hero__inner">
    <div class="hero__copy">
      <h1 id="page-title" class="hero__title">${hero.headline}</h1>
      <p class="hero__intro">${hero.intro}</p>
      <p class="hero__meta">
        <span>Updated <time datetime="${updated.iso}">${updated.label}</time></span>
        <span class="hero__meta-sep hero__meta-desktop" aria-hidden="true"></span>
        <a class="hero__meta-desktop" href="#methodology">How We Rank</a>
      </p>
    </div>
    ${img ? html`
    <div class="hero__media">
      <picture>
        <source media="(min-width: 1024px)" srcset="${base}${img.srcSmall} 640w, ${base}${img.src} 1100w" sizes="440px">
        <img src="${BLANK}" alt="${img.alt}" width="${img.width}" height="${img.height}" fetchpriority="high" decoding="async">
      </picture>
    </div>` : ''}
  </div>
</section>`;
}
