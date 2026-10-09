export function renderExperienceView() {
  return `
    <section class="editorial-sheet" id="sheet-experience-page" aria-label="Experience Page">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/" data-link>ENGINEERING</a>
          <span>/</span>
          <span style="color: #111;">CHRONOLOGY</span>
          <span>/</span>
          <span>PROFESSIONAL LOG &amp; MILESTONES</span>
        </div>
        <div class="sheet-num-tag">SHEET NO. 05 / 07 — EXPERIENCE</div>
      </div>

      <div class="experience-section-block">
        <h1 class="index-main-title" style="margin-bottom: 12px;">Experience &amp; Chronology</h1>
        <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 32px; max-width: 640px;">
          Chronological engineering milestones, verified production systems, and hands-on software development across AI applications, industrial platforms, and interactive software.
        </p>

        <div class="timeline-editorial-list">
          <!-- Role 1: Excelerate -->
          <div class="timeline-row">
            <span class="timeline-year-tag">JAN 2026 — MAR 2026</span>
            <div class="timeline-content">
              <h3 class="timeline-job-title">Prompt Engineering Research &amp; Integration Intern</h3>
              <span class="timeline-company">EXCELERATE // DUBAI (REMOTE)</span>
              <p class="timeline-narrative">
                Designed and optimized advanced prompts for Large Language Models (LLMs), including ChatGPT and Google Gemini, improving response accuracy, contextual relevance, and consistency across content generation, automation, and technical problem-solving tasks.
              </p>
              <p class="timeline-narrative" style="margin-top: 8px;">
                Researched and applied prompt engineering strategies through iterative testing and refinement, utilizing NLP techniques and structured prompts to improve response coherence, precision, and task completion. Developed robust prompt workflows for AI-driven applications, including chatbot interactions and automation pipelines, while collaborating with cross-functional teams to integrate AI capabilities into practical applications.
              </p>
              <div style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap;">
                <span class="case-stack-pill">ChatGPT</span>
                <span class="case-stack-pill">Google Gemini</span>
                <span class="case-stack-pill">Prompt Engineering</span>
                <span class="case-stack-pill">NLP Techniques</span>
                <span class="case-stack-pill">AI Automation Pipelines</span>
                <span class="case-stack-pill">LLM Optimization</span>
              </div>
            </div>
            <span class="timeline-badge-tag">INTERNSHIP</span>
          </div>

          <!-- Role 2: Mectto -->
          <div class="timeline-row">
            <span class="timeline-year-tag">2026 — PRESENT</span>
            <div class="timeline-content">
              <h3 class="timeline-job-title">Software Developer (Freelance)</h3>
              <span class="timeline-company">MECTTO // INDUSTRIAL AUTOMATION &amp; ROBOTICS (REMOTE)</span>
              <p class="timeline-narrative">
                Architecting and developing digital web platforms and equipment specification catalogs for Mectto automation &amp; robotics solutions. Engineered interactive machinery solution finders, multi-parameter industrial filtration, and automated quotation pipelines for manufacturing clients across automotive and pharma sectors.
              </p>
              <div style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap;">
                <span class="case-stack-pill">JavaScript (ES6+)</span>
                <span class="case-stack-pill">Web Architecture</span>
                <span class="case-stack-pill">Responsive UI</span>
                <span class="case-stack-pill">Industrial Systems</span>
                <span class="case-stack-pill">Freelance Remote</span>
              </div>
            </div>
            <span class="timeline-badge-tag">ACTIVE ROLE</span>
          </div>

        </div>
      </div>

      <!-- Verified Technical Credentials / Foundations -->
      <div style="margin-top: 48px; border-top: 1px solid var(--border-subtle); padding-top: 36px;">
        <h2 class="index-main-title" style="margin-bottom: 8px;">Technical Foundations &amp; Specializations</h2>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 24px;">
          Continuous coursework and specialized certifications in neural networks, applied machine learning, and full-stack systems.
        </p>

        <div class="archive-cards-grid">
          <div class="archive-card">
            <div class="archive-card-meta">
              <span>SPECIALIZATION</span>
              <span>2025</span>
            </div>
            <h3 class="archive-card-title">Deep Learning &amp; Neural Networks</h3>
            <p class="archive-card-desc">DeepLearning.AI // Convolutional networks, RNNs, transformer attention mechanisms, optimization algorithms, and PyTorch implementations.</p>
            <div class="archive-card-tech">FOCUS: PYTORCH / TRANSFORMERS / CNNS</div>
          </div>

          <div class="archive-card">
            <div class="archive-card-meta">
              <span>SPECIALIZATION</span>
              <span>2025</span>
            </div>
            <h3 class="archive-card-title">Generative AI with Large Language Models</h3>
            <p class="archive-card-desc">AWS &amp; DeepLearning.AI // Instruction fine-tuning, PEFT/LoRA parameter-efficient training, RLHF alignment, and RAG architectural pipelines.</p>
            <div class="archive-card-tech">FOCUS: LLMS / PEFT / RLHF / RAG</div>
          </div>

          <div class="archive-card">
            <div class="archive-card-meta">
              <span>FOUNDATION</span>
              <span>2024</span>
            </div>
            <h3 class="archive-card-title">Full Stack Web Development</h3>
            <p class="archive-card-desc">Meta // Modern React application architecture, state management, REST microservices, relational databases, and multi-tier deployment.</p>
            <div class="archive-card-tech">FOCUS: REACT / NODE.JS / REST APIS</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
