/*
 * Affordable Home — page behaviour and tracking hooks.
 * No dependencies. Loaded with `defer`; the page works without it (review
 * panels show open and links navigate normally).
 *
 * Every event is pushed to window.dataLayer (picked up by GTM when a
 * container is configured) and passed to any adapters registered with
 * AH.addAdapter(fn) — e.g. an affiliate platform's click API.
 * Events never contain personal information.
 */
(function () {
  'use strict';

  var cfg = window.AH_CONFIG || {};
  var AH = (window.AH = window.AH || {});
  var adapters = (AH.adapters = AH.adapters || []);
  var fired = {};

  function deviceType() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    return w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
  }

  /**
   * Send an analytics event.
   * @param {string} name      event name (prefixed with "ah_")
   * @param {object} props     event-specific fields
   * @param {string} [onceKey] when set, the event fires at most once per page view
   */
  function track(name, props, onceKey) {
    if (onceKey) {
      if (fired[onceKey]) return;
      fired[onceKey] = true;
    }
    var evt = {
      event: 'ah_' + name,
      page_category: cfg.category,
      page_variant: cfg.variant,
      device_type: deviceType(),
      event_timestamp: new Date().toISOString(),
    };
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k)) evt[k] = props[k];

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(evt);
    for (var i = 0; i < adapters.length; i++) {
      try { adapters[i](evt); } catch (e) { /* an adapter must never break the page */ }
    }
    if (cfg.debug && window.console) console.info('[AH track]', evt);
  }

  AH.track = track;
  AH.addAdapter = function (fn) { if (typeof fn === 'function') adapters.push(fn); };

  function brandProps(el) {
    var card = el.closest('[data-placement]');
    return {
      brand: el.getAttribute('data-brand'),
      brand_rank: Number(el.getAttribute('data-rank')),
      placement: card ? card.getAttribute('data-placement') : 'list',
    };
  }

  /* ---------- Campaign attribution passthrough ---------- */
  var incoming = new URLSearchParams(window.location.search);
  var keep = cfg.passthroughParams || [];
  var outbound = document.querySelectorAll('a[data-outbound]');
  for (var i = 0; i < outbound.length; i++) {
    var a = outbound[i];
    if (a.hasAttribute('data-unconfigured')) continue;
    try {
      var url = new URL(a.href);
      keep.forEach(function (key) {
        var v = incoming.get(key);
        if (v && !url.searchParams.has(key)) url.searchParams.set(key, v);
      });
      a.href = url.toString();
    } catch (e) { /* leave the original href */ }
  }

  /* ---------- CTA clicks ---------- */
  var lastClick = { el: null, t: 0 };
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[data-outbound]');
    if (!link) return;

    if (link.hasAttribute('data-unconfigured')) {
      e.preventDefault();
      if (window.console) console.warn('[AH] CTA destination not configured for', link.getAttribute('data-brand'));
      return;
    }
    // Ignore accidental double-clicks on the same button.
    var now = Date.now();
    if (lastClick.el === link && now - lastClick.t < 1000) return;
    lastClick = { el: link, t: now };

    var props = brandProps(link);
    props.cta_position = link.getAttribute('data-position');
    track('cta_click', props);
  });

  /* ---------- Read Review panels ---------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-review-toggle]');
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('span').textContent = open ? 'Hide Review' : (btn.getAttribute('data-label') || 'Read Review');
    panel.hidden = !open;
    if (open) {
      var card = btn.closest('[data-brand]');
      track('review_expand', brandProps(card), 'review:' + card.id);
    }
  });
  var toggles = document.querySelectorAll('[data-review-toggle]');
  for (var t = 0; t < toggles.length; t++) {
    toggles[t].setAttribute('data-label', toggles[t].querySelector('span').textContent);
  }

  /* ---------- In-page review jump links ---------- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('[data-review-jump]');
    if (!link) return;
    track('review_jump', brandProps(link.closest('[data-brand]')));
  });
  if ('IntersectionObserver' in window) {
    var deep = document.querySelector('[data-placement="deep_review"]');
    if (deep) {
      var deepIo = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        track('deep_review_view', brandProps(deep), 'deep:' + deep.id);
        deepIo.disconnect();
      }, { threshold: 0.15 });
      deepIo.observe(deep);
    }
  }

  /* ---------- Advertising disclosure lightbox ---------- */
  var dialog = document.getElementById('disclosure-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('[data-disclosure-open]')) {
        e.preventDefault();
        dialog.showModal();
      } else if (e.target.closest && e.target.closest('[data-dialog-close]')) {
        dialog.close();
      } else if (e.target === dialog) {
        dialog.close(); // click on the backdrop
      }
    });
  }

  /* ---------- Header menu: close on link click, outside click or Escape ---------- */
  var menu = document.querySelector('[data-site-menu]');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.open = false;
    });
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
  }

  /* ---------- FAQ: one open at a time (fallback for browsers without <details name>) ---------- */
  var faqs = document.querySelectorAll('details[name="faq"]');
  for (var f = 0; f < faqs.length; f++) {
    faqs[f].addEventListener('toggle', function () {
      if (!this.open) return;
      for (var j = 0; j < faqs.length; j++) if (faqs[j] !== this) faqs[j].open = false;
      track('faq_open', { faq_index: Number(this.getAttribute('data-faq-index')) }, 'faq:' + this.getAttribute('data-faq-index'));
    });
  }

  /* ---------- Ranking impressions ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var card = entry.target;
        track('ranking_impression', brandProps(card), 'imp:' + card.id);
        io.unobserve(card);
      });
    }, { threshold: cfg.impressionThreshold || 0.5 });
    var cards = document.querySelectorAll('article[data-brand]');
    for (var c = 0; c < cards.length; c++) io.observe(cards[c]);
  }

  /* ---------- Scroll depth ---------- */
  var marks = (cfg.scrollDepthMarks || []).slice().sort(function (a, b) { return a - b; });
  var ticking = false;
  function checkDepth() {
    ticking = false;
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    var pct = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100;
    while (marks.length && pct >= marks[0]) {
      var m = marks.shift();
      track('scroll_depth', { percent: m }, 'scroll:' + m);
    }
    if (!marks.length) window.removeEventListener('scroll', onScroll);
  }
  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(checkDepth); }
  }
  if (marks.length) window.addEventListener('scroll', onScroll, { passive: true });
})();
