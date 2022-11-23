import Paginator from "./paginator";
import Slider from "./slider";
import Storage from "./storage";
import Select from "./select";
import CustomerSlider from "./customer-slider";
import initMobileMenu from "./mobile-menu";
import { Form } from "./form";
import { ReadOnly } from "./decorators/readOnly.decorator";
import { Data } from "./models/interfaces.model";
import { AppAbstract } from "./models/appAbstract.class";
import { AppEnum } from "./models/enum.model";
import './libs/my-slick';


export default class App implements AppAbstract {
  storage: Storage;
  data: Data[];
  BASE_URL = `https://jsonplaceholder.typicode.com/albums/`;

  constructor() {
    this.storage = new Storage(AppEnum.key);
  }

  @ReadOnly
  async init(): Promise<void> {
    this.storage.localData = this.storage.getFromLocalStorage(AppEnum.key);
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
      return result = await (await fetch(this.BASE_URL + `${albumId}/photos`)).json();
    } catch (error) {
      console.error("Error:", error);
      result = this.storage.localData;
    }

    return result;
  }

  initSelect(): void {
    new Select(AppEnum.select);
  }

  initPaginator(): void {
    Paginator(AppEnum.paginator, this.storage.localData);
  }

  initSlider(data: Data[]): void {
    new Slider(AppEnum.slider, data);
  }

  initCustomerSlider(data: Data[]): void {
    new CustomerSlider(AppEnum.customerSlider, data);
  }

  addStickyHeader(): void {
    window.addEventListener('scroll', () => {
      const header: Element = document.querySelector(AppEnum.header);

      header.classList.toggle('sticky', window.scrollY > header.clientHeight);
    });
  }
}

