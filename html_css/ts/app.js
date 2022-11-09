import paginator from "./paginator.js";
import Slider from "./slider.js";
import Storage from "./storage.js";
import Select from "./select.js";
import CustomerSlider from "./customer-slider.js";

export default class App {
  constructor() {
    this.storage = new Storage();
    this.data = this.storage.getSliderData();
  }

  async init() {
    const data = await this.setSliderData(1);
    this.initSelect();
    this.initSlider(data);
    this.initPaginator();
    this.initCustomerSlider(data)
  }

  async setSliderData(albumId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
    return result;
  }

  initSelect() {
    new Select("#select");
  }

  initPaginator() {
    paginator("#paginator", this.data);
  }

  initSlider(data) {
    new Slider("#slider", data);
  }

  initCustomerSlider(data) {
    new CustomerSlider('#customer-slider', data);
  }
}