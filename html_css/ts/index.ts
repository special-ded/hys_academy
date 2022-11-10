import initMobileMenu from "./mobile-menu";
import paginatorData from "./data/paginator-data-big.js";
import App from "./app";
import '../css/style.css';
import { Data } from "./data-interface";

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
  const app: App = new App();
  app.init();
}

function putDataInLocalStorage() {
  const data: Data[] = paginatorData();
  localStorage.setItem('localStorageSliderData', JSON.stringify(data));
}

function addStickyHeader() {
  window.addEventListener('scroll', () => {
    const header: Element = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > header.clientHeight);
  });
}
