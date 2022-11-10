import paginator from "./paginator";
import Slider from "./slider";
import Storage from "./storage";
import Select from "./select";
import CustomerSlider from "./customer-slider";
import { Data } from "./data-interface";
import './libs/my-slick';


export default class App {
  storage: Storage;
  data: Data[];

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

  async setSliderData(albumId: number) {
    let result: Data[]
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      result = await response.json();
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

  initSlider(data: Data[]) {
    new Slider("#slider", data);
  }

  initCustomerSlider(data: Data[]) {
    new CustomerSlider('#customer-slider', data);
  }
}