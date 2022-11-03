import paginator from './paginator.js';
import Slider from './slider.js';
import Storage from './storage.js';

export default class App {

  init() {
    this.storage = new Storage();
    this.data = this.storage.getSliderData();

    this.initPaginator();
    this.initSlider();
  }

  initPaginator() {
    paginator('#paginator', this.data);
  }

  initSlider() {
    const slider = new Slider('#slider', this.data);

    slider.initSlider();
  }
}