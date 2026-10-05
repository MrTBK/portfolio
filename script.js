// Portfolio Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Ensure dark theme is active
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  localStorage.removeItem('portfolio-theme');

  // 1. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-white', 'border-cyan-500');
        b.classList.add('bg-slate-800/60', 'text-slate-400', 'border-slate-700/60');
      });
      btn.classList.add('active', 'bg-cyan-500', 'text-white', 'border-cyan-500');
      btn.classList.remove('bg-slate-800/60', 'text-slate-400', 'border-slate-700/60');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 3. Image Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  function openLightbox(src, title, desc) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    lightboxTitle.textContent = title || '';
    lightboxDesc.textContent = desc || '';
    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.lightbox-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-img') || el.src;
      const title = el.getAttribute('data-title') || el.alt || 'Project Preview';
      const desc = el.getAttribute('data-desc') || '';
      openLightbox(src, title, desc);
    });
  });

  // Enable direct tap-to-zoom on mobile for project & competition images
  document.querySelectorAll('.project-card .aspect-video, #achievements .aspect-video').forEach(wrapper => {
    const trigger = wrapper.querySelector('.lightbox-trigger');
    const img = wrapper.querySelector('img');
    if (trigger && img) {
      img.classList.add('cursor-pointer');
      img.addEventListener('click', (e) => {
        // Prevent conflict if user specifically clicked a link or button
        if (e.target.closest('a') || e.target.closest('button')) return;
        const src = trigger.getAttribute('data-img') || img.src;
        const title = trigger.getAttribute('data-title') || img.alt || 'Preview';
        const desc = trigger.getAttribute('data-desc') || '';
        openLightbox(src, title, desc);
      });
    }
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && !lightboxModal.classList.contains('hidden')) {
      closeLightbox();
    }
  });

  // 4. Copy-to-Clipboard with Toast Notification
  const toast = document.getElementById('copy-toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  function showToast(msg) {
    if (!toast) return;
    toastMessage.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('toast-enter');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('toast-enter');
    }, 2500);
  }

  document.querySelectorAll('.copy-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      const textToCopy = el.getAttribute('data-copy');
      const label = el.getAttribute('data-label') || 'Text';
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${label} to clipboard!`);
        }).catch(() => {
          showToast(`Failed to copy`);
        });
      }
    });
  });

  // 5. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

  function setMobileMenuState(isOpen) {
    if (!mobileMenuBtn || !mobileMenu) return;
    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.innerHTML = `
        <svg class="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>`;
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>`;
    }
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      setMobileMenuState(isHidden);
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMobileMenuState(false);
      });
    });
  }

  // 6. Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 7. Scrollspy (Active Navigation Highlighting)
  const spySections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu .mobile-menu-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = 120;
    let currentSectionId = '';

    // If near the bottom of the page, activate contact
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
      currentSectionId = 'contact';
    } else {
      spySections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });
    }

    desktopNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isMatch = href === `#${currentSectionId}`;
      link.classList.toggle('active', isMatch);
      if (isMatch) {
        link.classList.add('text-cyan-400');
        link.classList.remove('text-slate-300');
      } else {
        link.classList.remove('text-cyan-400');
        link.classList.add('text-slate-300');
      }
    });

    mobileNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isMatch = href === `#${currentSectionId}`;
      if (isMatch) {
        link.classList.add('text-cyan-400', 'font-semibold');
        link.classList.remove('text-slate-300');
      } else {
        link.classList.remove('text-cyan-400', 'font-semibold');
        link.classList.add('text-slate-300');
      }
    });
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateActiveNavLink);
  }, { passive: true });

  updateActiveNavLink();
});
