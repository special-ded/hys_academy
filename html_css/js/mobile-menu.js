export default function initMobileMenu() {
  let menuOpen = false;

  initEventListener();
  closeIfResize()

  function initEventListener() {
    const header = document.querySelector('#header');

    header.addEventListener('click', clickHandler)
  }

  function clickHandler(e) {

    if (e.target.className === "menu__elem-item" ||
      e.target.className.animVal === "burger__icon-cross" ||
      e.target.className.animVal === "burger__icon") {

      menuToggler()
    }
  }

  function menuToggler() {
    const mobileMenu = document.querySelector('.mobile__menu');

    mobileMenu.classList.toggle('mobile__menu_active');
    scrollStopTimeOut();
  }

  function scrollStopTimeOut() {

    setTimeout(() => {
      document.querySelector('body').classList.toggle('stop-scroll');
    }, 300);
    menuOpen = !menuOpen;
  }

  function closeIfResize() {

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767 && menuOpen === true) {
        menuToggler();
      }
    })
  }
}


