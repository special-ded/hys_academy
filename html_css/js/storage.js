export default class Storage {
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
      setTimeout(() => {
        document.querySelector('#username').value = '';
        document.querySelector('#telephone').value = '';
        document.querySelector('#email').value = '';
        localStorage.clear();
      }, 300);
    }
  }

  passValidation() {
    console.log(document.querySelector('#username').value);

    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.querySelector('#username').value;
    if (!regName.test(name)) {
      alert('Invalid name given.');
    } else {
      alert('Valid name given.');
    }

  }
}