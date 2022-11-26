import paginator from "./paginator";
import Slider from "./slider";
import Storage from "./storage";
import Select from "./select";
import CustomerSlider from "./customer-slider";
import { Data } from "./types/data-interface";
import './libs/my-slick';


export default class App {
  private storage: Storage;
  private data: Data[];

  constructor() {
    this.storage = new Storage();
    this.data = this.storage.getSliderData();
  }

  async init(): Promise<void> {
    const data = await this.setSliderData(1);
    this.addStickyHeader();
    this.initSelect();
    this.initSlider(data);
    this.initPaginator();
    this.initCustomerSlider(data)
  }

  private async setSliderData(albumId: number): Promise<Data[]> {
    let result: Data[];

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }

    return result;
  }

  private initSelect(): void {
    new Select("#select");
  }

  private initPaginator(): void {
    paginator("#paginator", this.data);
  }

  initSlider(data: Data[]): void {
    new Slider("#slider", data);
  }

  private initCustomerSlider(data: Data[]): void {
    new CustomerSlider('#customer-slider', data);
  }

  private addStickyHeader(): void {
    window.addEventListener('scroll', (): void => {
      const header: Element = document.querySelector('.header');

      header.classList.toggle('sticky', window.scrollY > header.clientHeight);
    });
  }
}