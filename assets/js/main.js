document.addEventListener('DOMContentLoaded', () => {
  const i18n = window.siteI18n;
  const t = (key) => i18n ? i18n.t(key) : key;
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
    });
  }

  if (i18n) {
    document.querySelectorAll('.language-toggle').forEach((languageButton) => {
      languageButton.addEventListener('click', () => {
        i18n.setLanguage(languageButton.dataset.language);
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const privacyConsent = document.getElementById('privacyConsent');

      if (!name || !email || !message) {
        event.preventDefault();
        formStatus.textContent = t('form.error.required');
        formStatus.className = 'form-status error';
        return;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValid) {
        event.preventDefault();
        formStatus.textContent = t('form.error.email');
        formStatus.className = 'form-status error';
        return;
      }

      if (!privacyConsent || !privacyConsent.checked) {
        event.preventDefault();
        formStatus.textContent = t('form.error.privacy');
        formStatus.className = 'form-status error';
        return;
      }

      formStatus.textContent = t('form.success');
      formStatus.className = 'form-status success';
    });
  }

  const heroImage = document.querySelector('.hero-visual img');
  const galleryImages = Array.from(document.querySelectorAll('.gallery-card img'));
  const allLightboxImages = [];

  if (heroImage) {
    allLightboxImages.push(heroImage);
  }

  if (galleryImages.length) {
    allLightboxImages.push(...galleryImages);
  }

  if (allLightboxImages.length) {
    let currentIndex = 0;
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <div class="lightbox-content" role="dialog" aria-modal="true" aria-label="">
        <button class="lightbox-close" type="button" aria-label="">×</button>
        <button class="lightbox-nav lightbox-prev" type="button" aria-label="">←</button>
        <button class="lightbox-nav lightbox-next" type="button" aria-label="">→</button>
        <img src="" alt="" />
        <p class="lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    lightbox.querySelector('.lightbox-content').setAttribute('aria-label', t('lightbox.label'));
    lightboxClose.setAttribute('aria-label', t('lightbox.close'));
    lightboxPrev.setAttribute('aria-label', t('lightbox.previous'));
    lightboxNext.setAttribute('aria-label', t('lightbox.next'));

    function updateLightbox() {
      const image = allLightboxImages[currentIndex];
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || t('lightbox.enlarged');
      lightboxCaption.textContent = image.alt || '';
    }

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lightboxImage.src = '';
    }

    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + allLightboxImages.length) % allLightboxImages.length;
      updateLightbox();
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % allLightboxImages.length;
      updateLightbox();
    }

    allLightboxImages.forEach((img, index) => {
      img.addEventListener('click', () => openLightbox(index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      }
    });
  }

  const analyticsStatus = document.getElementById('analyticsStatus');
  const analyticsToggle = document.getElementById('analyticsToggle');
  if (analyticsStatus && analyticsToggle) {
    const analyticsDisabled = !!localStorage.getItem('disable-analytics');
    const updateAnalyticsBanner = () => {
      const disabled = !!localStorage.getItem('disable-analytics');
      analyticsStatus.textContent = disabled
        ? t('analytics.disabled')
        : t('analytics.enabled');
      analyticsToggle.textContent = disabled
        ? t('analytics.enable')
        : t('analytics.disable');
    };

    analyticsToggle.addEventListener('click', () => {
      if (localStorage.getItem('disable-analytics')) {
        localStorage.removeItem('disable-analytics');
      } else {
        localStorage.setItem('disable-analytics', 'true');
      }
      updateAnalyticsBanner();
      setTimeout(() => location.reload(), 200);
    });

    updateAnalyticsBanner();
  }
});
