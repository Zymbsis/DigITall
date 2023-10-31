(() => {
  const nav_menu = {
    openMenuButton: document.querySelector('[data-menu-open]'),
    closeMenuButton: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  nav_menu.openMenuButton.addEventListener('click', toggleMenu);
  nav_menu.closeMenuButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    nav_menu.menu.classList.toggle('is-open');
  }
})();
