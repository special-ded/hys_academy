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

<<<<<<< HEAD
export default class App implements AppAbstract {
  storage: Storage;
  data: Data[];
  BASE_URL = `https://jsonplaceholder.typicode.com/albums/`
=======
export default class App {
  private storage: Storage;
  private data: Data[];
>>>>>>> ls_10

  constructor() {
    this.storage = new Storage();
    this.data = this.storage.getSliderData();
  }

  async init(): Promise<void> {
<<<<<<< HEAD
    const data = await this.setSliderData<number>(1);
    this.addStickyHeader()
=======
    const data = await this.setSliderData(1);
    this.addStickyHeader();
>>>>>>> ls_10
    this.initSelect();
    this.initSlider(data);
    this.initPaginator();
    this.initCustomerSlider(data)
  }

<<<<<<< HEAD
  async setSliderData<T>(albumId: T): Promise<Data[]> {
    let result: Data[]
=======
  private async setSliderData(albumId: number): Promise<Data[]> {
    let result: Data[];

>>>>>>> ls_10
    try {
      const response = await fetch(this.BASE_URL + `${albumId}/photos`);
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