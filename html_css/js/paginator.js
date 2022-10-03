let select = function () {
  let selectHeader = document.querySelector('.input__wrap');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.addEventListener('click', selectToggler)

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggler() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.input__value');
    currentText.value = text;
    select.classList.remove('is-active');

  }

};


select();