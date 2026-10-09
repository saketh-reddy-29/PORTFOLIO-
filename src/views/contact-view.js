export function renderContactView() {
  return `
    <section class="minimal-contact-section" id="sheet-contact-page" aria-label="Contact Page">
      <div class="contact-editorial-container">
        <!-- Hero Section -->
        <header class="contact-hero">
          <h1 class="contact-hero-heading">LET'S TALK.</h1>
          <p class="contact-hero-desc">
            Have a project in mind? I'm open to conversations about AI engineering, software development, industrial digital solutions, and interesting collaborations.
          </p>
        </header>

        <!-- Main Content Area: Two Column Layout -->
        <div class="contact-content-grid">
          <!-- Left Column: Contact Information -->
          <div class="contact-info-col">
            <h2 class="contact-col-heading">GET IN TOUCH</h2>

            <div class="contact-links-list">
              <!-- Email -->
              <div class="contact-link-item">
                <span class="contact-link-label">EMAIL</span>
                <a href="mailto:sakethgoturi93@gmail.com" class="contact-link-value">
                  <span>sakethgoturi93@gmail.com</span>
                  <span class="contact-link-arrow">↗</span>
                </a>
              </div>

              <!-- LinkedIn -->
              <div class="contact-link-item">
                <span class="contact-link-label">LINKEDIN</span>
                <a href="https://www.linkedin.com/in/saketh-reddy-goturi-a8660b319/" target="_blank" rel="noopener noreferrer" class="contact-link-value">
                  <span>linkedin.com/in/saketh-reddy-goturi-a8660b319</span>
                  <span class="contact-link-arrow">↗</span>
                </a>
              </div>

              <!-- GitHub -->
              <div class="contact-link-item">
                <span class="contact-link-label">GITHUB</span>
                <a href="https://github.com/saketh-reddy-29" target="_blank" rel="noopener noreferrer" class="contact-link-value">
                  <span>github.com/saketh-reddy-29</span>
                  <span class="contact-link-arrow">↗</span>
                </a>
              </div>
            </div>

            <p class="contact-availability">
              Based in Hyderabad, India · Available for remote collaboration.
            </p>
          </div>

          <!-- Right Column: Project Inquiry Form -->
          <div class="contact-form-col">
            <h2 class="contact-col-heading">HAVE A PROJECT IN MIND?</h2>
            <p class="contact-form-subtext">Tell me a little about what you're building.</p>

            <form id="contact-form" class="contact-inquiry-form" novalidate>
              <!-- Name -->
              <div class="form-field">
                <label for="contact-name" class="field-label">Name <span class="required-mark">*</span></label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  class="field-input" 
                  placeholder="Your name" 
                  required 
                  autocomplete="name"
                >
              </div>

              <!-- Email -->
              <div class="form-field">
                <label for="contact-email" class="field-label">Email <span class="required-mark">*</span></label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  class="field-input" 
                  placeholder="your.email@example.com" 
                  required 
                  autocomplete="email"
                >
              </div>

              <!-- Project Type Dropdown -->
              <div class="form-field">
                <label for="contact-project-type" class="field-label">Project type <span class="optional-mark">(optional)</span></label>
                <div class="select-wrapper">
                  <select id="contact-project-type" name="projectType" class="field-select">
                    <option value="" selected>Select a project type (optional)</option>
                    <option value="AI / Generative AI">AI / Generative AI</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Industrial Digital Solutions">Industrial Digital Solutions</option>
                    <option value="Desktop Application">Desktop Application</option>
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <!-- Project Description -->
              <div class="form-field">
                <label for="contact-message" class="field-label">Project description <span class="required-mark">*</span></label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  class="field-textarea" 
                  rows="5" 
                  placeholder="Tell me about your project, timeline, and goals..." 
                  required
                ></textarea>
              </div>

              <!-- Primary Submit Button -->
              <div class="form-submit-row">
                <button type="submit" id="btn-submit-inquiry" class="btn-send-inquiry">
                  <span id="btn-submit-label">SEND INQUIRY</span>
                  <span class="btn-arrow">↗</span>
                </button>
              </div>

              <!-- Status Feedback Message -->
              <div id="form-feedback" class="form-feedback" role="alert" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
