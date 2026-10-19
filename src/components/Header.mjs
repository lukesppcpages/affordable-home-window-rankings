import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';

const MENU_LINKS = [
  ['#methodology', 'How We Rank'],
  ['#faq', 'FAQs'],
  ['#disclosure', 'Advertising Disclosure'],
];

// Logo left, hamburger menu right. Built on <details> so the menu opens
// without JavaScript; client.js adds close-on-click, outside click and Escape.
export function Header({ site, base }) {
  return html`
<header class="site-header">
  <div class="container site-header__inner">
    <a class="site-header__logo" href="${base}./" aria-label="${site.brandName} home">
      <img src="${base}${site.logo.src}" alt="${site.brandName}" width="${site.logo.width}" height="${site.logo.height}">
    </a>
    <details class="site-menu" data-site-menu>
      <summary class="site-menu__toggle" aria-label="Menu">
        ${icon('menu', { size: 24, className: 'site-menu__open' })}${icon('x', { size: 24, className: 'site-menu__close' })}
      </summary>
      <nav class="site-menu__panel" aria-label="Page sections">
        <ul>${MENU_LINKS.map(([href, label]) => html`<li><a href="${href}">${label}</a></li>`)}</ul>
      </nav>
    </details>
  </div>
</header>`;
}
