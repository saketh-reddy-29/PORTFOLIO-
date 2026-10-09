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
          <span>COLLABORATION &amp; INQUIRIES</span>
        </div>
        <div class="sheet-num-tag">SHEET NO. 06 / 07 — CONTACT</div>
      </div>

      <h1 class="contact-headline">
        LET’S BUILD<br>
        SOMETHING<br>
        INTELLIGENT.
      </h1>

      <div class="contact-layout-grid">
        <!-- Left: Direct Channels & Verified Links -->
        <div class="contact-channels-col">
          <p class="contact-intro-text">
            Available for AI/ML engineering, generative AI system design, enterprise full-stack development, and technical consultation.
          </p>

          <div class="contact-link-row">
            <!-- Direct Email -->
            <div class="contact-direct-item">
              <div>
                <span class="contact-label-tag">PRIMARY EMAIL ADDRESS</span>
                <div class="contact-value-text" id="email-address-text">sakethgoturi93@gmail.com</div>
              </div>
              <button id="btn-copy-email" class="btn-copy-inline" title="Copy email address to clipboard">
                COPY
              </button>
            </div>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/saketh-reddy-goturi-a8660b319/" target="_blank" rel="noopener noreferrer" class="contact-direct-item">
              <div>
                <span class="contact-label-tag">LINKEDIN PROFESSIONAL PROFILE</span>
                <div class="contact-value-text">linkedin.com/in/saketh-reddy-goturi-a8660b319 ↗</div>
              </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/saketh-reddy-29" target="_blank" rel="noopener noreferrer" class="contact-direct-item">
              <div>
                <span class="contact-label-tag">GITHUB CODE REPOSITORY</span>
                <div class="contact-value-text">github.com/saketh-reddy-29 ↗</div>
              </div>
            </a>

            <!-- Resume Specification -->
            <div class="contact-direct-item" style="cursor: pointer;" id="trigger-resume-item">
              <div>
                <span class="contact-label-tag">CURRICULUM VITAE SPECIFICATION</span>
                <div class="contact-value-text">View Resume Specification ↗</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Architectural Minimalist Inquiry Form -->
        <div class="contact-form-col">
          <form id="contact-form" class="arch-form">
            <div class="form-group">
              <label for="contact-name" class="form-label">NAME / ORGANIZATION</label>
              <input type="text" id="contact-name" name="name" class="form-input" placeholder="e.g. Elena Vance" required>
            </div>

            <div class="form-group">
              <label for="contact-email" class="form-label">EMAIL ADDRESS</label>
              <input type="email" id="contact-email" name="email" class="form-input" placeholder="elena@organization.com" required>
            </div>

            <div class="form-group">
              <label for="contact-category" class="form-label">PROJECT SPECIFICATION</label>
              <select id="contact-category" name="category" class="form-select">
                <option value="Generative AI & LLM Systems">Generative AI &amp; LLM Systems</option>
                <option value="Industrial Web & Automation Platforms">Industrial Web &amp; Automation Platforms</option>
                <option value="Computer Vision & Edge AI">Computer Vision &amp; Edge AI</option>
                <option value="Interactive Software & Simulation">Interactive Software &amp; Simulation</option>
                <option value="Technical Consultation">Technical Consultation</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label">MESSAGE / BRIEF</label>
              <textarea id="contact-message" name="message" class="form-textarea" rows="4" placeholder="Briefly describe your objectives, architecture requirements, or project scope..." required></textarea>
            </div>

            <button type="submit" class="btn-form-submit">
              <span>TRANSMIT MESSAGE</span>
              <span>↗</span>
            </button>

            <div id="form-feedback" class="form-feedback" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}
