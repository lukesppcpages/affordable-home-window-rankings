// Review page chrome: SiteHeader, AdvertisingDisclosure, MobileStickyCTA, SiteFooter.
import { html } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';

// Primary CTA. The label swaps to the selected service's CTA (client/review.js);
// `data-cta` is the placement reported with ah_cta_click.
export function CtaButton({ position, label = 'Get a Free Estimate', className = '' }) {
  return html`<a class="rv-btn rv-btn--primary ${className}" href="#estimate" data-cta="${position}">
    <span data-cta-label>${label}</span>${icon('arrow-right', { size: 18 })}
  </a>`;
}

export function SiteHeader({ site, base }) {
  return html`
<header class="rv-header">
  <div class="rv-container rv-header__inner">
    <a class="rv-header__brand" href="${base}./" aria-label="${site.brandName} home">
      <img src="${base}${site.logo.src}" alt="${site.brandName}" width="${site.logo.width}" height="${site.logo.height}">
      <span class="rv-header__tag">Home Improvement Reviews</span>
    </a>
    <a class="rv-header__link" href="#estimate" data-cta="header">Free Estimate</a>
  </div>
</header>`;
}

export function AdvertisingDisclosure({ review }) {
  return html`
<p class="rv-disclosure" id="disclosure" tabindex="-1">
  ${icon('info', { size: 16 })}
  <span><strong>Advertising disclosure:</strong> ${review.disclosure} ${review.notAffiliated}</span>
</p>`;
}

export function MobileStickyCTA() {
  return html`
<div class="rv-sticky" data-sticky aria-hidden="true">
  <a class="rv-btn rv-btn--primary rv-btn--block" href="#estimate" data-cta="sticky" tabindex="-1">
    <span data-cta-label>Get a Free Estimate</span>${icon('arrow-right', { size: 18 })}
  </a>
</div>`;
}

export function SiteFooter({ site, base, review, draft }) {
  const links = [
    ['about', 'About'], ['contact', 'Contact'], ['privacy', 'Privacy Policy'], ['terms', 'Terms of Use'],
  ].map(([key, label]) => {
    const href = site.links[key];
    if (href) return html`<li><a href="${href}">${label}</a></li>`;
    return draft ? html`<li><span class="is-unconfigured-link" title="URL not configured">${label}</span></li>` : '';
  }).filter(Boolean);
  return html`
<footer class="rv-footer">
  <div class="rv-container">
    <div class="rv-footer__top">
      <img src="${base}${site.logo.srcOnDark}" alt="${site.brandName}" width="${site.logo.width}" height="${site.logo.height}" loading="lazy">
      ${links.length ? html`<nav aria-label="Footer"><ul class="rv-footer__links">${links}</ul></nav>` : ''}
    </div>
    <div class="rv-footer__text">
      <p id="methodology"><strong>How we reviewed Power:</strong> ${review.methodology}</p>
      <p><strong>Advertising disclosure:</strong> ${site.disclosure}</p>
      <p>${review.notAffiliated}</p>
    </div>
    <p class="rv-footer__copy">&copy; ${new Date().getFullYear()} ${site.brandName}. All rights reserved.</p>
  </div>
</footer>`;
}
