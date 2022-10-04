let select = function () {
  let inputField = document.querySelector('.input__wrap');
  let selectItem = document.querySelectorAll('.select__item');
  let paginatorIconLink = document.getElementsByClassName("paginator__icon-use");

  let iconToggle = false

  inputField.addEventListener('click',
    selectToggler)

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggler() {
    iconToggler()
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    iconToggler()
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.input__value');
    currentText.value = text;
    select.classList.remove('is-active');

  }

  function iconToggler() {
    if (iconToggle == false) {
      paginatorIconLink[0].setAttribute('href', "./assets/images/sprite.svg#icon-arrow-active")
    } else {
      paginatorIconLink[0].setAttribute('href', "./assets/images/sprite.svg#icon-arrow-default")
    }
    iconToggle = !iconToggle

  }

};


select();