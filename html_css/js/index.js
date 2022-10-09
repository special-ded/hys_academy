import preferDropDown from './drop-down-menu.js';
import initMobileMenu from './mobile-menu.js';
import paginator from '../../js/paginator.js'
// import paginatorData from './data/paginator-data.js'
import paginatorData from './data/paginator-data-big.js'

(document.onload = () => {
  init()
})()


function init() {
  addStickyHeader();
  initPaginator();
  initMobileMenu();
  preferDropDown();
}

function initPaginator() {
  // const sliderWrapper = document.querySelector('#paginator');
  const data = paginatorData();

  paginator('#paginator', data);
}


// ADDING STICKY HEADER
function addStickyHeader() {
  window.addEventListener('scroll', (event) => {
    const header = document.querySelector('.header');

    if (window.scrollY > header.clientHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}
