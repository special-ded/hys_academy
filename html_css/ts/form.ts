import { Trim } from "./models/interfaces.model";
import Storage from "./storage";

export class Form {
  localStorageUserName: string;
  localStorageTelephone: string;
  localStorageEmail: string;
  regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  regNumber: RegExp = /\+38+\d{10}$/;
  regEmail: RegExp = /(?:[a-z0-9_-]+(?:\.[a-z0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  storage: Storage;

  constructor() {
    this.onInit();
  }

  onInit() {
    this.checkLocalStorage();
    this.sendButtonHandler();
    this.initFormListener();
  }

  getFromLocalStorage<T extends Trim>(key: string): T {
    return JSON.parse(localStorage.getItem(key))?.trim();
  }

  checkLocalStorage(): void {
    this.localStorageUserName = this.getFromLocalStorage<string>('username');
    this.localStorageTelephone = this.getFromLocalStorage<string>('telephone');
    this.localStorageEmail = this.getFromLocalStorage<string>('email');

    if (this.localStorageUserName || this.localStorageTelephone || this.localStorageEmail) {
      this.fillFormData();
    }
  }

  fillFormData(): void {
    (document.querySelector('#username') as HTMLInputElement).value = this.localStorageUserName
      ? this.localStorageUserName
      : '';

    (document.querySelector('#telephone') as HTMLInputElement).value = this.localStorageTelephone
      ? this.localStorageTelephone
      : '';

    (document.querySelector('#email') as HTMLInputElement).value = this.localStorageEmail
      ? this.localStorageEmail
      : '';
  }

  sendButtonHandler(): void {
    document.querySelector('.send-btn')
      .addEventListener(
        'click', (): void => this.passValidation());
  }

  initFormListener(): void {
    document.querySelector('form')
      .addEventListener(
        'input', (e): void => this.inputHandler(e));
  }

  inputHandler(event: Event): void {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement

    this.storage = new Storage(eventTarget.id, eventTarget.value);
  }

  passValidation(): void {

    this.userNameValidation();
    this.numberValidation();
    this.emailValidation();

    if (this.userNameValidation() && this.numberValidation() && this.emailValidation()) {
      (document.querySelector('#username') as HTMLInputElement).value = '';
      (document.querySelector('#telephone') as HTMLInputElement).value = '';
      (document.querySelector('#email') as HTMLInputElement).value = '';
      this.storage.clearLocalStorage()
    }
  }

  userNameValidation(): boolean {
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

  numberValidation(): boolean {
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

  emailValidation(): boolean {
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