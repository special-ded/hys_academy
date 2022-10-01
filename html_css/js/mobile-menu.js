let burgerIcon = document.querySelector('#burger__icon')
let crossIcon = document.querySelector('.burger__icon-cross')
let mobileMenu = document.querySelector('#mobile__menu')
let menuItem = document.querySelectorAll('.burger__elem-item')
let menuOpen = false;

function menuToggler() {
  if (menuOpen) {
    closeMenu()
  } else {
    openMenu()
  }
  menuOpen = !menuOpen;
}

burgerIcon.addEventListener('click', () => menuToggler())

crossIcon.addEventListener('click', () => menuToggler())

menuItem.forEach(elem => elem.addEventListener('click', () => menuToggler()))

console.log(menuItem)

// closes Mobile menu if width more then 600 px

window.addEventListener('resize', function () {
  if (window.innerWidth > 599 && menuOpen === true) {
    menuToggler()
  }
})

function openMenu() {
  mobileMenu.classList.add('mobile__menu_active');
  console.log('clicked')
}

function closeMenu() {
  mobileMenu.classList.remove('mobile__menu_active');
  console.log('removed')
}


// let globalEvent = document.addEventListener('click', (event) => {
//   eventHandler(event)
// })

// function eventHandler(e) {
//   console.log(e)
// }
