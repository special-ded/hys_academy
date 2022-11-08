export default class Storage {

  regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  regNumber = /\+38+\d{10}$/;
  regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor() {
    this.localStorageSliderData = 'localStorageSliderData';
  }

  getSliderData() {
    this.initStorage();

    return JSON.parse(localStorage.getItem(this.localStorageSliderData));
  }

  initStorage() {
    this.checkLocalStorage();
    this.setFormToLocalStorage();
    this.sendButtonHandler();
  }

  checkLocalStorage() {
    this.formUserName = JSON.parse(localStorage.getItem('username'))?.trim();
    this.formTelephone = JSON.parse(localStorage.getItem('telephone'))?.trim();
    this.formEmail = JSON.parse(localStorage.getItem('email'))?.trim();

    if (this.formUserName || this.formTelephone || this.formEmail) {
      this.renderFormData();
    }
  }

  renderFormData() {

    document.querySelector('#username').value = this.formUserName
      ? this.formUserName
      : null;

    document.querySelector('#telephone').value = this.formTelephone
      ? this.formTelephone
      : null;

    document.querySelector('#email').value = this.formEmail
      ? this.formEmail
      : null;
  }

  setFormToLocalStorage() {
    document.querySelector('form').addEventListener('input', (e) => this.inputHandler(e));
  }

  inputHandler(event) {
    localStorage.setItem(event.target.id, JSON.stringify(event.target.value));
  }

  sendButtonHandler() {
    document.querySelector('.send-btn').addEventListener('click', () => this.clearLocalStorage());
  }

  clearLocalStorage() {

    if (this.passValidation()) {
      document.querySelector('#username').value = '';
      document.querySelector('#telephone').value = '';
      document.querySelector('#email').value = '';
      localStorage.clear();
    }
  }

  passValidation() {
    this.userNameValidation();
    this.numberValidation();
    this.emailValidation();

    if (this.userNameValidation() && this.numberValidation() && this.emailValidation()) {
      return true;
    }
  }

  userNameValidation() {
    const userNameEl = document.querySelector('#username');
    userNameEl.classList.remove('form__alert');
    document.querySelector('#username__alert').innerText = '';

    if (!this.regName.test(userNameEl.value)) {
      document.querySelector('#username__alert').innerText = 'Invalid name given';
      userNameEl.classList.add('form__alert');
      return false;
    }
    return true;
  }

  numberValidation() {
    const numberEl = document.querySelector('#telephone');
    numberEl.classList.remove('form__alert');
    document.querySelector('#telephone__alert').innerText = '';

    if (!this.regNumber.test(numberEl.value)) {
      document.querySelector('#telephone__alert').innerText = 'Format: +38 077 777 77 77';
      numberEl.classList.add('form__alert');
      return false;
    }
    return true;
  }

  emailValidation() {
    const emailEl = document.querySelector('#email');
    emailEl.classList.remove('form__alert');
    document.querySelector('#email__alert').innerText = '';

    if (!this.regEmail.test(emailEl.value)) {
      document.querySelector('#email__alert').innerText = 'Invalid email given';
      emailEl.classList.add('form__alert');
      return false;
    }
    return true;
  }
}