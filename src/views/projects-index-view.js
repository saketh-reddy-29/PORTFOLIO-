import { PROJECTS_DATA } from '../projects-data.js';

export function renderProjectsIndexView() {
  return `
    <section class="editorial-sheet" id="sheet-projects-index" aria-label="Projects Index Sheet">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/" data-link>ENGINEERING</a>
          <span>/</span>
          <span style="color: #111;">PROJECT DIRECTORY</span>
          <span>/</span>
          <span>INDEX &amp; CONTENT</span>
        </div>
        <div class="sheet-num-tag">SHEET NO. 03 / 07 — INDEX</div>
      </div>

      <!-- Upper-Right Reference Composition: Left Image + Right Index -->
      <div class="index-grid">
        <!-- Left 45-50%: Large Grayscale Architectural/Topography Composition -->
        <div class="index-left">
          <div class="arch-img-wrap index-left-img-wrap">
            <img 
              src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1000&q=80" 
              alt="Monochrome High-Dimension Linear Spatial Architecture and Knowledge Matrix" 
              class="arch-img"
              loading="lazy"
            >
          </div>
          <div class="arch-caption">FIG. 02 — HIGH-DIMENSION VECTOR EMBEDDINGS &amp; SOFTWARE TOPOGRAPHY</div>

          <!-- Static Index Summary Strip -->
          <div class="index-left-summary">
            <div class="index-summary-row">
              <span class="index-summary-lbl">TOTAL VERIFIED SYSTEMS:</span>
              <span class="index-summary-val">10 PRODUCTION &amp; RESEARCH SPECIFICATIONS</span>
            </div>
            <div class="index-summary-row">
              <span class="index-summary-lbl">DOMAINS COVERED:</span>
              <span class="index-summary-val">INDUSTRIAL WEB, INTERACTIVE ENGINES, AI &amp; MOBILE</span>
            </div>
            <div class="index-summary-row">
              <span class="index-summary-lbl">OUTBOUND LINKS:</span>
              <span class="index-summary-val">VERIFIED LIVE DEPLOYMENTS &amp; REPOSITORIES</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Heading, Filter Bar & Structured Numbered Entries -->
        <div class="index-right">
          <div class="index-header-block">
            <h1 class="index-main-title">Index/Content</h1>
            <p class="index-subtitle">AI &amp; Software Engineering Portfolio</p>
          </div>

          <!-- Functional Category Filter Bar -->
          <div class="index-filter-bar" role="tablist" aria-label="Project Category Filters">
            <button class="filter-btn active" data-filter="all" role="tab">All (10)</button>
            <button class="filter-btn" data-filter="web" role="tab">Web (4)</button>
            <button class="filter-btn" data-filter="ai" role="tab">AI/ML (2)</button>
            <button class="filter-btn" data-filter="desktop" role="tab">Desktop (1)</button>
            <button class="filter-btn" data-filter="enterprise" role="tab">Enterprise (1)</button>
            <button class="filter-btn" data-filter="interactive" role="tab">Interactive (1)</button>
            <button class="filter-btn" data-filter="mobile" role="tab">Mobile (1)</button>
          </div>

          <!-- Master Grouped Index List -->
          <div class="index-groups-container">
            <!-- GROUP 1: Industrial & Business Websites -->
            <div class="index-domain-group" data-domain="web">
              <div class="domain-group-header">
                <span class="domain-group-tag">SECTION_01</span>
                <h3 class="domain-group-title">Industrial &amp; Business Websites</h3>
              </div>
              <div class="domain-entries-list">
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'techbott'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'mectto'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'coastal-fabtech'))}
              </div>
            </div>

            <!-- GROUP 2: Interactive Applications -->
            <div class="index-domain-group" data-domain="interactive">
              <div class="domain-group-header">
                <span class="domain-group-tag">SECTION_02</span>
                <h3 class="domain-group-title">Interactive Applications</h3>
              </div>
              <div class="domain-entries-list">
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'crex-arena'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'gloster-desktop'))}
              </div>
            </div>

            <!-- GROUP 3: AI & Software Engineering -->
            <div class="index-domain-group" data-domain="ai-software">
              <div class="domain-group-header">
                <span class="domain-group-tag">SECTION_03</span>
                <h3 class="domain-group-title">AI &amp; Software Engineering</h3>
              </div>
              <div class="domain-entries-list">
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'ai-website-builder'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'hrms-attendance'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'ai-home-security'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'eloan-app'))}
                ${renderIndexItem(PROJECTS_DATA.find(p => p.id === 'construction-materials'))}
              </div>
            </div>

            <!-- GROUP 4: Technical Expertise Summary -->
            <div class="index-domain-group" data-domain="expertise">
              <div class="domain-group-header">
                <span class="domain-group-tag">SECTION_04</span>
                <h3 class="domain-group-title">Technical Expertise</h3>
              </div>
              <div class="index-expertise-box">
                <div class="expertise-row">
                  <strong>AI/ML &amp; Generative AI:</strong>
                  <span>LLMs, RAG, Qdrant/ChromaDB Vector Stores, PyTorch, YOLOv8 Computer Vision, Ollama Local Inference</span>
                </div>
                <div class="expertise-row">
                  <strong>Full-Stack Development:</strong>
                  <span>React, TypeScript, Node.js, Express, Python (FastAPI/Django), REST APIs, WebSockets</span>
                </div>
                <div class="expertise-row">
                  <strong>Desktop &amp; Mobile:</strong>
                  <span>Embedded SQLite, Native Windows Utilities, Capacitor, Flutter &amp; Dart Cross-Platform</span>
                </div>
                <div class="expertise-row">
                  <strong>Automation &amp; DevOps:</strong>
                  <span>Playwright Headless Ingestion, Docker, Git, CI/CD Pipeline Automation, AST Validation</span>
                </div>
                <div style="margin-top: 10px;">
                  <a href="/about" class="btn-explore-project" data-link style="font-size: 11px;">
                    <span>VIEW COMPLETE ENGINEERING PROFILE</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIndexItem(p) {
  if (!p) return '';
  return `
    <article class="index-project-item" data-category="${p.filterCategory}">
      <a href="/projects/${p.slug}" class="index-item-link" data-link>
        <span class="index-item-num">${p.number}.</span>
        <div class="index-item-content">
          <div class="index-item-top">
            <h4 class="index-item-title">${p.title} ↗</h4>
            <span class="index-item-badge">[${p.category.split('/')[0].trim().toUpperCase()}]</span>
          </div>
          <p class="index-item-subtitle">${p.subtitle}</p>
          <p class="index-item-desc">${p.statement}</p>
        </div>
      </a>
      ${p.liveUrl ? `
        <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="index-item-outbound" title="Open live project">
          <span>${p.liveUrlLabel}</span>
        </a>
      ` : ''}
    </article>
  `;
}
