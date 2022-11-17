import paginator from "./paginator";
import Slider from "./slider";
import Storage from "./storage";
import Select from "./select";
import CustomerSlider from "./customer-slider";
import { Data } from "./models/interfaces.model";
import './libs/my-slick';

abstract class AppAbstract {
  abstract BASE_URL: string;
  abstract setSliderData<T>(albumId: T): Promise<Data[]>;
}

export default class App implements AppAbstract {
  storage: Storage;
  data: Data[];
  BASE_URL = `https://jsonplaceholder.typicode.com/albums/`

  constructor() {
    this.storage = new Storage();
    this.storage.localStorageSliderData = 'localStorageSliderData';

    this.data = this.storage.getSliderData();
  }

  async init(): Promise<void> {
    const data = await this.setSliderData<number>(1);
    this.addStickyHeader()
    this.initSelect();
    this.initSlider(data);
    this.initPaginator();
    this.initCustomerSlider(data)
  }

  async setSliderData<T>(albumId: T): Promise<Data[]> {
    let result: Data[]
    try {
      const response = await fetch(this.BASE_URL + `${albumId}/photos`);
      result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
    return result;
  }

  initSelect(): void {
    new Select("#select");
  }

  initPaginator(): void {
    paginator("#paginator", this.data);
  }

  initSlider(data: Data[]): void {
    new Slider("#slider", data);
  }

  initCustomerSlider(data: Data[]): void {
    new CustomerSlider('#customer-slider', data);
  }

  addStickyHeader(): void {
    window.addEventListener('scroll', () => {
      const header: Element = document.querySelector('.header');

      header.classList.toggle('sticky', window.scrollY > header.clientHeight);
    });
  }
}