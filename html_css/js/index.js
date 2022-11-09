import initMobileMenu from "./mobile-menu.js";
import paginatorData from "./data/paginator-data-big.js";
import App from "./app.js";
import '../css/style.css';

(document.onload = () => {
  init();
})()


function init() {
  putDataInLocalStorage();
  initApp();

  addStickyHeader();
  initMobileMenu();
}

function initApp() {
  const app = new App();
  app.init();
}

function putDataInLocalStorage() {
  const data = paginatorData();
  localStorage.setItem('localStorageSliderData', JSON.stringify(data));
}

function addStickyHeader() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > header.clientHeight);
  });
}
