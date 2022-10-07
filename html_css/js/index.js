import preferDropDown from './drop-down-menu.js';
import initMobileMenu from './mobile-menu.js';
import paginator from './paginator.js'
import paginatorData from './data/paginator-data.js'

init()

function init() {
  addStickyHeader()
  initPaginator();
  initMobileMenu()
  preferDropDown()
}

function initPaginator() {
  const sliderWrapper = document.querySelector('#paginator');
  const DATA = paginatorData();

  paginator(sliderWrapper, DATA);
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
