export default class Storage {
  constructor() {
  }

  getSliderData() {
    this.initStorage();

    return this.data = JSON.parse(localStorage.getItem('localStorageSliderData'));
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
    this.formUserName ? document.querySelector('#username').value = this.formUserName : null;
    this.formTelephone ? document.querySelector('#telephone').value = this.formTelephone : null;
    this.formEmail ? document.querySelector('#email').value = this.formEmail : null;
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
    console.log("valid")
    return true
  }

}







