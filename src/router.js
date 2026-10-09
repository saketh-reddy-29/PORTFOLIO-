import { renderHomeView } from './views/home-view.js';
import { renderProjectsIndexView } from './views/projects-index-view.js';
import { renderProjectDetailView } from './views/project-detail-view.js';
import { renderAboutView } from './views/about-view.js';
import { renderExperienceView } from './views/experience-view.js';
import { renderContactView } from './views/contact-view.js';
import { renderNotFoundView } from './views/not-found-view.js';
import { getProjectBySlug } from './projects-data.js';

/* ===================================================================
   G. SAKETH REDDY — CLIENT-SIDE SPA ROUTER
   Supports clean URL paths (/about, /projects/techbott, etc.)
   with popstate browser history & dynamic document title updates.
   =================================================================== */

export class Router {
  constructor(appContainerId) {
    this.container = document.getElementById(appContainerId);
    this.init();
  }

  init() {
    // Intercept standard internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-link], a[href^="/"]');
      if (link && !link.hasAttribute('target') && !link.hasAttribute('download')) {
        const href = link.getAttribute('href');
        // Ignore external or hash-only links
        if (href && (href.startsWith('/') || href.startsWith('#/'))) {
          e.preventDefault();
          this.navigateTo(href);
        }
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.resolveRoute();
    });

    // Initial route resolution on load
    this.resolveRoute();
  }

  navigateTo(url) {
    // Normalize hash route if present
    let cleanUrl = url;
    if (cleanUrl.startsWith('#/')) {
      cleanUrl = cleanUrl.replace('#', '');
    }

    if (window.location.pathname !== cleanUrl) {
      window.history.pushState(null, null, cleanUrl);
    }
    this.resolveRoute();
  }

  resolveRoute() {
    let path = window.location.pathname;

    // Check if URL has hash fallback e.g. #/projects/techbott
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      path = window.location.hash.slice(1);
    }

    // Strip trailing slash except for root
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    let viewHtml = '';
    let pageTitle = 'G. Saketh Reddy | AI/ML Engineer & Software Developer';

    if (path === '' || path === '/') {
      viewHtml = renderHomeView();
      pageTitle = 'Saketh Reddy | Minimalist Architecture Portfolio — Building Intelligent Systems';
    } else if (path === '/about') {
      viewHtml = renderAboutView();
      pageTitle = 'About Saketh Reddy | AI/ML Engineer Profile & Technical Matrix';
    } else if (path === '/projects') {
      viewHtml = renderProjectsIndexView();
      pageTitle = 'Projects Index | G. Saketh Reddy — Verified Systems & Engineering Directory';
    } else if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '').trim();
      viewHtml = renderProjectDetailView(slug);
      const proj = getProjectBySlug(slug);
      if (proj) {
        pageTitle = `${proj.title} — ${proj.subtitle} | Saketh Reddy Portfolio`;
      } else {
        pageTitle = 'Project Not Found | Saketh Reddy Portfolio';
      }
    } else if (path === '/experience') {
      viewHtml = renderExperienceView();
      pageTitle = 'Experience & Chronology | Saketh Reddy — Engineering History';
    } else if (path === '/contact') {
      viewHtml = renderContactView();
      pageTitle = 'Contact | Saketh Reddy — Let\'s Build Something Intelligent';
    } else {
      viewHtml = renderNotFoundView();
      pageTitle = '404: Not Found | Saketh Reddy Portfolio';
    }

    // Render into page container
    if (this.container) {
      this.container.innerHTML = viewHtml;
      window.scrollTo(0, 0);
    }

    // Update document title
    document.title = pageTitle;

    // Update active navigation state
    this.updateActiveNav(path);

    // Re-bind interactive event handlers for current view
    this.onViewMounted(path);
  }

  updateActiveNav(currentPath) {
    const navLinks = document.querySelectorAll('.arch-nav-link, .mobile-drawer-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove('active');

      if (currentPath === '/' && (href === '/' || href === '#sheet-cover')) {
        link.classList.add('active');
      } else if (currentPath.startsWith('/projects') && (href === '/projects' || href === '#sheet-index')) {
        link.classList.add('active');
      } else if (currentPath === '/about' && (href === '/about' || href === '#sheet-about')) {
        link.classList.add('active');
      } else if (currentPath === '/experience' && (href === '/experience' || href === '#sheet-experience')) {
        link.classList.add('active');
      } else if (currentPath === '/contact' && (href === '/contact' || href === '#sheet-contact')) {
        link.classList.add('active');
      }
    });
  }

  onViewMounted(path) {
    // 1. If on /projects, bind the category filters
    if (path === '/projects') {
      this.bindProjectFilters();
    }

    // 2. Bind copy email button if present
    this.bindCopyEmail();

    // 3. Bind contact form submit if present
    this.bindContactForm();

    // 4. Close mobile drawer if open
    const drawer = document.getElementById('arch-mobile-drawer');
    if (drawer && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  bindProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.index-project-item');
    const groups = document.querySelectorAll('.index-domain-group');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedFilter = e.currentTarget.getAttribute('data-filter');

        // Toggle active button
        filterButtons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // Filter projects
        projectItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (selectedFilter === 'all' || itemCat === selectedFilter) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });

        // Hide domain groups if all children are hidden
        groups.forEach(grp => {
          const visibleChildren = grp.querySelectorAll('.index-project-item[style="display: flex;"]');
          const allChildren = grp.querySelectorAll('.index-project-item');
          if (allChildren.length > 0 && selectedFilter !== 'all') {
            const hasVisible = Array.from(allChildren).some(c => c.style.display !== 'none');
            grp.style.display = hasVisible ? 'block' : 'none';
          } else {
            grp.style.display = 'block';
          }
        });
      });
    });
  }

  bindCopyEmail() {
    const copyBtn = document.getElementById('btn-copy-email');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      const email = 'sakethgoturi93@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'COPIED';
        this.showToast('EMAIL COPIED: SAKETHGOTURI93@GMAIL.COM');
        setTimeout(() => {
          copyBtn.textContent = 'COPY';
        }, 2500);
      } catch {
        this.showToast('SAKETHGOTURI93@GMAIL.COM');
      }
    });
  }

  bindContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    // 1. Live IST Clock
    const clockEl = document.getElementById('contact-live-clock');
    if (clockEl) {
      const updateClock = () => {
        try {
          const now = new Date();
          const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
          const istTime = new Intl.DateTimeFormat('en-IN', options).format(now);
          clockEl.textContent = `IST ${istTime} (UTC +5:30)`;
        } catch {
          clockEl.textContent = `IST (UTC +5:30)`;
        }
      };
      updateClock();
      if (this.contactClockTimer) clearInterval(this.contactClockTimer);
      this.contactClockTimer = setInterval(updateClock, 1000);
    }

    // 2. Interactive Category Pills
    const catInput = document.getElementById('contact-category-input');
    const catPills = document.querySelectorAll('#category-pills .spec-pill');
    catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (catInput) catInput.value = pill.getAttribute('data-value');
      });
    });

    // 3. Interactive Timeline Pills
    const timeInput = document.getElementById('contact-timeline-input');
    const timePills = document.querySelectorAll('#timeline-pills .spec-pill');
    timePills.forEach(pill => {
      pill.addEventListener('click', () => {
        timePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (timeInput) timeInput.value = pill.getAttribute('data-value');
      });
    });

    // 4. Form Submission with real Gmail delivery
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-submit-inquiry');
      const submitLabel = document.getElementById('btn-submit-label');
      const progressBox = document.getElementById('console-progress-box');
      const step1 = document.getElementById('progress-step-1');
      const step2 = document.getElementById('progress-step-2');
      const step3 = document.getElementById('progress-step-3');

      const name = form.querySelector('[name="name"]')?.value.trim();
      const email = form.querySelector('[name="email"]')?.value.trim();
      const category = catInput?.value || 'General Software Engineering';
      const timeline = timeInput?.value || 'Immediate (< 2 Weeks)';
      const message = form.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'ERROR: ALL REQUIRED FIELDS MUST BE COMPLETED.';
        }
        return;
      }

      // UI Loading state
      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'TRANSMITTING TO GMAIL...';
      if (progressBox) progressBox.style.display = 'block';
      if (step1) step1.className = 'progress-step-row active';
      if (step2) step2.className = 'progress-step-row';
      if (step3) step3.className = 'progress-step-row';
      if (feedback) feedback.textContent = '';

      try {
        await new Promise(r => setTimeout(r, 400));
        if (step1) step1.className = 'progress-step-row completed';
        if (step2) step2.className = 'progress-step-row active';

        // Dispatch to backend API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, category, timeline, message })
        });

        if (step2) step2.className = 'progress-step-row completed';
        if (step3) step3.className = 'progress-step-row active';

        let result = {};
        try {
          result = await response.json();
        } catch {
          // Non-JSON or static host response
        }

        if (response.ok && result.success) {
          if (step3) step3.className = 'progress-step-row completed';
          form.reset();
          if (feedback) {
            feedback.className = 'form-feedback success';
            feedback.innerHTML = `✓ TRANSMISSION DELIVERED DIRECTLY TO SAKETHGOTURI93@GMAIL.COM [${result.timestamp || new Date().toLocaleTimeString()}]. I WILL RESPOND SHORTLY.`;
          }
          this.showToast('EMAIL DISPATCHED TO SAKETH REDDY');
        } else {
          // If running in a purely static context (e.g. GitHub Pages without server)
          // Fallback to client-side mailto with pre-composed payload
          if (step3) step3.className = 'progress-step-row completed';
          const mailtoUrl = `mailto:sakethgoturi93@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${category} from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSpecification: ${category}\nTimeline: ${timeline}\n\nMessage:\n${message}`)}`;
          window.location.href = mailtoUrl;

          if (feedback) {
            feedback.className = 'form-feedback success';
            feedback.innerHTML = `TRANSMISSION ENVELOPE PREPARED &amp; DISPATCHED TO SAKETHGOTURI93@GMAIL.COM.`;
          }
          this.showToast('TRANSMISSION INITIATED');
        }
      } catch (err) {
        console.warn('Direct API unavailable, engaging client mailto fallback:', err);
        const mailtoUrl = `mailto:sakethgoturi93@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${category} from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSpecification: ${category}\nTimeline: ${timeline}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoUrl;

        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = `ROUTED TO SAKETHGOTURI93@GMAIL.COM VIA CLIENT APPLICATION.`;
        }
        this.showToast('DISPATCHED VIA CLIENT INBOX');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = 'TRANSMIT INQUIRY DIRECTLY';
      }
    });
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }
}
