import Storage from "./storage";
import { Trim } from "./models/interfaces.model";
import { FormAlertEnum, FormSelector } from "./models/enum.model";


export class Form {
  localStorageUserName: string;
  localStorageTelephone: string;
  localStorageEmail: string;
  regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  regTelephone: RegExp = /\+38+\d{10}$/;
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
    const storage = new Storage(key);
    let value = storage.getFromLocalStorage(key)?.trim();

    return value;
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
    document.querySelector<HTMLInputElement>(FormSelector.username).value = this.localStorageUserName
      ? this.localStorageUserName
      : '';

    document.querySelector<HTMLInputElement>(FormSelector.telephone).value = this.localStorageTelephone
      ? this.localStorageTelephone
      : '';

    document.querySelector<HTMLInputElement>(FormSelector.email).value = this.localStorageEmail
      ? this.localStorageEmail
      : '';
  }

  sendButtonHandler(): void {
    document.querySelector('.send-btn')
      .addEventListener(
        'click', (): void => this.passValidation());
  }

  initFormListener(): void {
    document.querySelector(FormSelector.form)
      .addEventListener(
        'input', (e): void => this.inputHandler(e));
  }

  inputHandler(event: Event): void {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;

    this.storage = new Storage(eventTarget.id, eventTarget.value);
  }

  passValidation(): void {

    this.userNameValidation();
    this.numberValidation();
    this.emailValidation();

    if (this.userNameValidation() && this.numberValidation() && this.emailValidation()) {

      document.querySelector<HTMLInputElement>(FormSelector.username).value = '';
      document.querySelector<HTMLInputElement>(FormSelector.telephone).value = '';
      document.querySelector<HTMLInputElement>(FormSelector.email).value = '';
      this.storage.clearLocalStorage();
    }
  }

  userNameValidation(): boolean {
    const userNameEl: HTMLInputElement = document.querySelector(FormSelector.username);
    userNameEl.classList.remove(FormSelector.alert);
    document.querySelector<HTMLInputElement>(FormSelector.userAlert).innerText = '';

    if (!this.regName.test(userNameEl.value)) {
      document.querySelector<HTMLInputElement>(FormSelector.userAlert).innerText = FormAlertEnum.userNameAlert;
      userNameEl.classList.add(FormSelector.alert);
      return false;
    }
    return true;
  }

  numberValidation(): boolean {
    const numberEl: HTMLInputElement = document.querySelector(FormSelector.telephone);
    numberEl.classList.remove(FormSelector.alert);
    document.querySelector<HTMLInputElement>(FormSelector.telephoneAlert).innerText = '';

    if (!this.regTelephone.test(numberEl.value)) {
      document.querySelector<HTMLInputElement>(FormSelector.telephoneAlert).innerText = FormAlertEnum.telephoneAlert;
      numberEl.classList.add(FormSelector.alert);
      return false;
    }
    return true;
  }

  emailValidation(): boolean {
    const emailEl: HTMLInputElement = document.querySelector(FormSelector.email);
    emailEl.classList.remove(FormSelector.alert);
    document.querySelector<HTMLInputElement>(FormSelector.emailAlert).innerText = '';

    if (!this.regEmail.test(emailEl.value)) {
      document.querySelector<HTMLInputElement>(FormSelector.emailAlert).innerText = FormAlertEnum.emailAlert;
      emailEl.classList.add(FormSelector.alert);
      return false;
    }
    return true;
  }
}