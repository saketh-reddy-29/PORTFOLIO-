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
    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = 'TRANSMITTING...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        form.reset();
        feedback.className = 'form-feedback success';
        feedback.textContent = 'INQUIRY LOGGED: THANK YOU. I WILL RESPOND SHORTLY.';
        this.showToast('TRANSMISSION SUCCESSFUL');

        setTimeout(() => {
          feedback.textContent = '';
        }, 5000);
      }, 700);
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
