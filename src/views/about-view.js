export function renderAboutView() {
  return `
    <section class="editorial-sheet" id="sheet-about-page" aria-label="About Page">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/" data-link>ENGINEERING</a>
          <span>/</span>
          <span style="color: #111;">PROFILE</span>
          <span>/</span>
          <span>BIOGRAPHY &amp; TECHNICAL MATRIX</span>
        </div>
        <div class="sheet-num-tag">SHEET NO. 04 / 07 — ABOUT</div>
      </div>

      <div class="about-stack-grid">
        <!-- Left: Concise Professional Biography -->
        <div class="about-col">
          <h1 class="index-main-title" style="margin-bottom: 24px;">About Me</h1>

          <p class="about-lead-quote">
            “Engineering software where rigorous systems architecture meets applied machine intelligence.”
          </p>

          <p class="about-bio-body">
            I am <strong>Saketh Reddy</strong>, an <strong>AI/ML Engineer and Software Developer</strong> focused on building real-world software systems. Rather than treating artificial intelligence as a superficial wrapper, my engineering approach emphasizes end-to-end reliability: grounding large language models through deterministic retrieval pipelines (RAG), deploying edge computer vision models, and constructing robust full-stack web and mobile platforms.
          </p>

          <p class="about-bio-body">
            My work spans industrial manufacturing portals (TechBott, Mectto, Coastal Fabtech), interactive stochastic game engines (Crex Arena), offline workstation utilities (Gloster Desktop), and automated developer tools (AI Website Builder). I prioritize clean architecture, strict data validation, verifiable performance metrics, and responsive interfaces designed with editorial restraint.
          </p>

          <div class="philosophy-strip">
            <div class="philosophy-strip-label">CORE ENGINEERING PRINCIPLE</div>
            <div class="philosophy-strip-text">Build. Automate. Learn. Improve.</div>
          </div>

          <div style="display: flex; gap: 14px; margin-top: 14px; flex-wrap: wrap;">
            <a href="/experience" class="btn-cover-primary" data-link>VIEW PROFESSIONAL CHRONOLOGY ↗</a>
            <a href="/contact" class="btn-cover-secondary" data-link>INITIATE CONTACT ↗</a>
          </div>
        </div>

        <!-- Right: Structured Editorial Technical Matrix (No rounded badges) -->
        <div class="about-col">
          <h2 class="index-main-title" style="margin-bottom: 24px;">Technical Expertise</h2>

          <div class="stack-matrix-grid">
            <!-- Programming Languages -->
            <div class="stack-category-row">
              <span class="stack-cat-title">Programming</span>
              <span class="stack-cat-items">Python, JavaScript (ES6+), TypeScript, SQL, Dart</span>
            </div>

            <!-- AI / ML -->
            <div class="stack-category-row">
              <span class="stack-cat-title">AI / Machine Learning</span>
              <span class="stack-cat-items">Machine Learning, Deep Learning, NLP, Model Evaluation, Computer Vision (YOLOv8, OpenCV, RTSP Stream Processing)</span>
            </div>

            <!-- Generative AI & LLMs -->
            <div class="stack-category-row">
              <span class="stack-cat-title">Generative AI</span>
              <span class="stack-cat-items">LLMs (Gemini, Claude, GPT), Retrieval-Augmented Generation (RAG), Vector Embeddings, Qdrant, ChromaDB, Prompt Engineering, Autonomous Multi-Agent Workflows</span>
            </div>

            <!-- Backend Architecture -->
            <div class="stack-category-row">
              <span class="stack-cat-title">Backend Architecture</span>
              <span class="stack-cat-items">Node.js, Express, Python APIs (FastAPI / Flask / Django), Microservices, WebSocket Real-Time Feeds, AST Validation</span>
            </div>

            <!-- Frontend & Mobile -->
            <div class="stack-category-row">
              <span class="stack-cat-title">Frontend &amp; Mobile</span>
              <span class="stack-cat-items">React, TypeScript, Vite, Capacitor (iOS/Android Native Shell), Flutter &amp; Dart, Semantic HTML5, CSS Grid / Flexbox</span>
            </div>

            <!-- Databases & Storage -->
            <div class="stack-category-row">
              <span class="stack-cat-title">Databases</span>
              <span class="stack-cat-items">Microsoft SQL Server, MySQL, SQLite (Offline-First Embedded), Prisma ORM, PostgreSQL</span>
            </div>

            <!-- Tools & DevOps -->
            <div class="stack-category-row">
              <span class="stack-cat-title">Tools &amp; DevOps</span>
              <span class="stack-cat-items">Git, GitHub Actions, Playwright (Headless Browser Automation), Docker, Ollama (Local Quantized Inference), Web Workers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
