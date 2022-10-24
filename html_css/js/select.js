export default class Select {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  initSelect() {
    this.initEventListeners();
    this.selectDiv = document.querySelector('.select')
  }

  initEventListeners() {
    document.querySelector('.select__list').addEventListener('click', (event) => {
      this.selectChoose(event.target.innerText)
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

    this.iconToggler()
  }

  selectChoose(text) {

    document.querySelector('.input__value').value = text;

    this.selectDiv.classList.remove('is-active');
    this.iconToggler()
  }

  iconToggler() {
    this.paginatorIconLink = document.querySelector(".select__icon-use");

    this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-default";

    if (this.selectDiv.className === "select is-active") {
      this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-active"
    }
  }
};