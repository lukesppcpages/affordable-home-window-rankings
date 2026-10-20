import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';

// Lightbox opened by the hero's "Advertising Disclosure" link (native <dialog>;
// without JS the link falls back to the full disclosure in the footer).
export function DisclosureDialog({ site }) {
  return html`
<dialog class="modal" id="disclosure-dialog" aria-labelledby="disclosure-dialog-title">
  <div class="modal__body">
    <button type="button" class="modal__close" data-dialog-close aria-label="Close">${icon('x', { size: 22 })}</button>
    <h2 class="modal__title" id="disclosure-dialog-title">Advertising Disclosure</h2>
    <p>${site.disclosureShort}</p>
  </div>
</dialog>`;
}
