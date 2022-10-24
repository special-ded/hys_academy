import App from "./app.js";

export default class Select {

  constructor(selector, onSelectChangeCallBack) {
    this.selector = selector;
    this.onSelectChangeCallBack = onSelectChangeCallBack;
  }

  initSelect() {
    this.selectDiv = document.querySelector(`${this.selector}`);
    console.log(this.selector, this.onSelectChangeCallBack)
    this.renderSelect();
    this.initEventListeners();
  }

  renderSelect() {
    this.selectDiv.innerHTML = this.getSelectTemplate();
  }

  getSelectTemplate() {
    return `
    <div class="input__wrap">
    <input class="input__value" value="Album" />
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
    console.log("aaaaaaaaaaaaa");


    document.querySelector('.input__value').value = text;

    this.selectDiv.classList.remove('is-active');
    this.iconToggler();
    this.onSelectChange(value)
  }

  iconToggler() {
    this.paginatorIconLink = document.querySelector(".select__icon-use");

    this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-default";

    if (this.selectDiv.className === "select is-active") {
      this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-active";
    }
  }

  onSelectChange(value) {
    // this.onSelectChangeCallBack(value);
    console.log(value)
    const app = new App()
    app.setSliderData(value)
    app.initSlider()
  }
};