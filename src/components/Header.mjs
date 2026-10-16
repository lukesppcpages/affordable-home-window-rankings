import { html } from '../lib/html.mjs';

export function Header({ site, base }) {
  return html`
<header class="site-header">
  <div class="container site-header__inner">
    <a class="site-header__logo" href="${base}./" aria-label="${site.brandName} home">
      <img src="${base}${site.logo.src}" alt="${site.brandName}" width="${site.logo.width}" height="${site.logo.height}">
    </a>
    <nav class="site-header__nav" aria-label="Page sections">
      <a href="#methodology">How We Rank</a>
      <a href="#faq">FAQs</a>
    </nav>
  </div>
</header>`;
}
