export default class Select {

  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
  }

  initSelect() {
    this.iconToggle = false
    this.initEventListeners()
  }



  initEventListeners() {
    const selectItem = document.querySelectorAll('.select__item');

    selectItem.forEach(item => {
      item.addEventListener('click', this.selectChoose);
    });

    document.querySelector(".select").addEventListener('click', (event) => {
      const classListInput = ["input__value", "input__wrap", "paginator__icon-use", "paginator__icon"];

      if (classListInput.includes(event.target.className) || classListInput.includes(event.target.classList.value)) {
        this.selectToggler();
      }
    })
  }


  selectToggler() {
    const dropDownMenu = document.querySelector('.select');

    this.iconToggler();
    dropDownMenu.classList.toggle('is-active');
  }

  selectChoose() {
    // this.iconToggler();
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.input__value');
    currentText.value = text;
    select.classList.remove('is-active');
  }


  iconToggler() {
    this.paginatorIconLink = document.getElementsByClassName("paginator__icon-use");

    if (this.iconToggle == false) {
      this.paginatorIconLink[0].setAttribute('href', "./assets/images/sprite.svg#icon-arrow-active");
    } else {
      this.paginatorIconLink[0].setAttribute('href', "./assets/images/sprite.svg#icon-arrow-default");
    }
    this.iconToggle = !this.iconToggle;
  }
};