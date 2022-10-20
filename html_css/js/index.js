import preferDropDown from './drop-down-menu.js';
import initMobileMenu from './mobile-menu.js';
// import paginatorData from './data/paginator-data.js';
import paginatorData from './data/paginator-data-big.js';
import App from './app.js';
// import '../css/style.css'

(document.onload = () => {
  init();
})()


function init() {
  putDataInLocalStorage();
  initApp()

  addStickyHeader();
  initMobileMenu();
  preferDropDown();
}

function initApp() {
  const app = new App();
  app.init()
}

function putDataInLocalStorage() {
  const data = paginatorData();
  localStorage.setItem('localStorageSliderData', JSON.stringify(data));
}


// ADDING STICKY HEADER
function addStickyHeader() {
  window.addEventListener('scroll', (event) => {
    const header = document.querySelector('.header');

    window.scrollY > header.clientHeight ? header.classList.add('sticky') : header.classList.remove('sticky')
  });
}
