import initMobileMenu from "./mobile-menu";
import paginatorData from "./data/paginator-data-big";
import App from "./app";
import '../css/style.css';
import { Data } from "./types/data-interface";

(document.onload = () => {
  init();
})()

function init(): void {
  putDataInLocalStorage();
  initApp();
  addStickyHeader();
  initMobileMenu();
}

function initApp(): void {
  const app: App = new App();
  app.init();
}

function putDataInLocalStorage(): void {
  const data: Data[] = paginatorData();
  localStorage.setItem('localStorageSliderData', JSON.stringify(data));
}

function addStickyHeader(): void {
  window.addEventListener('scroll', () => {
    const header: Element = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > header.clientHeight);
  });
}
