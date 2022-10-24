import paginator from './paginator.js';
import Slider from './slider.js';
import Storage from './storage.js';
import Select from './select.js';

export default class App {
  constructor() {
  }

  init() {
    this.storage = new Storage();
    this.data = this.storage.getSliderData();

    this.initPaginator();
    this.initSlider();
    this.initSelect()
  }

  initSelect() {
    const select = new Select('#select', this.data);
    select.initSelect()
  }

  initPaginator() {
    paginator('#paginator', this.data);
  }

  initSlider() {
    const slider = new Slider('#slider', this.data);

    slider.initSlider();
  }
}