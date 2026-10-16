import { html } from '../lib/html.mjs';

// Fixed-size frame; the logo is contained inside it so any aspect ratio
// (tall marks, wide wordmarks) sits at a consistent visual weight.
export function BrandLogo({ brand, base, eager = false }) {
  const { logo } = brand;
  const shape = logo.width / logo.height < 1.3 ? 'mark' : 'wordmark';
  return html`
<div class="logo-box logo-box--${shape}">
  <img src="${base}${logo.src}" alt="${brand.name} logo" width="${logo.width}" height="${logo.height}"${eager ? '' : ' loading="lazy"'} decoding="async">
</div>`;
}
