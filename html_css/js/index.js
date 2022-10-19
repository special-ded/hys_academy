import preferDropDown from './drop-down-menu.js';
import initMobileMenu from './mobile-menu.js';
import paginator from './paginator.js';
// import paginatorData from './data/paginator-data.js';
import paginatorData from './data/paginator-data-big.js';
import Slider from './slider.js';
import '../css/style.css';

(document.onload = () => {
  init();
})()


function init() {
  addStickyHeader();
  initPaginator();
  initMobileMenu();
  preferDropDown();
  initSlider();
}

function initPaginator() {
  const data = paginatorData();

  paginator('#paginator', data);
}

function initSlider() {
  const data = paginatorData();
  const slider = new Slider('#slider', data);

  slider.initSlider();
}


// ADDING STICKY HEADER
function addStickyHeader() {
  window.addEventListener('scroll', (event) => {
    const header = document.querySelector('.header');

    window.scrollY > header.clientHeight ? header.classList.add('sticky') : header.classList.remove('sticky')
  });
}
