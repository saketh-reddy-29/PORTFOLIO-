export function renderNotFoundView() {
  return `
    <section class="editorial-sheet" id="sheet-not-found" aria-label="Not Found Sheet">
      <!-- Sheet Top Metadata Strip -->
      <div class="sheet-top-strip">
        <div class="sheet-nav-items">
          <a href="/" data-link>ENGINEERING</a>
          <span>/</span>
          <span>ROUTING EXCEPTION</span>
        </div>
        <div class="sheet-num-tag">STATUS 404 // ROUTE NOT RECOGNIZED</div>
      </div>

      <div style="padding: 64px 0; text-align: center;">
        <span style="font-family: var(--font-mono); font-size: 13px; color: var(--text-muted); letter-spacing: 0.14em; text-transform: uppercase;">
          DOCUMENTATION INDEX ERROR
        </span>
        <h1 class="index-main-title" style="margin-top: 10px; font-size: clamp(2.8rem, 5vw, 4.2rem);">
          404: Route Not Found
        </h1>
        <p style="font-size: 14px; color: var(--text-secondary); margin: 16px auto 36px auto; max-width: 520px; line-height: 1.65;">
          The requested URL path does not correspond to an existing project specification or editorial portfolio sheet.
        </p>

        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <a href="/" class="btn-cover-primary" data-link>RETURN TO COVER (HOME) ↗</a>
          <a href="/projects" class="btn-cover-secondary" data-link>OPEN PROJECT INDEX ↗</a>
        </div>
      </div>
    </section>
  `;
}
