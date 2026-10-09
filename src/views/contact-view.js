export function renderContactView() {
  return `
    <section class="editorial-sheet" id="sheet-contact-page" aria-label="Contact Page">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/" data-link>ENGINEERING</a>
          <span>/</span>
          <span style="color: #111;">COMMUNICATION</span>
          <span>/</span>
          <span>DIRECT TRANSMISSION CONSOLE</span>
        </div>
        <div class="sheet-num-tag">SHEET NO. 06 / 07 — CONTACT</div>
      </div>

      <!-- Live Telemetry Status Bar -->
      <div class="contact-telemetry-bar">
        <div class="telemetry-live-indicator">
          <span class="telemetry-pulse-dot"></span>
          <span class="telemetry-label">INBOX ROUTING: DIRECT TO SAKETHGOTURI93@GMAIL.COM</span>
        </div>
        <div class="telemetry-clock-tag">
          <span class="telemetry-sub-k">ENGINEER LOCAL TIME:</span>
          <span id="contact-live-clock" class="telemetry-sub-v">IST (UTC +5:30)</span>
        </div>
      </div>

      <!-- Main Headline Block -->
      <div class="contact-hero-block">
        <h1 class="contact-headline">
          LET’S BUILD<br>
          SOMETHING<br>
          INTELLIGENT.
        </h1>
        <p class="contact-intro-lead">
          Direct communication pipeline for AI/ML engineering, generative AI system design, enterprise web platforms, and specialized technical consultation. Every transmission lands directly in my personal inbox.
        </p>
      </div>

      <div class="contact-layout-grid">
        <!-- Left: Verified Direct Communication Channels -->
        <div class="contact-channels-col">
          <div class="contact-section-label">01 // DIRECT CHANNELS &amp; VERIFIED HANDLES</div>

          <div class="contact-link-row">
            <!-- Direct Primary Email -->
            <div class="contact-direct-card">
              <div class="direct-card-meta">
                <span class="contact-label-tag">PRIMARY INBOX (VERIFIED)</span>
                <span class="contact-tag-badge">DELIVERS INSTANTLY</span>
              </div>
              <div class="contact-value-text" id="email-address-text">sakethgoturi93@gmail.com</div>
              <div class="direct-card-actions">
                <button id="btn-copy-email" class="btn-direct-action" title="Copy email address to clipboard">
                  <span>COPY ADDRESS</span>
                </button>
                <a href="mailto:sakethgoturi93@gmail.com?subject=Project%20Inquiry%20-%20Saketh%20Reddy" class="btn-direct-action btn-direct-primary">
                  <span>OPEN MAIL APP ↗</span>
                </a>
              </div>
            </div>

            <!-- LinkedIn Profile -->
            <a href="https://www.linkedin.com/in/saketh-reddy-goturi-a8660b319/" target="_blank" rel="noopener noreferrer" class="contact-direct-card contact-card-clickable">
              <div class="direct-card-meta">
                <span class="contact-label-tag">LINKEDIN PROFESSIONAL NETWORK</span>
                <span class="contact-tag-badge">ACTIVE</span>
              </div>
              <div class="contact-value-text">linkedin.com/in/saketh-reddy-goturi-a8660b319 ↗</div>
              <p class="direct-card-desc">Professional updates, engineering endorsements, and career chronology.</p>
            </a>

            <!-- GitHub Profile -->
            <a href="https://github.com/saketh-reddy-29" target="_blank" rel="noopener noreferrer" class="contact-direct-card contact-card-clickable">
              <div class="direct-card-meta">
                <span class="contact-label-tag">GITHUB REPOSITORY DIRECTORY</span>
                <span class="contact-tag-badge">CODE BASE</span>
              </div>
              <div class="contact-value-text">github.com/saketh-reddy-29 ↗</div>
              <p class="direct-card-desc">Open-source software, full-stack architectures, and experimental models.</p>
            </a>

            <!-- Resume Trigger -->
            <div class="contact-direct-card contact-card-clickable" id="trigger-resume-item" style="cursor: pointer;">
              <div class="direct-card-meta">
                <span class="contact-label-tag">CURRICULUM VITAE</span>
                <span class="contact-tag-badge">SPECIFICATION</span>
              </div>
              <div class="contact-value-text">Launch Resume Specification Modal ↗</div>
              <p class="direct-card-desc">Verified credentials, competencies matrix, and engineering experience.</p>
            </div>

            <!-- SLA & Location Assurance Box -->
            <div class="contact-sla-box">
              <div class="sla-row">
                <span class="sla-k">RESPONSE GUARANTEE:</span>
                <span class="sla-v">Within 24 Hours</span>
              </div>
              <div class="sla-row">
                <span class="sla-k">ENGINEER LOCATION:</span>
                <span class="sla-v">Hyderabad, India // Available Globally (Remote)</span>
              </div>
              <div class="sla-row">
                <span class="sla-k">COMMUNICATION PROTOCOL:</span>
                <span class="sla-v">Direct Gmail SMTP // TLS 1.3 Encryption</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Modern Architectural Transmission Console -->
        <div class="contact-form-col">
          <div class="contact-section-label">02 // DISPATCH ENCRYPTED INQUIRY</div>

          <div class="contact-console-container">
            <div class="console-header-strip">
              <div class="console-header-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="console-title-tag">TRANSMISSION ENVELOPE // SMTP DISPATCH</span>
              <span class="console-status-live">READY</span>
            </div>

            <form id="contact-form" class="arch-form console-form-body">
              <input type="hidden" id="contact-category-input" name="category" value="Generative AI & LLM Systems">
              <input type="hidden" id="contact-timeline-input" name="timeline" value="Immediate (< 2 Weeks)">

              <!-- Interactive Specification Pills -->
              <div class="form-group">
                <label class="form-label">PROJECT SPECIFICATION</label>
                <div class="interactive-pills-row" id="category-pills">
                  <button type="button" class="spec-pill active" data-value="Generative AI & LLM Systems">GenAI &amp; LLMs</button>
                  <button type="button" class="spec-pill" data-value="Industrial Web & Automation Platforms">Industrial Web</button>
                  <button type="button" class="spec-pill" data-value="Computer Vision & Edge AI">Computer Vision</button>
                  <button type="button" class="spec-pill" data-value="Full-Stack Web & Mobile App">Full-Stack / Mobile</button>
                  <button type="button" class="spec-pill" data-value="Technical Architecture Consultation">Consultation</button>
                </div>
              </div>

              <!-- Interactive Timeline Horizon Pills -->
              <div class="form-group">
                <label class="form-label">DELIVERY HORIZON</label>
                <div class="interactive-pills-row" id="timeline-pills">
                  <button type="button" class="spec-pill active" data-value="Immediate (< 2 Weeks)">Immediate (&lt; 2 Wks)</button>
                  <button type="button" class="spec-pill" data-value="1 — 2 Months">1 — 2 Months</button>
                  <button type="button" class="spec-pill" data-value="Long-Term Engineering">Long-Term</button>
                  <button type="button" class="spec-pill" data-value="Flexible Scope">Flexible</button>
                </div>
              </div>

              <!-- Two Column Name & Email -->
              <div class="form-dual-row">
                <div class="form-group" style="flex: 1;">
                  <label for="contact-name" class="form-label">YOUR NAME / ORGANIZATION *</label>
                  <input type="text" id="contact-name" name="name" class="form-input" placeholder="e.g. Alex Mercer" required>
                </div>

                <div class="form-group" style="flex: 1;">
                  <label for="contact-email" class="form-label">YOUR EMAIL ADDRESS *</label>
                  <input type="email" id="contact-email" name="email" class="form-input" placeholder="alex@company.com" required>
                </div>
              </div>

              <!-- Message Brief -->
              <div class="form-group">
                <label for="contact-message" class="form-label">PROJECT BRIEF &amp; OBJECTIVES *</label>
                <textarea id="contact-message" name="message" class="form-textarea" rows="4" placeholder="Detail your project objectives, systems architecture requirements, or inquiry..." required></textarea>
              </div>

              <!-- Live Transmission Console Progress Banner -->
              <div id="console-progress-box" class="console-progress-box" style="display: none;">
                <div class="progress-step-row" id="progress-step-1">
                  <span class="step-num">[01]</span>
                  <span class="step-txt">Validating input parameters and formatting payload...</span>
                </div>
                <div class="progress-step-row" id="progress-step-2">
                  <span class="step-num">[02]</span>
                  <span class="step-txt">Connecting to Gmail SMTP gateway (sakethgoturi93@gmail.com)...</span>
                </div>
                <div class="progress-step-row" id="progress-step-3">
                  <span class="step-num">[03]</span>
                  <span class="step-txt">Securing transmission and delivering message...</span>
                </div>
              </div>

              <!-- Action Submit Button -->
              <div class="form-actions-row">
                <button type="submit" id="btn-submit-inquiry" class="btn-form-submit">
                  <span id="btn-submit-label">TRANSMIT INQUIRY DIRECTLY</span>
                  <span>↗</span>
                </button>
                <span class="form-security-tag">DELIVERED TO SAKETHGOTURI93@GMAIL.COM</span>
              </div>

              <!-- Feedback Result Container -->
              <div id="form-feedback" class="form-feedback" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
