export default function initMobileMenu() {
  let menuOpen = false;

  initEventListeners();
  closeIfResize()

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

  function initEventListeners() {
    const burgerMenu = document.querySelector('.mobile__menu');

    burgerMenu.addEventListener('click', clickHandler)


    const burgerIcon = document.querySelector('.burger__icon');
    // const crossIcon = document.querySelector('.burger__icon-cross');
    // const menuItem = document.querySelectorAll('.menu__elem-item');

    burgerIcon.addEventListener('click', () => menuToggler());
    // crossIcon.addEventListener('click', () => menuToggler());
    // menuItem.forEach(elem => elem.addEventListener('click', () => menuToggler()));
  }

  function clickHandler(e) {
    console.log(e.target.className)
    console.log(e.target.className.value)
    if (e.target.className === "menu__elem-item" ||
      e.target.className.value === "burger__icon-cross") {
      menuToggler()
    }
  }

  function closeIfResize() {
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767 && menuOpen === true) {
        menuToggler();
      }
    })
  }
}


