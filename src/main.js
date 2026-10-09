import { Router } from './router.js';

/* ===================================================================
   G. SAKETH REDDY — APPLICATION INITIALIZATION
   Boots Router, Global Header, Mobile Menu & Resume Modal
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize SPA Router into the main viewport
  window.appRouter = new Router('app-viewport');

  // Initialize Global UI Components
  initGlobalHeader();
  initMobileMenu();
  initResumeModal();
});

/* -------------------------------------------------------------
   1. GLOBAL HEADER SCROLL LISTENER
   ------------------------------------------------------------- */
function initGlobalHeader() {
  const header = document.getElementById('arch-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.borderBottomColor = '#999999';
    } else {
      header.style.borderBottomColor = '#b8b8b8';
    }
  });
}

/* -------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('arch-mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer || !closeBtn) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  });

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  closeBtn.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* -------------------------------------------------------------
   3. RESUME PREVIEW MODAL
   ------------------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-modal-close');

  if (!modal) return;

  document.addEventListener('click', (e) => {
    if (e.target.closest('#btn-open-resume, #trigger-resume-item')) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
