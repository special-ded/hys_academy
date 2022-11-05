import App from "./app.js";

export default class Select {

  constructor(selector) {
    this.selector = selector;
  }

  initSelect() {
    this.selectDiv = document.querySelector(`${this.selector}`);

    this.renderSelect();
    this.initEventListeners();
  }

  renderSelect() {
    this.selectDiv.innerHTML = this.getSelectTemplate();
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
      console.log(event.target.innerText, event.target.value);
      this.selectChoose(event.target.innerText, event.target.value);
    })

    document.querySelector(".select").addEventListener('click', (event) => {
      this.classListInput = ["input__value", "input__wrap", "select__icon-use", "select__icon"];

      if (this.classListInput.includes(event.target.className)
        || this.classListInput.includes(event.target.classList.value)) {
        this.selectToggler();
      }
    })
  }

  selectToggler() {
    this.selectDiv.classList.toggle('is-active');

    this.iconToggler();
  }

  selectChoose(text, value) {
    if (!value) {
      this.iconToggler();
      this.selectDiv.classList.remove('is-active');
      return
    }

    document.querySelector('.input__value').value = text;

    this.selectDiv.classList.remove('is-active');
    this.iconToggler();
    this.onSelectChange(value);
  }

  iconToggler() {
    this.paginatorIconLink = document.querySelector(".select__icon-use");

    this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-default";

    if (this.selectDiv.className === "select is-active") {
      this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-active";
    }
  }

  async onSelectChange(value) {
    const app = new App()
    const data = await app.setSliderData(value);

    app.initSlider(data)
  }
};