let burgerIcon = document.querySelector('#burger__icon')
let crossIcon = document.querySelector('.burger__icon-cross')
let mobileMenu = document.querySelector('#mobile__menu')
let menuItem = document.querySelectorAll('.burger__elem-item')
let menuOpen = false;

function menuToggler() {
  mobileMenu.classList.toggle('mobile__menu_active')

  setTimeout(() => {
    document.querySelector('body').classList.toggle('stop-scroll')
  }, 300)
  menuOpen = !menuOpen;
}

burgerIcon.addEventListener('click', () => menuToggler())
crossIcon.addEventListener('click', () => menuToggler())
menuItem.forEach(elem => elem.addEventListener('click', () => menuToggler()))

// closes Mobile menu if width more then 767 px

window.addEventListener('resize', function () {
  if (window.innerWidth > 767 && menuOpen === true) {
    menuToggler()
  }
})
