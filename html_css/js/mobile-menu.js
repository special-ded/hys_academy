export default function initMobileMenu() {
  let menuOpen = false;

  initEventListeners();
  closeIfResize()

  function menuToggler() {
    const mobileMenu = document.querySelector('#mobile__menu');

    mobileMenu.classList.toggle('mobile__menu_active');
    setTimeoutForScrollStop();
  }

  function setTimeoutForScrollStop() {
    setTimeout(() => {
      document.querySelector('body').classList.toggle('stop-scroll');
    }, 300);
    menuOpen = !menuOpen;
  }

  function initEventListeners() {
    const burgerIcon = document.querySelector('.burger__icon');
    const crossIcon = document.querySelector('.burger__icon-cross');
    const menuItem = document.querySelectorAll('.menu__elem-item');

    burgerIcon.addEventListener('click', () => menuToggler());
    crossIcon.addEventListener('click', () => menuToggler());
    menuItem.forEach(elem => elem.addEventListener('click', () => menuToggler()));
  }

  function closeIfResize() {
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767 && menuOpen === true) {
        menuToggler();
      }
    })
  }
}


