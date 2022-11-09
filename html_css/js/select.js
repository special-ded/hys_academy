import App from "./app.js";

export default class Select {
  selectClassList = ["input__value", "input__wrap", "select__icon-use", "select__icon"];
  isActiveClass = 'is-active';
  iconHrefDefault = "./assets/images/sprite.svg#icon-arrow-default";
  iconHrefActive = "./assets/images/sprite.svg#icon-arrow-active";
  #el;

  constructor(selector) {
    this.selector = selector;
    this.initSelect()
  }

  initSelect() {
    this.this.#el = document.querySelector(`${this.selector}`);

    this.renderSelect();
    this.initEventListeners();
  }

  renderSelect() {
    this.this.#el.innerHTML = this.getSelectTemplate();
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
      this.selectChoose(event.target.innerText, event.target.value);
    })

    document.querySelector(".select").addEventListener('click', (event) => {
      this.classListInput = this.selectClassList;

      if (this.classListInput.includes(event.target.className)
        || this.classListInput.includes(event.target.classList.value)) {
        this.selectToggler();
      }
    })
  }

  selectToggler() {
    this.this.#el.classList.toggle(this.isActiveClass);
    this.iconToggler();
  }

  selectChoose(text, value) {
    this.this.#el.classList.remove(this.isActiveClass);
    this.iconToggler();

    if (!value) {
      return
    }

    document.querySelector('.input__value').value = text;
    this.onSelectChange(value);
  }

  iconToggler() {
    this.paginatorIconLink = document.querySelector(".select__icon-use");
    this.paginatorIconLink.href.baseVal = this.iconHrefDefault;

    if (this.this.#el.className === "select is-active") {
      this.paginatorIconLink.href.baseVal = this.iconHrefActive;
    }
  }

  async onSelectChange(value) {
    const app = new App();
    const data = await app.setSliderData(value);

    app.initSlider(data)
  }
};