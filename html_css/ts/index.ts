import initMobileMenu from "./mobile-menu";
import paginatorData from "./data/paginator-data-big";
import App from "./app";
import '../css/style.css';
import { Data } from "./models/interfaces.model";

(document.onload = () => {
  init();
})()

function init(): void {
  setDataInLocalStorage<Data[]>(paginatorData());
  initApp();
  initMobileMenu();
}

function initApp(): void {
  const app: App = new App();
  app.init();
}

function setDataInLocalStorage<A>(data: A): void {
  localStorage.setItem('localStorageSliderData', JSON.stringify(data));
}


