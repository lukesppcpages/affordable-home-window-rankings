import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { BrandLogo } from './BrandLogo.mjs';
import { RatingScore } from './RatingScore.mjs';
import { CtaButton } from './CtaButton.mjs';

// Full in-page review for the featured brand (the brand with `deepReview`
// data). Both "Read Full Review" links on that brand's cards jump here.
export function DeepReview(ctx) {
  const brand = ctx.category.brands.find((b) => b.deepReview);
  if (!brand) return '';
  const { site, base, draft, category } = ctx;
  const r = brand.deepReview;
  const img = (i, sizes) => html`<img src="${base}${i.srcSmall || i.src}"${i.srcSmall ? html` srcset="${base}${i.srcSmall} 640w, ${base}${i.src} ${i.width}w" sizes="${sizes}"` : ''} alt="${i.alt}" width="${i.width}" height="${i.height}" loading="lazy" decoding="async">`;
  const pending = draft && brand.pending?.length
    ? html`<div class="draft-flag"><strong>Pending verification (draft only):</strong><ul>${brand.pending.map((p) => html`<li>${p}</li>`)}</ul></div>`
    : '';

  return html`
<section class="dr" id="${r.anchor}" aria-labelledby="${r.anchor}-title" data-brand="${brand.id}" data-rank="${brand.rank}" data-placement="deep_review">
  <div class="container">
    <div class="dr__intro">
      <div class="dr__intro-media">${img(r.heroImage, '(min-width: 1024px) 520px, 100vw')}</div>
      <div class="dr__intro-copy">
        ${r.eyebrow ? html`<p class="dr__eyebrow">${r.eyebrow}</p>` : ''}
        <h2 class="dr__title" id="${r.anchor}-title">${r.title}</h2>
        ${r.intro.map((p) => html`<p class="dr__lead">${p}</p>`)}
      </div>
    </div>

    ${r.facts ? html`<dl class="dr__facts">
      ${r.facts.map((f) => html`<div class="dr__fact"><dt>${f.label}</dt><dd>${f.value}</dd></div>`)}
    </dl>` : ''}

    ${r.quality ? html`
    <div class="dr__quality">
      ${r.quality.title ? html`<h3 class="dr__h3">${r.quality.title}</h3>` : ''}
      ${r.quality.intro ? html`<p class="dr__quality-intro">${r.quality.intro}</p>` : ''}
      <div class="dr__quality-cols">
        ${r.quality.columns.map((c) => html`
        <div class="dr__quality-col">
          <div class="dr__quality-head">${c.icon ? html`<span class="dr__icon">${icon(c.icon, { size: 22 })}</span>` : ''}<h4>${c.title}</h4></div>
          <ul>${c.points.map((p) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${p}</span></li>`)}</ul>
        </div>`)}
      </div>
    </div>` : ''}

    ${r.highlights ? html`
    <h3 class="dr__h3">${r.highlightsTitle}</h3>
    <div class="dr__highlights">
      ${r.highlights.map((h) => html`
      <div class="dr__highlight">
        <span class="dr__icon">${icon(h.icon, { size: 22 })}</span>
        <div><h4>${h.title}</h4><p>${h.body}</p></div>
      </div>`)}
    </div>` : ''}

    <div class="dr__process">
      <div class="dr__process-media">${img(r.process.image, '(min-width: 1024px) 520px, 100vw')}</div>
      <div>
        <h3 class="dr__h3">${r.process.title}</h3>
        <ol class="dr__steps">
          ${r.process.steps.map((s, i) => html`<li><span class="dr__step-num" aria-hidden="true">${i + 1}</span><div><h4>${s.title}</h4><p>${s.body}</p></div></li>`)}
        </ol>
      </div>
    </div>

    <div class="dr__app">
      <div class="dr__app-media">${img(r.app.image, '(min-width: 768px) 280px, 220px')}</div>
      <div class="dr__app-copy">
        <img class="dr__app-logo" src="${base}${r.app.logo.src}" alt="${r.app.logo.alt}" width="${r.app.logo.width}" height="${r.app.logo.height}" loading="lazy">
        <h3 class="dr__h3">${r.app.title}</h3>
        <p>${r.app.body}</p>
        <ul class="dr__app-list">${r.app.points.map((p) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${p}</span></li>`)}</ul>
      </div>
    </div>

    <div class="dr__proscons">
      <div class="dr__pros">
        <h3 class="dr__h3">Pros</h3>
        <ul>${r.pros.map((p) => html`<li>${icon('check', { size: 18, strokeWidth: 2.5 })}<span>${p}</span></li>`)}</ul>
      </div>
      <div class="dr__cons">
        <h3 class="dr__h3">${r.consTitle || 'Things to Know'}</h3>
        <ul>${r.cons.map((p) => html`<li>${icon('minus', { size: 18, strokeWidth: 2.5 })}<span>${p}</span></li>`)}</ul>
      </div>
    </div>

    ${r.verdict ? html`<div class="dr__verdict">
      <div class="dr__verdict-copy">
        <h3 class="dr__h3">${r.verdict.title}</h3>
        <p>${r.verdict.body}</p>
        <p class="dr__bestfor"><strong>Best for:</strong> ${r.verdict.bestFor}</p>
      </div>
      <div class="dr__verdict-cta">
        ${BrandLogo({ brand, base })}
        ${RatingScore({ score: brand.score, label: category.scoreLabel })}
        ${CtaButton({ brand, position: 'deep_review_verdict', site, label: `${site.experiments.ctaLabel} from ${brand.shortName || brand.name}` })}
      </div>
    </div>` : ''}
    ${pending}
  </div>
</section>`;
}
