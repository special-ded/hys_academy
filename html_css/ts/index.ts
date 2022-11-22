import slidesData from "./data/slides-data-big";
import App from "./app";
import Storage from "./storage";
import '../css/style.css';
import { Data } from "./models/interfaces.model";


(document.onload = () => {
  init();
})()

function init(): void {
  setDataInLocalStorage(slidesData());
  initApp();
}

function initApp(): void {
  const app: App = new App();
  app.init();
}

function setDataInLocalStorage<A extends Data[]>(data: A): void {
  new Storage('localStorageSliderData', data);
}