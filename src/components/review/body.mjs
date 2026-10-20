// InDepthReview (A–F), ServiceOverview, IdealCustomerSection.
import { html } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';
import { CtaButton } from './layout.mjs';

const TOC = [
  ['rv-different', 'What makes Power different'],
  ['rv-products', 'Products & materials'],
  ['rv-install', 'Installation'],
  ['rv-warranty', 'Warranties'],
  ['rv-reputation', 'Customer reviews'],
  ['rv-pricing', 'Pricing & estimates'],
];

export function InDepthReview({ review, base }) {
  const r = review.review;
  return html`
<section class="rv-section" id="review" aria-labelledby="review-title">
  <div class="rv-container rv-container--read">
    <h2 id="review-title" class="rv-h2">Our Review of ${review.company}</h2>
    <nav class="rv-toc" aria-label="In this review">
      <p class="rv-toc__label">In this review</p>
      <ol>${TOC.map(([id, label]) => html`<li><a href="#${id}">${label}</a></li>`)}</ol>
    </nav>

    <article class="rv-article">
      <h3 id="rv-different">What makes Power different?</h3>
      ${r.different.paragraphs.map((p) => html`<p>${p}</p>`)}
      <p class="rv-takeaway"><strong>Takeaway:</strong> ${r.different.takeaway}</p>

      <h3 id="rv-products">Products and materials</h3>
      <p>${r.products.intro}</p>
      <dl class="rv-specs">
        ${r.products.rows.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}
      </dl>
      <p class="rv-note">${r.products.note}</p>

      <h3 id="rv-install">The installation experience</h3>
      <figure class="rv-figure">
        <img src="${base}images/power-home/install-640.webp" srcset="${base}images/power-home/install-640.webp 640w, ${base}images/power-home/install-1200.webp 1200w" sizes="(min-width: 760px) 720px, 100vw" alt="Installers fitting a new replacement window into a home" width="1200" height="800" loading="lazy" decoding="async">
      </figure>
      <ol class="rv-steps">
        ${r.install.steps.map(([t, b], i) => html`<li><span class="rv-steps__n">${i + 1}</span><div><strong>${t}</strong><p>${b}</p></div></li>`)}
      </ol>
      <h4>Who does the installation?</h4>
      <p>${r.install.installers}</p>
      <aside class="rv-callout rv-callout--app">
        <img src="${base}images/power-home/project-pulse-phone.webp" alt="Project Pulse app showing project progress" width="560" height="560" loading="lazy" decoding="async">
        <div>
          <p class="rv-callout__title">${r.install.pulse.title}</p>
          <p>${r.install.pulse.body}</p>
        </div>
      </aside>

      <h3 id="rv-warranty">Warranties and long-term value</h3>
      <p>Power's coverage comes in two layers, and it's worth knowing which one applies before something goes wrong.</p>
      <div class="rv-two">
        ${r.warranty.items.map(([t, b]) => html`<div class="rv-mini">${icon('shield-check', { size: 20 })}<p class="rv-mini__title">${t}</p><p>${b}</p></div>`)}
      </div>
      <details class="rv-accordion">
        <summary>What to verify before you sign ${icon('chevron-down', { size: 18 })}</summary>
        <ul class="rv-checklist">${r.warranty.verify.map((t) => html`<li>${icon('check', { size: 16 })}${t}</li>`)}</ul>
      </details>

      <h3 id="rv-reputation">Customer reviews and reputation</h3>
      <p>${r.reputation.intro}</p>
      <div class="rv-two">
        <div class="rv-mini">
          <p class="rv-mini__title">${icon('thumbs-up', { size: 18 })} Common praise</p>
          <ul class="rv-dots">${r.reputation.positive.map((t) => html`<li>${t}</li>`)}</ul>
        </div>
        <div class="rv-mini">
          <p class="rv-mini__title">${icon('thumbs-down', { size: 18 })} Common complaints</p>
          <ul class="rv-dots">${r.reputation.negative.map((t) => html`<li>${t}</li>`)}</ul>
        </div>
      </div>
      <p>${r.reputation.context}</p>
      <p class="rv-note">${r.reputation.note} Read reviews on
        ${r.reputation.sources.map(([name, url], i, a) => html`${i ? (i === a.length - 1 ? ' and ' : ', ') : ''}<a href="${url}" target="_blank" rel="noopener nofollow">${name}</a>`)}.</p>

      <h3 id="rv-pricing">Pricing and estimates</h3>
      ${r.pricing.paragraphs.map((p) => html`<p>${p}</p>`)}
      <h4>What moves the price</h4>
      <dl class="rv-specs rv-specs--factors">
        ${r.pricing.factors.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}
      </dl>
      <div class="rv-cta-box">
        <div>
          <p class="rv-cta-box__title">Find out what your project would cost</p>
          <p>A personalized estimate is the only way to get a real number for your home.</p>
        </div>
        ${CtaButton({ position: 'after_pricing' })}
      </div>
    </article>
  </div>
</section>`;
}

export function ServiceOverview({ review }) {
  return html`
<section class="rv-section rv-section--alt" id="services" aria-labelledby="services-title">
  <div class="rv-container">
    <h2 id="services-title" class="rv-h2">Explore Power's Home Improvement Services</h2>
    <p class="rv-lede">Availability and product lines vary by market, so confirm what's offered in your area at your consultation.</p>
    <div class="rv-svc-grid">
      ${review.services.map((s) => html`
      <article class="rv-svc" data-svc-card="${s.id}">
        <div class="rv-svc__art" aria-hidden="true">${icon('svc-' + s.id, { size: 40, strokeWidth: 1.5 })}</div>
        <div class="rv-svc__body">
          <h3>${s.overview.title}</h3>
          <p>${s.overview.body}</p>
          <dl>${s.overview.points.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}</dl>
          <a class="rv-btn rv-btn--outline" href="#estimate" data-cta="service_card" data-svc-select="${s.id}">${s.cta}</a>
        </div>
      </article>`)}
    </div>
  </div>
</section>`;
}

export function IdealCustomerSection({ review }) {
  return html`
<section class="rv-section" id="fit" aria-labelledby="fit-title">
  <div class="rv-container rv-container--mid">
    <h2 id="fit-title" class="rv-h2">Is ${review.company} Right for You?</h2>
    <p class="rv-lede">Power is built for bigger exterior projects. Here's an honest read on who tends to get the most out of it.</p>
    <div class="rv-fit">
      <div class="rv-fit__col rv-fit__col--good">
        <h3>${icon('circle-check', { size: 20 })} A good fit if you…</h3>
        <ul>${review.fit.good.map((t) => html`<li>${t}</li>`)}</ul>
      </div>
      <div class="rv-fit__col">
        <h3>${icon('circle-alert', { size: 20 })} Look at alternatives if…</h3>
        <ul>${review.fit.alternatives.map((t) => html`<li>${t}</li>`)}</ul>
      </div>
    </div>
  </div>
</section>`;
}
