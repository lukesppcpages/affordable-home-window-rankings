import { html, raw } from '../lib/html.mjs';

// The single primary button style. Every partner click goes through here so
// tracking attributes and link behaviour stay consistent.
export function CtaButton({ brand, position, site, label, className = '' }) {
  const url = brand.cta?.url;
  const common = `data-outbound data-brand="${brand.id}" data-rank="${brand.rank}" data-position="${position}"`;
  // Priority: explicit label > brand-specific label > page-wide label.
  const text = label || brand.cta?.label || site.experiments.ctaLabel;
  const srText = label ? '' : html`<span class="visually-hidden"> from ${brand.name}</span>`;

  if (!url) {
    // Draft-only: production builds fail before reaching this branch.
    return html`<a class="btn btn--cta is-unconfigured ${className}" href="#" role="button" aria-disabled="true" ${raw(common)} data-unconfigured title="Destination URL not configured">${text}${srText}</a>`;
  }
  const target = site.outbound.openInNewTab ? ' target="_blank"' : '';
  return html`<a class="btn btn--cta ${className}" href="${url}"${raw(target)} rel="sponsored noopener" ${raw(common)}>${text}${srText}</a>`;
}
