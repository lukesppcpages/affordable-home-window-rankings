// Universal estimate form. Behavior (validation, sync, submit handler,
// attribution) lives in src/client/review.js; copy and settings come from the
// review data file's `form` and `services`.
import { html } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';

function Field({ id, label, type = 'text', autocomplete, inputmode, maxlength, half }) {
  return html`
<div class="rv-field${half ? ' rv-field--half' : ''}">
  <label for="f-${id}">${label}</label>
  <input id="f-${id}" name="${id}" type="${type}" autocomplete="${autocomplete}"
    ${inputmode ? html`inputmode="${inputmode}"` : ''} ${maxlength ? html`maxlength="${maxlength}"` : ''}
    required aria-describedby="e-${id}" data-field>
  <p class="rv-field__error" id="e-${id}" aria-live="polite"></p>
</div>`;
}

export function EstimateForm({ review, draft }) {
  const f = review.form;
  const options = [...review.services, f.multiOption];
  const consent = f.consent;
  return html`
<section class="rv-section rv-estimate" id="estimate" aria-labelledby="estimate-title">
  <div class="rv-container rv-container--form">
    <div class="rv-estimate__head">
      <h2 id="estimate-title" class="rv-h2" tabindex="-1" data-form-heading>${f.heading}</h2>
      <p class="rv-lede">${f.intro}</p>
    </div>

    <form class="rv-form rv-card" novalidate data-estimate-form>
      <fieldset class="rv-field rv-field--full">
        <legend>What's your project?</legend>
        <div class="rv-seg">
          ${options.map((o) => html`
          <label class="rv-seg__opt">
            <input type="radio" name="service" value="${o.id}" required aria-describedby="e-service">
            ${o.id !== 'multiple' ? icon('svc-' + o.id, { size: 20, strokeWidth: 1.75 }) : icon('plus', { size: 20 })}
            <span>${o.label}</span>
          </label>`)}
        </div>
        <p class="rv-field__error" id="e-service" aria-live="polite"></p>
      </fieldset>

      ${Field({ id: 'first_name', label: 'First name', autocomplete: 'given-name', maxlength: 50, half: true })}
      ${Field({ id: 'last_name', label: 'Last name', autocomplete: 'family-name', maxlength: 50, half: true })}
      ${f.requireAddress ? Field({ id: 'street_address', label: 'Street address', autocomplete: 'street-address', maxlength: 120 }) : ''}
      ${Field({ id: 'email', label: 'Email', type: 'email', autocomplete: 'email', inputmode: 'email', maxlength: 120 })}
      ${Field({ id: 'phone', label: 'Phone', type: 'tel', autocomplete: 'tel-national', inputmode: 'tel', maxlength: 14, half: true })}
      ${Field({ id: 'zip', label: 'ZIP code', autocomplete: 'postal-code', inputmode: 'numeric', maxlength: 5, half: true })}

      <div class="rv-form__legal">
        <p class="rv-form__recipient">${icon('lock', { size: 16 })}<span>${f.recipientNotice}</span></p>
        ${consent.text && consent.checkbox ? html`
        <label class="rv-consent">
          <input type="checkbox" name="consent" required aria-describedby="e-consent">
          <span>${consent.text}</span>
        </label>
        <p class="rv-field__error" id="e-consent" aria-live="polite"></p>` : ''}
        ${consent.text && !consent.checkbox ? html`<p class="rv-consent rv-consent--text" data-consent-text>${consent.text}</p>` : ''}
        ${!consent.text && draft ? html`<p class="rv-draft-note"><strong>Draft:</strong> consent / contact-permission language is pending legal review. Set <code>form.consent</code> in the data file.</p>` : ''}
      </div>

      <button class="rv-btn rv-btn--primary rv-btn--block rv-btn--lg" type="submit" data-submit>
        <span data-submit-label>${f.submit}</span>
        <span class="rv-spinner" aria-hidden="true"></span>
      </button>
      <div class="rv-form__status" role="status" aria-live="polite" data-form-status></div>
    </form>

    <div class="rv-success rv-card" data-form-success hidden tabindex="-1">
      ${icon('circle-check', { size: 36 })}
      <h3>Thanks — your request is in.</h3>
      <p>Power Home Remodeling will reach out using the details you provided to schedule your free estimate.</p>
    </div>
  </div>
</section>`;
}
