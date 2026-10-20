// ReviewHero, ReviewSummary (incl. pros & considerations), ServiceSelector +
// DynamicServicePanel.
import { html, raw } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';
import { CtaButton, AdvertisingDisclosure } from './layout.mjs';

const json = (value) => raw(JSON.stringify(value).replace(/</g, '\\u003c'));

export function ReviewHero(ctx) {
  const { review, base } = ctx;
  const { hero } = review;
  // Headline-only intents, applied before first paint (no flash or layout jump).
  const copyIntents = Object.fromEntries(
    Object.entries(review.intents).filter(([, v]) => v.headline).map(([k, v]) => [k, v]),
  );
  return html`
<section class="rv-hero" aria-labelledby="rv-title">
  <div class="rv-container rv-hero__grid">
    <div class="rv-hero__copy">
      <p class="rv-eyebrow">${hero.eyebrow}</p>
      <h1 id="rv-title" data-intent-headline>${hero.headline}</h1>
      <p class="rv-hero__intro" data-intent-intro>${hero.intro}</p>
      <script>(function(){try{var m=/[?&]intent=([a-z]+)/.exec(location.search),v=m&&${json(copyIntents)}[m[1]];if(!v)return;document.querySelector('[data-intent-headline]').textContent=v.headline;document.querySelector('[data-intent-intro]').textContent=v.intro;document.title=v.headline+' | Affordable Home';}catch(e){}})();</script>
      <p class="rv-hero__services" aria-label="Services covered">
        ${review.services.map((s, i) => html`${i ? html`<span aria-hidden="true">•</span>` : ''}<span>${s.label}</span>`)}
      </p>
      <p class="rv-hero__meta">
        <span>Reviewed <time datetime="${review.reviewed.iso}">${review.reviewed.label}</time></span>
        <a href="#methodology">How we review</a>
        <a href="#disclosure">Advertising disclosure</a>
      </p>
      <div class="rv-hero__actions">
        <a class="rv-btn rv-btn--ghost" href="#glance">Read the review ${icon('arrow-down', { size: 18 })}</a>
        <a class="rv-btn rv-btn--link" href="#services" data-cta="hero_services">Explore Power's Services</a>
      </div>
    </div>
    <figure class="rv-hero__media">
      <!-- Photo is desktop-only: phones get a 1px placeholder, so they never download it. -->
      <picture class="rv-hero__photo">
        <source media="(min-width: 900px)" srcset="${base}${hero.image.src}">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="${hero.image.alt}" width="${hero.image.width}" height="${hero.image.height}">
      </picture>
      <figcaption class="rv-hero__badge">
        <img src="${base}${review.logo.src}" alt="${review.logo.alt}" width="${review.logo.width}" height="${review.logo.height}">
        <span><strong>${review.company}</strong><span>Windows, roofing, siding &amp; doors in 25 states</span></span>
      </figcaption>
    </figure>
  </div>
  <div class="rv-container">${AdvertisingDisclosure(ctx)}</div>
</section>`;
}

export function ReviewSummary(ctx) {
  const { review, base } = ctx;
  const g = review.glance;
  return html`
<section class="rv-section rv-section--tight" id="glance" aria-labelledby="glance-title">
  <div class="rv-container rv-container--mid">
    <h2 id="glance-title" class="rv-h2">${review.company} at a Glance</h2>
    <article class="rv-card rv-glance">
      <header class="rv-glance__head">
        <img src="${base}${review.logo.src}" alt="${review.logo.alt}" width="${review.logo.width}" height="${review.logo.height}" loading="lazy">
        <div>
          <h3>${review.company}</h3>
          <p>${review.services.map((s) => s.label).join(' · ')}</p>
        </div>
      </header>
      <p class="rv-glance__overview">${g.overview}</p>
      <dl class="rv-facts">
        ${g.facts.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}
      </dl>
      <div class="rv-verdict">
        <p class="rv-verdict__label">Our verdict</p>
        <p>${g.verdict}</p>
      </div>
      <div class="rv-proscons">
        <div class="rv-proscons__col">
          <h4>${icon('circle-check', { size: 18 })} Where Power stands out</h4>
          <ul>${g.strengths.map((t) => html`<li>${t}</li>`)}</ul>
        </div>
        <div class="rv-proscons__col rv-proscons__col--cons">
          <h4>${icon('circle-alert', { size: 18 })} What to weigh</h4>
          <ul>${g.considerations.map((t) => html`<li>${t}</li>`)}</ul>
        </div>
      </div>
      <div class="rv-glance__cta">
        ${CtaButton({ position: 'summary' })}
        <span class="rv-microcopy">Free, in-home estimate from Power</span>
      </div>
    </article>
  </div>
</section>`;
}

export function ServiceSelector(ctx) {
  const { review } = ctx;
  return html`
<section class="rv-section rv-section--alt" id="improve" aria-labelledby="improve-title">
  <div class="rv-container rv-container--mid">
    <h2 id="improve-title" class="rv-h2">What Are You Looking to Improve?</h2>
    <p class="rv-lede">Explore Power's home improvement services and find the right option for your project.</p>
    <fieldset class="rv-picker">
      <legend class="visually-hidden">Choose a service</legend>
      ${review.services.map((s) => html`
      <label class="rv-picker__card">
        <input type="radio" name="svc-pick" value="${s.id}" data-svc-input>
        <span class="rv-picker__icon">${icon('svc-' + s.id, { size: 28, strokeWidth: 1.75 })}</span>
        <span class="rv-picker__name">${s.label}</span>
        <span class="rv-picker__check">${icon('check', { size: 14, strokeWidth: 3 })}</span>
      </label>`)}
    </fieldset>
    ${DynamicServicePanel(ctx)}
  </div>
</section>`;
}

function DynamicServicePanel({ review }) {
  return html`
<div class="rv-panel" aria-live="polite">
  <div class="rv-panel__item rv-panel__item--empty" data-svc-panel="">
    <p>Pick a service above to see what Power offers for it and what to ask at your estimate — or keep reading the full review below.</p>
  </div>
  ${review.services.map((s) => html`
  <div class="rv-panel__item" data-svc-panel="${s.id}" hidden>
    <h3>${s.panel.title}</h3>
    <p class="rv-panel__lead">${s.panel.lead}</p>
    <dl class="rv-panel__points">
      ${s.panel.points.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}
    </dl>
    <p class="rv-panel__ask">${icon('message-circle-question', { size: 18 })}<span><strong>Ask at your estimate:</strong> ${s.panel.ask}</span></p>
    ${CtaButton({ position: 'service_panel', label: s.cta })}
  </div>`)}
</div>`;
}
