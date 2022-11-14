import App from "./app";
import { Data } from "./models/interfaces.model";
import { AlbumEnum } from "./models/enum.model";

// Add access modifiers to all methods in Select and Slider classes

export default class Select {
  classListInput: string[] = ["input__value", "input__wrap", "select__icon-use", "select__icon"];
  isActiveClass: string = 'is-active';
  iconHrefDefault: string = "./assets/images/sprite.svg#icon-arrow-default";
  iconHrefActive: string = "./assets/images/sprite.svg#icon-arrow-active";
  selector: string;
  private el: Element;



  constructor(selector: string) {
    this.selector = selector;
    this.initSelect()
  }

  public initSelect(): void {
    this.el = document.querySelector(`${this.selector}`);

    this.renderSelect();
    this.initEventListeners();
  }

  private renderSelect(): void {
    this.el.innerHTML = this.getSelectTemplate();
  }

  private getSelectTemplate(): string {
    return `
    <div class="input__wrap">
    <input class="input__value" value=" ${AlbumEnum.Album1}" />
    <div class="input__icon">
      <svg class="select__icon" width="20" height="20">
        <use
          class="select__icon-use"
          href="./assets/images/sprite.svg#icon-arrow-default"
        ></use>
      </svg>
    </div>
  </div>
  <ul class="select__list">
    <li value="1" class="select__item">${AlbumEnum.Album1}</li>
    <li value="2" class="select__item">${AlbumEnum.Album2}</li>
    <li value="3" class="select__item">${AlbumEnum.Album3}</li>
  </ul>`
  }

  private initEventListeners(): void {
    document.querySelector('.select__list').addEventListener('click', (event) => {
      this.selectChoose(event);
    })

    document.querySelector(".select").addEventListener('click', (event) => {

      if (this.classListInput.includes((event.target as HTMLInputElement).className)
        || this.classListInput.includes((event.target as HTMLInputElement).classList.value)) {
        this.selectToggler();
      }
    })
  }

  private selectToggler(): void {
    this.el.classList.toggle(this.isActiveClass);
    this.iconToggler();
  }

  private selectChoose(event: Event): void {
    this.el.classList.remove(this.isActiveClass);
    this.iconToggler();

    if (!(event.target as HTMLInputElement).value) {
      return
    }

    (document.querySelector('.input__value') as HTMLInputElement).value = (event.target as HTMLInputElement).innerText;
    this.onSelectChange(event);
  }

  private iconToggler(): void {
    const paginatorIconLink: SVGImageElement = document.querySelector(".select__icon-use");
    paginatorIconLink.href.baseVal = this.iconHrefDefault;

    if (this.el.className === "select is-active") {
      paginatorIconLink.href.baseVal = this.iconHrefActive;
    }
  }

  private async onSelectChange(event: Event): Promise<void> {
    const app: App = new App();
    let albumId: string = (event.target as HTMLInputElement).value
    const data: Data[] = await app.setSliderData(+albumId);

    app.initSlider(data)
  }
};