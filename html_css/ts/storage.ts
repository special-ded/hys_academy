import { Data } from "./types/data-interface";

export default class Storage {

  localStorageSliderData: string;
  localStorageUserName: string;
  localStorageTelephone: string;
  localStorageEmail: string;
  regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  regNumber: RegExp = /\+38+\d{10}$/;
  regEmail: RegExp = /(?:[a-z0-9_-]+(?:\.[a-z0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor() {
    this.localStorageSliderData = 'localStorageSliderData';
  }

  getSliderData(): Data[] {
    this.initStorage();

    return JSON.parse(localStorage.getItem(this.localStorageSliderData));
  }

  initStorage(): void {
    this.checkLocalStorage();
    this.setFormToLocalStorage();
    this.sendButtonHandler();
  }

  checkLocalStorage(): void {
    this.localStorageUserName = JSON.parse(localStorage.getItem('username'))?.trim();
    this.localStorageTelephone = JSON.parse(localStorage.getItem('telephone'))?.trim();
    this.localStorageEmail = JSON.parse(localStorage.getItem('email'))?.trim();

    if (this.localStorageUserName || this.localStorageTelephone || this.localStorageEmail) {
      this.renderFormData();
    }
  }

  renderFormData(): void {
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

  setFormToLocalStorage(): void {
    document
      .querySelector('form')
      .addEventListener(
        'input', (e: Event): void => this.inputHandler(e));
  }

  inputHandler(event: Event): void {
    localStorage.setItem((event.target as HTMLInputElement).id, JSON.stringify((event.target as HTMLInputElement).value));
  }

  sendButtonHandler(): void {
    document
      .querySelector('.send-btn')
      .addEventListener(
        'click', (): void => this.clearLocalStorage());
  }

  clearLocalStorage(): void {

    if (this.passValidation()) {
      (document.querySelector('#username') as HTMLInputElement).value = '';
      (document.querySelector('#telephone') as HTMLInputElement).value = '';
      (document.querySelector('#email') as HTMLInputElement).value = '';
      localStorage.clear();
    }
  }

  passValidation(): boolean {
    this.isUserNameValid();
    this.isNumberValid();
    this.isEmailValid();

    if (this.isUserNameValid() && this.isNumberValid() && this.isEmailValid()) {
      return true;
    }
  }

  isUserNameValid(): boolean {
    const userNameEl: HTMLInputElement = document.querySelector('#username');
    this.removeFormAlertMessage('#username')

    if (!this.regName.test(userNameEl.value)) {
      this.showFormAlertMessage('#username', 'Please input valid Name & Surname')
      return false;
    }
    return true;
  }

  isNumberValid(): boolean {
    const numberEl: HTMLInputElement = document.querySelector('#telephone');
    this.removeFormAlertMessage('#telephone')

    if (!this.regNumber.test(numberEl.value)) {
      this.showFormAlertMessage('#telephone', 'Format: +38 077 777 77 77')
      return false;
    }
    return true;
  }

  isEmailValid(): boolean {
    const emailEl: HTMLInputElement = document.querySelector('#email');
    this.removeFormAlertMessage('#email')

    if (!this.regEmail.test(emailEl.value)) {
      this.showFormAlertMessage('#email', 'Invalid email given')
      return false;
    }
    return true;
  }

  showFormAlertMessage(selector: string, message: string) {
    const el: HTMLInputElement = document.querySelector(selector);

    document.querySelector<HTMLInputElement>(`${selector}__alert`).innerText = message;
    el.classList.add('form__alert');
  }

  removeFormAlertMessage(selector: string) {
    const el: HTMLInputElement = document.querySelector(selector);
    el.classList.remove('form__alert');
    document.querySelector<HTMLInputElement>(`${selector}__alert`).innerText = '';
  }
}