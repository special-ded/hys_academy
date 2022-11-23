import slidesData from "./data/slides-data-big";
import App from "./app";
import Storage from "./storage";
import '../css/style.css';
import { AppEnum } from "./models/enum.model";


(document.onload = () => {
  init();
})()

function init(): void {
  new Storage(AppEnum.key, slidesData());
  initApp();
}

function initApp(): void {
  const app: App = new App();
  app.init();
}