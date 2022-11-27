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
import { AppClasses } from "./models/enum.model";
import './libs/my-slick';


export default class App extends AppAbstract {
  protected storage: Storage;
  protected data: Data[];
  protected BASE_URL = `https://jsonplaceholder.typicode.com/albums/`;

  constructor() {
    super();
    this.storage = new Storage(AppClasses.Key);
  }

  @ReadOnly
  public async init(): Promise<void> {
    this.storage.localData = this.storage.getFromStorage(AppClasses.Key);
    this.data = await this.setSliderData<number>(1);
    initMobileMenu();
    this.addStickyHeader();
    this.initSelect();
    new Form();
    this.initSlider(this.data);
    this.initPaginator();
    this.initCustomerSlider(this.data);
  }

  public async setSliderData<T>(albumId: T): Promise<Data[]> {
    console.log(albumId);

    try {
      const response: Response = await fetch(this.BASE_URL + `${albumId}/photos`);

      if (response.status !== 200) {
        return this.storage.getFromStorage(AppClasses.Key);
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return this.storage.localData;
    }
  }

  public initSlider(data: Data[]): void {
    new Slider(AppClasses.Slider, data);
  }

  private initSelect(): void {
    new Select(AppClasses.Select);
  }

  private initPaginator(): void {
    Paginator(AppClasses.Paginator, this.storage.localData);
  }

  private initCustomerSlider(data: Data[]): void {
    new CustomerSlider(AppClasses.CustomerSlider, data);
  }

  private addStickyHeader(): void {
    window.addEventListener('scroll', () => {
      const header: Element = document.querySelector(AppClasses.Header);

      header.classList.toggle('sticky', window.scrollY > header.clientHeight);
    });
  }
}