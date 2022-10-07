import './drop-down-menu.js';
import './mobile-menu.js';
import paginator from './paginator.js'
import DATA from './data/paginator-data.js'
const sliderWrapper = document.querySelector('#paginator')



init()

function init() {
  paginator(sliderWrapper, DATA)
  addStickyHeader()
}


// ADDING STICKY HEADER
function addStickyHeader() {
  window.addEventListener('scroll', (event) => {
    const header = document.querySelector('.header')
    if (window.scrollY > header.clientHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky')
    }
  });
}
