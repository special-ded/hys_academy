export default class Storage {

  localStorageSliderData: string;
  localStorageUserName: string;
  localStorageTelephone: string;
  localStorageEmail: string;
  regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  regNumber: RegExp = /\+38+\d{10}$/;
  regEmail: RegExp = /(?:[a-z0-9_-]+(?:\.[a-z0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

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
    this.localStorageUserName = JSON.parse(localStorage.getItem('username'))?.trim();
    this.localStorageTelephone = JSON.parse(localStorage.getItem('telephone'))?.trim();
    this.localStorageEmail = JSON.parse(localStorage.getItem('email'))?.trim();

    if (this.localStorageUserName || this.localStorageTelephone || this.localStorageEmail) {
      this.renderFormData();
    }
  }

  renderFormData() {

    (document.querySelector('#username') as HTMLInputElement).value = this.localStorageUserName
      ? this.localStorageUserName
      : null;

    (document.querySelector('#telephone') as HTMLInputElement).value = this.localStorageTelephone
      ? this.localStorageTelephone
      : null;

    (document.querySelector('#email') as HTMLInputElement).value = this.localStorageEmail
      ? this.localStorageEmail
      : null;
  }

  setFormToLocalStorage() {
    document.querySelector('form').addEventListener('input', (e) => this.inputHandler(e));
  }

  inputHandler(event: Event) {
    localStorage.setItem((event.target as HTMLInputElement).id, JSON.stringify((event.target as HTMLInputElement).value));
  }

  sendButtonHandler() {
    document.querySelector('.send-btn').addEventListener('click', () => this.clearLocalStorage());
  }

  clearLocalStorage() {

    if (this.passValidation()) {
      (document.querySelector('#username') as HTMLInputElement).value = '';
      (document.querySelector('#telephone') as HTMLInputElement).value = '';
      (document.querySelector('#email') as HTMLInputElement).value = '';
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
    const userNameEl: HTMLInputElement = document.querySelector('#username');
    userNameEl.classList.remove('form__alert');
    (document.querySelector('#username__alert') as HTMLInputElement).innerText = '';

    if (!this.regName.test(userNameEl.value)) {
      (document.querySelector('#username__alert') as HTMLInputElement).innerText = 'Please input valid Name & Surname';
      userNameEl.classList.add('form__alert');
      return false;
    }
    return true;
  }

  numberValidation() {
    const numberEl: HTMLInputElement = document.querySelector('#telephone');
    numberEl.classList.remove('form__alert');
    (document.querySelector('#telephone__alert') as HTMLInputElement).innerText = '';

    if (!this.regNumber.test(numberEl.value)) {
      (document.querySelector('#telephone__alert') as HTMLInputElement).innerText = 'Format: +38 077 777 77 77';
      numberEl.classList.add('form__alert');
      return false;
    }
    return true;
  }

  emailValidation() {
    const emailEl: HTMLInputElement = document.querySelector('#email');
    emailEl.classList.remove('form__alert');
    (document.querySelector('#email__alert') as HTMLInputElement).innerText = '';

    if (!this.regEmail.test(emailEl.value)) {
      (document.querySelector('#email__alert') as HTMLInputElement).innerText = 'Invalid email given';
      emailEl.classList.add('form__alert');
      return false;
    }
    return true;
  }
}