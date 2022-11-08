export default class Storage {
  regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  regNumber = /\+38+\d{10}$/;
  regEmail = /^\S+@\S+\.\S+$/;

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
    this.userNameValidation()
    this.numberValidation()
    this.emailValidation()

    if (this.userNameValidation() && this.numberValidation() && this.emailValidation()) {
      return true
    }
  }

  userNameValidation() {
    const name = document.querySelector('#username').value;
    document.querySelector('#username__alert').innerText = '';

    if (!this.regName.test(name)) {
      document.querySelector('#username__alert').innerText = 'Invalid name given';
      return false
    }
    return true
  }

  numberValidation() {
    console.log('22222');
    const number = document.querySelector('#telephone').value;
    document.querySelector('#telephone__alert').innerText = '';

    if (!this.regNumber.test(number)) {
      document.querySelector('#telephone__alert').innerText = 'Format: +38 077 777 77 77';
      return false
    }
    return true
  }

  emailValidation() {
    console.log('33333');
    const email = document.querySelector('#email').value;
    document.querySelector('#email__alert').innerText = '';

    if (!this.regEmail.test(email)) {
      document.querySelector('#email__alert').innerText = 'Invalid email given';
      return false
    }
    return true
  }
}