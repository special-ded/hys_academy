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
    this.storage.localData = this.storage.getFromLocalStorage(AppClasses.Key);
    this.data = await this.setSliderData<number>(1);
    initMobileMenu();
    this.addStickyHeader();
    this.initSelect();
    this.initSlider(this.data);
    this.initPaginator();
    this.initCustomerSlider(this.data);
    new Form();
  }

  public async setSliderData<T>(albumId: T): Promise<Data[]> {
    let result: Data[]

    try {
      return result = await (await fetch(this.BASE_URL + `${albumId}/photos`)).json();
    } catch (error) {
      console.error("Error:", error);
      result = this.storage.localData;
    }

    return result;
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