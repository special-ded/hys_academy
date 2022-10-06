import './paginator.js';
import './drop-down-menu.js';
import './mobile-menu.js';

// paginator(sliderWrapper, currentData)

let header = document.querySelector('.header')

window.addEventListener('scroll', (event) => {

  if (window.scrollY > header.clientHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky')
  }
});