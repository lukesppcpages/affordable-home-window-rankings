/* Affordable Home — company review page client.
 * Service selection state, CTA personalization, sticky CTA, attribution,
 * analytics events and the estimate form. Config: window.AH_REVIEW.
 *
 * Analytics: every event goes to window.dataLayer (GTM/GA4). Events carry
 * page context + selected service only — never names, email, phone, ZIP or
 * any other form value. Primary conversion = ah_lead_success (a lead accepted
 * by the configured endpoint). Everything else is diagnostic.
 */
(function () {
  'use strict';
  var C = window.AH_REVIEW || {};
  var SERVICES = C.services || {};
  var KEY_SVC = 'ah_review_service';
  var KEY_ATTR = 'ah_review_attribution';
  var state = { service: '', submitting: false, started: false };

  // ---------- storage (may throw in private modes) ----------
  function store(k, v) { try { sessionStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); } catch (e) {} }
  function load(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }

  // ---------- analytics ----------
  window.dataLayer = window.dataLayer || [];
  var intent = (/[?&]intent=([a-z]+)/.exec(location.search) || [])[1] || 'default';
  function track(event, params) {
    var payload = {
      event: event,
      page_type: 'company_review',
      page_slug: C.page,
      company: C.company,
      content_intent: intent,
      selected_service: state.service || 'none',
      device_type: matchMedia('(min-width: 900px)').matches ? 'desktop' : 'mobile',
    };
    for (var k in params) payload[k] = params[k];
    window.dataLayer.push(payload);
    if (C.debug && window.console) console.info('[AH event]', event, payload);
  }

  // ---------- attribution ----------
  // First-touch per session, but a new click id (gclid etc.) on a later
  // landing replaces the stored set so the lead credits the latest ad click.
  function captureAttribution() {
    var params = new URLSearchParams(location.search);
    var incoming = {};
    (C.attributionParams || []).forEach(function (p) {
      var v = params.get(p);
      if (v) incoming[p] = v.slice(0, 200);
    });
    var saved = {};
    try { saved = JSON.parse(load(KEY_ATTR) || '{}'); } catch (e) {}
    var newClick = incoming.gclid || incoming.gbraid || incoming.wbraid || incoming.msclkid;
    if (!saved.landing_page || newClick) {
      saved = incoming;
      saved.landing_page = location.origin + location.pathname + location.search;
      saved.referrer = document.referrer ? document.referrer.split('?')[0] : '';
      saved.first_seen = new Date().toISOString();
      store(KEY_ATTR, saved);
    }
    return saved;
  }
  var attribution = captureAttribution();

  // ---------- service selection ----------
  var ctaLabels = document.querySelectorAll('[data-cta-label]');
  var panels = document.querySelectorAll('[data-svc-panel]');
  var pickInputs = document.querySelectorAll('[data-svc-input]');
  var cards = document.querySelectorAll('[data-svc-card]');
  var form = document.querySelector('[data-estimate-form]');
  var heading = document.querySelector('[data-form-heading]');
  var submitLabel = document.querySelector('[data-submit-label]');

  function setService(id, source) {
    if (id && !SERVICES[id]) return;
    var changed = id !== state.service;
    state.service = id || '';
    var s = SERVICES[state.service];
    var defaults = C.defaults || {};

    // CTAs: service panel buttons are already service-specific; the rest follow selection.
    ctaLabels.forEach(function (el) {
      if (el.closest('[data-svc-panel]')) return;
      el.textContent = (s && s.cta) || defaults.cta;
    });
    // "More than one" has no specific copy — keep the universal heading.
    if (heading) heading.textContent = (s && s.heading) || defaults.heading;
    if (submitLabel) submitLabel.textContent = (s && s.submit) || defaults.submit;

    // Discovery panel: only the 4 services have panels; otherwise show the prompt.
    var panelId = document.querySelector('[data-svc-panel="' + state.service + '"]') ? state.service : '';
    panels.forEach(function (p) { p.hidden = p.getAttribute('data-svc-panel') !== panelId; });
    pickInputs.forEach(function (i) { i.checked = i.value === state.service; });
    cards.forEach(function (c) { c.classList.toggle('is-selected', c.getAttribute('data-svc-card') === state.service); });
    if (form) form.querySelectorAll('input[name="service"]').forEach(function (i) { i.checked = i.value === state.service; });

    if (state.service) store(KEY_SVC, state.service);
    if (changed && source && state.service) track('ah_service_select', { service: state.service, select_source: source });
    if (form && state.service) clearError(form.querySelector('input[name="service"]'));
  }

  pickInputs.forEach(function (i) {
    i.addEventListener('change', function () { setService(i.value, 'selector'); });
  });

  // Initial service: earlier choice this session > ad-group intent > none.
  var initial = load(KEY_SVC) || (C.serviceIntents || {})[intent] || '';
  setService(initial, null);

  // ---------- CTA clicks + scrolling ----------
  var formSection = document.getElementById('estimate');
  function goToForm() {
    if (!formSection) return;
    formSection.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    if (heading) heading.focus({ preventScroll: true });
    if (history.replaceState) history.replaceState(null, '', '#estimate');
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-cta]');
    if (!a) return;
    var svc = a.getAttribute('data-svc-select');
    if (svc) setService(svc, 'service_card');
    track('ah_cta_click', { cta_position: a.getAttribute('data-cta') });
    if (a.getAttribute('href') === '#estimate') { e.preventDefault(); goToForm(); }
  });

  // ---------- sticky CTA (mobile) ----------
  var sticky = document.querySelector('[data-sticky]');
  var hero = document.querySelector('.rv-hero__copy');
  var vis = { hero: true, form: false, footer: false, typing: false };
  var inlineCtas = new Set(); // primary CTAs currently on screen
  function updateSticky() {
    if (!sticky) return;
    var show = !vis.hero && !vis.form && !vis.footer && !vis.typing && !inlineCtas.size;
    sticky.classList.toggle('is-visible', show);
    sticky.setAttribute('aria-hidden', show ? 'false' : 'true');
    var link = sticky.querySelector('a');
    if (link) link.tabIndex = show ? 0 : -1;
    document.documentElement.style.setProperty('--sticky-h', show ? sticky.offsetHeight + 'px' : '0px');
  }
  if ('IntersectionObserver' in window && sticky) {
    var watch = function (el, key) {
      if (!el) return;
      new IntersectionObserver(function (entries) {
        vis[key] = entries[0].isIntersecting; updateSticky();
      }).observe(el);
    };
    watch(hero, 'hero');
    watch(formSection, 'form');
    watch(document.querySelector('.rv-footer'), 'footer');
    // Step aside while an inline primary CTA is visible, so two identical buttons never stack.
    var ctaObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.isIntersecting ? inlineCtas.add(en.target) : inlineCtas.delete(en.target); });
      updateSticky();
    });
    document.querySelectorAll('main .rv-btn--primary[data-cta]').forEach(function (el) { ctaObs.observe(el); });
  }
  // Hide while any text field has focus so it never covers inputs or rides the keyboard.
  document.addEventListener('focusin', function (e) {
    if (e.target.matches('input, textarea, select')) { vis.typing = true; updateSticky(); }
  });
  document.addEventListener('focusout', function () { vis.typing = false; setTimeout(updateSticky, 50); });

  // ---------- page + form view ----------
  track('ah_page_view', {});
  if ('IntersectionObserver' in window && form) {
    var seen = false;
    new IntersectionObserver(function (entries, obs) {
      if (!seen && entries[0].isIntersecting) { seen = true; track('ah_form_view', {}); obs.disconnect(); }
    }, { threshold: 0.35 }).observe(form);
  }

  if (!form) return;

  // ---------- validation ----------
  var RULES = {
    first_name: function (v) { return v.trim() ? (/^[A-Za-zÀ-ÿ' .-]{1,50}$/.test(v.trim()) ? '' : 'Please use letters only.') : 'Please enter your first name.'; },
    last_name: function (v) { return v.trim() ? (/^[A-Za-zÀ-ÿ' .-]{1,50}$/.test(v.trim()) ? '' : 'Please use letters only.') : 'Please enter your last name.'; },
    street_address: function (v) { return v.trim().length >= 5 ? '' : 'Please enter your street address.'; },
    email: function (v) { return !v.trim() ? 'Please enter your email.' : (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) ? '' : 'Please enter a valid email, like name@example.com.'); },
    phone: function (v) {
      var d = digits(v);
      if (!d) return 'Please enter your phone number.';
      return d.length === 10 && /^[2-9]\d{2}[2-9]/.test(d) ? '' : 'Please enter a valid 10-digit U.S. phone number.';
    },
    zip: function (v) { return /^\d{5}$/.test(v.trim()) ? '' : 'Please enter a 5-digit ZIP code.'; },
  };
  function digits(v) { var d = String(v).replace(/\D/g, ''); return d.length === 11 && d[0] === '1' ? d.slice(1) : d; }

  function errorEl(input) { return document.getElementById(input.getAttribute('aria-describedby')); }
  function showError(input, msg) {
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    var el = errorEl(input);
    if (el) el.textContent = msg;
  }
  function clearError(input) { if (input) showError(input, ''); }

  function validateField(input) {
    var msg = '';
    if (input.name === 'service') {
      msg = form.querySelector('input[name="service"]:checked') ? '' : 'Please choose a project type.';
    } else if (input.name === 'consent') {
      msg = input.checked ? '' : 'Please check this box to continue.';
    } else if (RULES[input.name]) {
      msg = RULES[input.name](input.value);
    }
    showError(input, msg);
    return !msg;
  }

  // Validate on blur once touched; re-validate as they fix an error.
  form.querySelectorAll('[data-field]').forEach(function (input) {
    input.addEventListener('blur', function () { if (input.value) validateField(input); });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') validateField(input);
    });
  });

  // Phone: format as (555) 555-5555 while typing.
  var phone = form.querySelector('[name="phone"]');
  if (phone) phone.addEventListener('input', function (e) {
    if (e.inputType && e.inputType.indexOf('delete') === 0) return;
    var d = digits(phone.value).slice(0, 10);
    phone.value = d.length > 6 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6)
      : d.length > 3 ? '(' + d.slice(0, 3) + ') ' + d.slice(3) : d;
  });
  var zip = form.querySelector('[name="zip"]');
  if (zip) zip.addEventListener('input', function () { zip.value = zip.value.replace(/\D/g, '').slice(0, 5); });

  form.addEventListener('change', function (e) {
    if (e.target.name === 'service') setService(e.target.value, 'form');
  });

  // Form started: first interaction with any field.
  form.addEventListener('input', function () {
    if (state.started) return;
    state.started = true;
    track('ah_form_start', {});
  });

  // ---------- submit ----------
  var statusEl = form.querySelector('[data-form-status]');
  var submitBtn = form.querySelector('[data-submit]');
  var success = document.querySelector('[data-form-success]');

  function setStatus(msg, kind) {
    statusEl.textContent = msg;
    statusEl.className = 'rv-form__status' + (kind ? ' is-' + kind : '');
  }
  function setSubmitting(on) {
    state.submitting = on;
    form.classList.toggle('is-submitting', on);
    submitBtn.disabled = on;
    submitBtn.setAttribute('aria-busy', on ? 'true' : 'false');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (state.submitting) return; // duplicate-submit guard

    var fields = [form.querySelector('input[name="service"]')].concat(
      Array.prototype.slice.call(form.querySelectorAll('[data-field], input[name="consent"]')),
    );
    var invalid = fields.filter(function (f) { return f && !validateField(f); });
    if (invalid.length) {
      setStatus('Please fix the highlighted fields.', 'error');
      track('ah_form_validation_error', { invalid_fields: invalid.map(function (f) { return f.name; }).join(',') });
      invalid[0].focus();
      return;
    }
    setStatus('', '');

    var val = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
    var consentBox = form.querySelector('input[name="consent"]');
    var lead = {
      service: state.service,
      first_name: val('first_name'),
      last_name: val('last_name'),
      email: val('email'),
      phone: digits(val('phone')),
      zip: val('zip'),
      consent: { text: C.consentText || null, given: consentBox ? consentBox.checked : null },
      attribution: attribution,
      page_url: location.origin + location.pathname,
      submitted_at: new Date().toISOString(),
    };
    if (form.querySelector('[name="street_address"]')) lead.street_address = val('street_address');

    track('ah_form_submit', { service: state.service });

    // Development-only handler: no endpoint configured, so nothing leaves the page.
    if (!C.endpoint) {
      setStatus('Development mode: this form is not connected to a lead destination yet, so nothing was sent. Your details are still in the form.', 'dev');
      track('ah_lead_not_sent', { reason: 'endpoint_not_configured' });
      return;
    }

    setSubmitting(true);
    var ctrl = 'AbortController' in window ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 15000);
    fetch(C.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: ctrl ? ctrl.signal : undefined,
    }).then(function (res) {
      clearTimeout(timer);
      if (!res.ok) throw { type: 'http_' + res.status };
      track('ah_lead_success', { service: state.service });
      form.hidden = true;
      success.hidden = false;
      success.focus();
    }).catch(function (err) {
      clearTimeout(timer);
      var type = (err && err.type) || (err && err.name === 'AbortError' ? 'timeout' : 'network');
      track('ah_lead_error', { error_type: type });
      setStatus("Sorry — we couldn't send your request. Please check your connection and try again. Your details are still in the form.", 'error');
      setSubmitting(false);
    });
  });
})();
