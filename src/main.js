(() => {
  const nav_menu = {
    openMenuButton: document.querySelector('[data-menu-open]'),
    closeMenuButton: document.querySelector('[data-menu-close]'),
    closeMenuNavLink: document.querySelector('[data-menu-nav-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  nav_menu.openMenuButton.addEventListener('click', toggleMenu);
  nav_menu.closeMenuButton.addEventListener('click', toggleMenu);
  nav_menu.closeMenuNavLink.addEventListener('click', toggleMenu);

  function toggleMenu() {
    nav_menu.menu.classList.toggle('is-open');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const customOffsets = {
    // Add personalized offsets for specific anchor links
    order: 150,
  };
  //  const delayAnchor = document.querySelector('.hero-anchor-link');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = customOffsets[targetId] || 60; // Adjust scroll end position
      const duration = 1200; // Adjust the duration as needed
      //  const delay = this === delayAnchor ? 3100 : 0; // Add delay if it's the specific element (3100 is a delay in miliseconds, specific element is defined by delayAnchor)

      setTimeout(() => {
        const targetPosition = targetElement.offsetTop - offset;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();

        function ease(t) {
          return cubicBezier(0.645, 0.045, 0.355, 1.0, t);
        }

        function animate(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          window.scrollTo(0, startPosition + distance * ease(progress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
        // }, delay);
      });
    });
  });

  // Cubic Bezier function
  function cubicBezier(x1, y1, x2, y2, t) {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;

    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;

    return ((ay * t + by) * t + cy) * t;
  }
});

const collectionItems = document.querySelectorAll('.collection-item');
const lightboxContainer = document.getElementById('lightbox-container');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

collectionItems.forEach((item, index) => {
  const img = item.querySelector('.collection-img');

  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxImage.width = img.width;
    lightboxImage.height = img.height;
    lightboxContainer.style.pointerEvents = 'auto';
    lightboxContainer.style.visibility = 'visible';
    lightboxContainer.style.opacity = '1';
  });
});

function closeLightbox() {
  lightboxContainer.style.pointerEvents = 'none';
  lightboxContainer.style.visibility = 'hidden';
  lightboxContainer.style.opacity = '0';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxContainer.addEventListener('click', event => {
  if (event.target === lightboxContainer) {
    closeLightbox();
  }
});
