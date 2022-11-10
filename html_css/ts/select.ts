import App from "./app";

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

  initSelect() {
    this.el = document.querySelector(`${this.selector}`);

    this.renderSelect();
    this.initEventListeners();
  }

  renderSelect() {
    this.el.innerHTML = this.getSelectTemplate();
  }

  getSelectTemplate() {
    return `
    <div class="input__wrap">
    <input class="input__value" value="Album 1" />
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
    <li value="1" class="select__item">Album 1</li>
    <li value="2" class="select__item">Album 2</li>
    <li value="3" class="select__item">Album 3</li>
  </ul>`
  }

  initEventListeners() {
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

  selectToggler() {
    this.el.classList.toggle(this.isActiveClass);
    this.iconToggler();
  }

  selectChoose(event: Event) {
    this.el.classList.remove(this.isActiveClass);
    this.iconToggler();

    if (!(event.target as HTMLInputElement).value) {
      return
    }

    (document.querySelector('.input__value') as HTMLInputElement).value = (event.target as HTMLInputElement).innerText;
    this.onSelectChange(event);
  }

  iconToggler() {
    const paginatorIconLink: SVGImageElement = document.querySelector(".select__icon-use");
    paginatorIconLink.href.baseVal = this.iconHrefDefault;

    if (this.el.className === "select is-active") {
      paginatorIconLink.href.baseVal = this.iconHrefActive;
    }
  }

  async onSelectChange(event: Event) {
    const app = new App();
    let albumId = (event.target as HTMLInputElement).value
    const data = await app.setSliderData(+albumId);

    app.initSlider(data)
  }
};