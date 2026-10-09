import { getProjectBySlug, PROJECTS_DATA } from '../projects-data.js';

export function renderProjectDetailView(slug) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return `
      <section class="editorial-sheet" id="sheet-not-found">
        <div class="sheet-top-strip">
          <span>PROJECT CASE STUDY NOT FOUND</span>
          <span class="sheet-num-tag">ERROR 404</span>
        </div>
        <div style="padding: 60px 0; text-align: center;">
          <h1 class="index-main-title">Specification Not Found</h1>
          <p style="font-size: 14px; color: var(--text-secondary); margin: 16px auto 32px auto; max-width: 480px;">
            The requested project identifier <code>${slug}</code> does not correspond to an active engineering document.
          </p>
          <a href="/projects" class="btn-cover-primary" data-link>RETURN TO PROJECT INDEX ↗</a>
        </div>
      </section>
    `;
  }

  const nextProject = PROJECTS_DATA.find(p => p.id === project.nextProjectId) || PROJECTS_DATA[0];

  return `
    <article class="editorial-sheet project-case-sheet" id="project-${project.slug}" aria-label="Case Study: ${project.title}">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/projects" data-link>PROJECTS</a>
          <span>/</span>
          <span style="color: #111;">SPEC NO. ${project.number}</span>
          <span>/</span>
          <span>${project.category.toUpperCase()}</span>
        </div>
        <div class="sheet-num-tag">
          SPECIFICATION NO. ${project.number} // PROPER COMPLETE VIEW
        </div>
      </div>

      <!-- Main Composition: Clean Single Showcase Image (Proper Complete View) -->
      ${project.layoutType === 'layout-a' ? renderLayoutA(project) : renderLayoutB(project)}

      <!-- Detailed Case Study Technical Body -->
      <div class="case-body-deep-dive">
        <div class="case-deep-dive-grid">
          <!-- Left Column: Executive Narrative & Challenge Analysis -->
          <div class="case-dive-left">
            <h3 class="case-dive-section-title">01 // Architectural Breakdown &amp; Objectives</h3>
            <p class="case-dive-paragraph">${project.overview}</p>

            ${project.sections.map(sec => `
              <div class="case-dive-subsection">
                <h4 class="case-dive-subtitle">${sec.heading}</h4>
                <p class="case-dive-paragraph">${sec.content}</p>
              </div>
            `).join('')}

            <div class="case-dive-subsection">
              <h4 class="case-dive-subtitle">Key Features &amp; System Capabilities</h4>
              <ul class="case-dive-bullets">
                ${project.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Right Column: Technology Matrix & Verified Specifications -->
          <div class="case-dive-right">
            <h3 class="case-dive-section-title">02 // Technical Specifications</h3>
            
            <div class="case-meta-table">
              <div class="case-table-row">
                <span class="case-table-key">PROJECT</span>
                <span class="case-table-val">${project.title}</span>
              </div>
              <div class="case-table-row">
                <span class="case-table-key">IDENTIFIER</span>
                <span class="case-table-val">SPEC NO. ${project.number}</span>
              </div>
              <div class="case-table-row">
                <span class="case-table-key">DOMAIN</span>
                <span class="case-table-val">${project.category}</span>
              </div>
              <div class="case-table-row">
                <span class="case-table-key">ENGINEERING ROLE</span>
                <span class="case-table-val">${project.role}</span>
              </div>
              <div class="case-table-row">
                <span class="case-table-key">LIVE URL</span>
                <span class="case-table-val">
                  ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">${project.liveUrl} ↗</a>` : 'INTERNAL RESEARCH / PRIVATE WORK'}
                </span>
              </div>
              ${project.githubUrl ? `
                <div class="case-table-row">
                  <span class="case-table-key">REPOSITORY</span>
                  <span class="case-table-val">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">${project.githubUrl.replace('https://github.com/', '')} ↗</a>
                  </span>
                </div>
              ` : ''}
            </div>

            <!-- Technology Stack Matrix -->
            <div style="margin-top: 24px;">
              <span class="case-table-key" style="display: block; margin-bottom: 10px;">VERIFIED TECH STACK</span>
              <div class="case-stack-pills">
                ${project.stack.map(s => `<span class="case-stack-pill">${s}</span>`).join('')}
              </div>
            </div>

            <!-- Outbound CTA Box -->
            <div class="case-action-card">
              <span class="case-action-tag">ACTION</span>
              <div class="case-action-body">
                ${project.liveUrl ? `
                  <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-cover-primary" style="display: block; text-align: center;">
                    ${project.liveUrlLabel}
                  </a>
                ` : `
                  <div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); text-transform: uppercase;">
                    PRIVATE DEPLOYMENT // TECHNICAL SPECIFICATION PRESERVED
                  </div>
                `}
                <a href="/projects" class="btn-cover-secondary" data-link style="display: block; text-align: center; margin-top: 8px;">
                  BACK TO ALL PROJECTS ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Project Typographic Banner -->
      <div class="next-project-banner">
        <div class="next-banner-meta">
          <span>PROCEED TO NEXT SPECIFICATION</span>
          <span>SPEC NO. ${nextProject.number}</span>
        </div>
        <a href="/projects/${nextProject.slug}" class="next-banner-link" data-link>
          <span class="next-banner-title">${nextProject.title}</span>
          <span class="next-banner-arrow">→</span>
        </a>
        <div class="next-banner-subtitle">${nextProject.subtitle} // ${nextProject.category}</div>
      </div>
    </article>
  `;
}

// -------------------------------------------------------------
// LAYOUT A: Typographic Split Header + Single Complete View Showcase
// (NO multi-images, NO cropped thumbs — single uncropped full view)
// -------------------------------------------------------------
function renderLayoutA(project) {
  const liveTarget = project.liveUrl ? `href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"` : `href="/projects/${project.slug}" data-link`;
  const liveTitle = project.liveUrl ? `title="Click to open live site: ${project.liveUrl}"` : `title="${project.title}"`;

  return `
    <div class="p1-header-strip">
      <span class="p1-project-tag">Project_${project.number}</span>
      <span class="p1-project-sub">${project.title.toUpperCase()} // ${project.subtitle.toUpperCase()}</span>
    </div>

    <!-- Editorial Header Split -->
    <div class="p1-split-header">
      <div class="p1-split-left">
        <h1 class="p1-title">${project.title}</h1>
        <p class="p1-project-subhead">${project.subtitle}</p>
        <p class="p1-desc">${project.statement}</p>
        
        <ul class="p1-details-list">
          ${project.bullets.slice(0, 4).map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>

      <div class="p1-split-right">
        <div class="p1-meta-block">
          ${Object.entries(project.metadata).slice(0, 4).map(([k, v]) => `
            <div><strong>${k}:</strong> ${v}</div>
          `).join('')}
        </div>

        <div class="p1-action-row" style="margin-top: 20px;">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-cover-primary">
              <span>${project.liveUrlLabel}</span>
            </a>
          ` : `
            <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); text-transform: uppercase;">
              PRIVATE REPOSITORY
            </span>
          `}
          <a href="/projects" class="btn-cover-secondary" data-link>
            <span>PROJECT INDEX ↗</span>
          </a>
        </div>
      </div>
    </div>

    <!-- SINGLE PROPER COMPLETE VIEW SHOWCASE (No multi-images, uncropped) -->
    <div class="project-single-showcase">
      <div class="showcase-browser-frame">
        <div class="showcase-browser-header">
          <div class="browser-header-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="browser-url-pill">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>${project.liveUrl || `specification://${project.slug}`}</span>
          </div>
          <span style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 9px; font-weight: 700;">
            ${project.liveUrl ? 'ONLINE // VERIFIED' : 'SECURE INTERNAL'}
          </span>
        </div>

        <a ${liveTarget} ${liveTitle} class="showcase-img-link" aria-label="Open live application: ${project.title}">
          <img 
            src="${project.heroImage}" 
            alt="${project.title} Complete Live Interface Overview" 
            class="showcase-complete-img"
            loading="eager"
          >
          ${project.liveUrl ? `<span class="live-img-badge">CLICK TO VISIT LIVE WEBSITE ↗</span>` : ''}
        </a>
      </div>
      <div class="arch-caption" style="margin-top: 10px;">${project.heroImageCaption}</div>
    </div>
  `;
}

// -------------------------------------------------------------
// LAYOUT B: Editorial Strip Header + Single Complete View Showcase
// (NO multi-images, NO cropped thumbs — single uncropped full view)
// -------------------------------------------------------------
function renderLayoutB(project) {
  const liveTarget = project.liveUrl ? `href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"` : `href="/projects/${project.slug}" data-link`;
  const liveTitle = project.liveUrl ? `title="Click to open live site: ${project.liveUrl}"` : `title="${project.title}"`;

  return `
    <div class="p2-header-strip">
      <span class="p1-project-tag">Project_${project.number}</span>
      <span class="p1-project-sub">${project.title.toUpperCase()} // ${project.subtitle.toUpperCase()}</span>
    </div>

    <!-- Architectural Banner Header -->
    <div class="p2-banner-header">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
        <div>
          <h1 class="p1-title">${project.title}</h1>
          <p class="p1-project-subhead">${project.subtitle}</p>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-cover-primary">
              <span>${project.liveUrlLabel}</span>
            </a>
          ` : ''}
          <a href="/projects" class="btn-cover-secondary" data-link>
            <span>INDEX ↗</span>
          </a>
        </div>
      </div>

      <p class="p2-desc" style="max-width: 960px; margin-top: 16px;">${project.statement}</p>
      
      <div class="p2-quick-specs-bar">
        ${Object.entries(project.metadata).slice(0, 4).map(([k, v]) => `
          <div class="quick-spec-item">
            <span class="quick-spec-k">${k}:</span>
            <span class="quick-spec-v">${v}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- SINGLE PROPER COMPLETE VIEW SHOWCASE (No multi-images, uncropped) -->
    <div class="project-single-showcase">
      <div class="showcase-browser-frame">
        <div class="showcase-browser-header">
          <div class="browser-header-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="browser-url-pill">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>${project.liveUrl || `specification://${project.slug}`}</span>
          </div>
          <span style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 9px; font-weight: 700;">
            ${project.liveUrl ? 'ONLINE // PRODUCTION' : 'INTERNAL SPECIFICATION'}
          </span>
        </div>

        <a ${liveTarget} ${liveTitle} class="showcase-img-link" aria-label="Open live application: ${project.title}">
          <img 
            src="${project.heroImage}" 
            alt="${project.title} Complete Interface Overview" 
            class="showcase-complete-img"
            loading="eager"
          >
          ${project.liveUrl ? `<span class="live-img-badge">CLICK TO VISIT LIVE WEBSITE ↗</span>` : ''}
        </a>
      </div>
      <div class="arch-caption" style="margin-top: 10px;">${project.heroImageCaption}</div>
    </div>
  `;
}
