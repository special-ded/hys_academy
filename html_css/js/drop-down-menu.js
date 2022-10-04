let select = function () {
  let dropDownMenu = document.querySelector('.select');
  // let inputField = document.querySelector('.input__wrap');
  let selectItem = document.querySelectorAll('.select__item');
  let paginatorIconLink = document.getElementsByClassName("paginator__icon-use");

  let iconToggle = false

  // inputField.addEventListener('click', selectToggler)

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  document.querySelector(".select").addEventListener('click', (event) => {
    let classListInput = ["input__value", "input__wrap", "paginator__icon-use", "paginator__icon"]
    if (classListInput.includes(event.target.className) || classListInput.includes(event.target.classList.value)) {
      selectToggler()
    }
  })

  function selectToggler() {
    iconToggler()
    dropDownMenu.classList.toggle('is-active');
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