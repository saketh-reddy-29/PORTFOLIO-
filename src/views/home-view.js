import { PROJECTS_DATA } from '../projects-data.js';

export function renderHomeView() {
  // Select top 6 representative projects for homepage curated previews
  const featured = PROJECTS_DATA.slice(0, 6);

  return `
    <!-- ---------------------------------------------------------- -->
    <!-- SHEET 01: COVER / INTRODUCTION (Upper-Left Reference)      -->
    <!-- ---------------------------------------------------------- -->
    <section class="editorial-sheet" id="sheet-cover" aria-label="Cover Sheet">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/" data-link>ENGINEERING</a>
          <span>/</span>
          <a href="/projects" data-link>PORTFOLIO</a>
          <span>/</span>
          <a href="/projects" data-link>PROJECTS</a>
        </div>
        <div class="sheet-num-tag">SHEET NO. 01 / 07 — COVER</div>
      </div>

      <!-- Main Cover Content Grid -->
      <div class="cover-grid">
        <!-- Left Side: Brand, Headline, Metadata & Summary -->
        <div class="cover-left">
          <div class="cover-brand-block">
            <div class="cover-avatar-circle">SR</div>
            <div class="cover-brand-meta">
              <span class="cover-name">Saketh Reddy</span>
              <span class="cover-subtitle">AI/ML ENGINEER &amp; SOFTWARE DEVELOPER</span>
            </div>
          </div>

          <h1 class="cover-headline">
            BUILDING<br>
            INTELLIGENT<br>
            SYSTEMS.
          </h1>

          <p class="cover-intro">
            I design and build intelligent applications, enterprise software, digital experiences, and automation-driven systems.
          </p>

          <div class="cover-specs-row">
            <div class="spec-line">
              <span class="spec-bullet"></span>
              <span>AI / ML ENGINEERING</span>
            </div>
            <div class="spec-line">
              <span class="spec-bullet"></span>
              <span>GENERATIVE AI &amp; RAG ARCHITECTURE</span>
            </div>
            <div class="spec-line">
              <span class="spec-bullet"></span>
              <span>SOFTWARE DEVELOPMENT</span>
            </div>
            <div class="spec-line">
              <span class="spec-bullet"></span>
              <span>AUTOMATION &amp; SYSTEMS</span>
            </div>
          </div>

          <div class="cover-ctas">
            <a href="/projects" class="btn-cover-primary" data-link>EXPLORE PROJECTS ↗</a>
            <a href="/about" class="btn-cover-secondary" data-link>ABOUT ME ↗</a>
          </div>
        </div>

        <!-- Right Side: Large Wide Monochrome Technology Image -->
        <div class="cover-right">
          <div class="arch-img-wrap cover-hero-img-wrap">
            <img 
              src="/assets/hero-cyber.jpg" 
              alt="Neural System Architecture &amp; Matrix Digital Runtime Environment" 
              class="arch-img"
              loading="eager"
            >
          </div>
          <div class="arch-caption">FIG. 01 — NEURAL SYSTEM ARCHITECTURE &amp; HIGH-DENSITY RUNTIME ENVIRONMENT</div>
        </div>
      </div>
    </section>

    <!-- ---------------------------------------------------------- -->
    <!-- SHEET 02: SELECTED EDITORIAL PROJECT PREVIEWS              -->
    <!-- ---------------------------------------------------------- -->
    <section class="editorial-sheet" id="sheet-selected-previews" aria-label="Curated Project Previews">
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <span>CURATED SELECTION</span>
          <span>/</span>
          <span>DEDICATED CASE STUDIES</span>
        </div>
        <div class="sheet-num-tag">SHEET NO. 02 / 07 — SELECTED WORK</div>
      </div>

      <div style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 16px;">
        <div>
          <h2 class="index-main-title">Selected Projects</h2>
          <p class="index-subtitle">Curated industrial, interactive, and AI engineering case studies</p>
        </div>
        <a href="/projects" class="btn-explore-project" data-link style="font-size: 11px;">
          <span>VIEW COMPLETE INDEX (10 PROJECTS)</span>
          <span>↗</span>
        </a>
      </div>

      <!-- Alternating Asymmetric Editorial Previews -->
      <div class="home-previews-list">
        ${featured.map((p, index) => {
          const isReversed = index % 2 === 1;
          return `
            <article class="home-preview-item ${isReversed ? 'preview-reversed' : ''}">
              <div class="preview-text-block">
                <div class="preview-meta-tag">
                  <span class="preview-num">${p.number}</span>
                  <span class="preview-category">// ${p.category}</span>
                </div>
                <h3 class="preview-title">${p.title}</h3>
                <p class="preview-subtitle">${p.subtitle}</p>
                <p class="preview-desc">${p.statement}</p>
                
                <div class="preview-tech-strip">
                  ${p.stack.slice(0, 4).map(s => `<span class="preview-tech-pill">${s}</span>`).join('')}
                </div>

                <div class="preview-actions">
                  <a href="/projects/${p.slug}" class="btn-explore-project" data-link>
                    <span>VIEW DEDICATED CASE STUDY</span>
                    <span>↗</span>
                  </a>
                  ${p.liveUrl ? `
                    <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="preview-outbound-link">
                      <span>${p.liveUrlLabel}</span>
                    </a>
                  ` : ''}
                </div>
              </div>

              <div class="preview-media-block">
                <a href="${p.liveUrl || `/projects/${p.slug}`}" ${p.liveUrl ? 'target="_blank" rel="noopener noreferrer"' : 'data-link'} class="arch-img-wrap preview-img-wrap clickable-live-img" title="${p.liveUrl ? `Click to visit live website: ${p.liveUrl}` : p.title}">
                  <img src="${p.heroImage}" alt="${p.title} - ${p.subtitle}" class="arch-img" loading="lazy">
                  ${p.liveUrl ? `<span class="live-img-badge">VISIT LIVE ↗</span>` : ''}
                </a>
                <div class="arch-caption">${p.heroImageCaption}</div>
              </div>
            </article>
          `;
        }).join('')}
      </div>

      <!-- Closing Index Jump Banner -->
      <div class="home-index-banner">
        <div>
          <span style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase;">COMPLETE DIRECTORY</span>
          <h3 style="font-size: 1.4rem; font-weight: 700; color: #111; margin-top: 4px;">Explore all 10 Real-World Engineering Projects</h3>
          <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
            Including industrial automation platforms, game engines, desktop utilities, and edge computer vision.
          </p>
        </div>
        <a href="/projects" class="btn-cover-primary" data-link style="white-space: nowrap;">
          OPEN FULL PROJECT INDEX ↗
        </a>
      </div>
    </section>
  `;
}
