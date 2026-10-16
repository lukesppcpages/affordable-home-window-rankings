import { html } from '../lib/html.mjs';

export function HeroSection({ category }) {
  const { hero, updated } = category;
  return html`
<section class="hero" aria-labelledby="page-title">
  <div class="container">
    <h1 id="page-title" class="hero__title">${hero.headline}</h1>
    <p class="hero__intro">${hero.intro}</p>
    <p class="hero__meta">
      <span>Updated <time datetime="${updated.iso}">${updated.label}</time></span>
      <span class="hero__meta-sep" aria-hidden="true"></span>
      <a href="#methodology">How We Rank</a>
      <span class="hero__meta-sep" aria-hidden="true"></span>
      <a href="#disclosure">Advertising Disclosure</a>
    </p>
  </div>
</section>`;
}
