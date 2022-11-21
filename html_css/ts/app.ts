import paginator from "./paginator";
import Slider from "./slider";
import Storage from "./storage";
import Select from "./select";
import CustomerSlider from "./customer-slider";
import initMobileMenu from "./mobile-menu";
import { Form } from "./form";
import { Data } from "./models/interfaces.model";
import './libs/my-slick';
import { ReadOnly } from "./decorators/readOnly.decorator";
import { AppAbstract } from "./models/appAbstract.class";


export default class App implements AppAbstract {
  storage: Storage;
  data: Data[];
  BASE_URL = `https://jsonplaceholder.typicode.com/albums/`;

  constructor() {
    this.storage = new Storage('localStorageSliderData');
  }

  @ReadOnly
  async init(): Promise<void> {
    this.storage.localData = this.storage.getFromLocalStorage();
    this.data = await this.setSliderData<number>(1);
    initMobileMenu();
    this.addStickyHeader();
    this.initSelect();
    this.initSlider(this.data);
    this.initPaginator();
    this.initCustomerSlider(this.data);
    new Form();
  }

  async setSliderData<T>(albumId: T): Promise<Data[]> {
    let result: Data[]

    try {
      const response = await fetch(this.BASE_URL + `${albumId}/photos`);
      result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
      result = this.storage.getFromLocalStorage()
    }

    return result;
  }

  initSelect(): void {
    new Select("#select");
  }

  initPaginator(): void {
    paginator("#paginator", this.storage.localData);
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

