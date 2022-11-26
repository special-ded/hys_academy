import Storage from "./storage";
import { Trim } from "./models/interfaces.model";
import { FormAlert, FormSelector } from "./models/enum.model";


export class Form {
  private localStorageUserName: string;
  private localStorageTelephone: string;
  private localStorageEmail: string;
  private regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  private regTelephone: RegExp = /\+38+\d{10}$/;
  private regEmail: RegExp = /(?:[a-z0-9_-]+(?:\.[a-z0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  private storage: Storage;

  constructor() {
    this.onInit();
  }

  private onInit() {
    this.checkStorage();
    this.sendButtonHandler();
    this.initFormListener();
  }

  private getFromStorage<T extends Trim>(key: string): T {
    this.storage = new Storage(key);

    return this.storage.getFromStorage(key)?.trim();
  }

  private checkStorage(): void {
    this.localStorageUserName = this.getFromStorage<string>('username');
    this.localStorageTelephone = this.getFromStorage<string>('telephone');
    this.localStorageEmail = this.getFromStorage<string>('email');

    if (this.localStorageUserName || this.localStorageTelephone || this.localStorageEmail) {
      this.fillFormData();
    }
  }

  private fillFormData(): void {
    document.querySelector<HTMLInputElement>(FormSelector.Username).value = this.localStorageUserName
      ? this.localStorageUserName
      : '';

    document.querySelector<HTMLInputElement>(FormSelector.Telephone).value = this.localStorageTelephone
      ? this.localStorageTelephone
      : '';

    document.querySelector<HTMLInputElement>(FormSelector.Email).value = this.localStorageEmail
      ? this.localStorageEmail
      : '';
  }

  private sendButtonHandler(): void {
    document.querySelector('.send-btn')
      .addEventListener(
        'click', (): void => this.passValidation());
  }

  private initFormListener(): void {
    document.querySelector(FormSelector.Form)
      .addEventListener(
        'input', (e): void => this.inputHandler(e));
  }

  private inputHandler(event: Event): void {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;

    this.storage = new Storage(eventTarget.id, eventTarget.value);
  }

  private passValidation(): void {

    this.userNameValidation();
    this.numberValidation();
    this.emailValidation();

    if (this.userNameValidation() && this.numberValidation() && this.emailValidation()) {

      document.querySelector<HTMLInputElement>(FormSelector.Username).value = '';
      document.querySelector<HTMLInputElement>(FormSelector.Telephone).value = '';
      document.querySelector<HTMLInputElement>(FormSelector.Email).value = '';
      this.storage.clearLocalStorage();
    }
  }

  private userNameValidation(): boolean {
    const userNameEl: HTMLInputElement = document.querySelector(FormSelector.Username);
    userNameEl.classList.remove(FormSelector.Alert);
    document.querySelector<HTMLInputElement>(FormSelector.UserAlert).innerText = '';

    if (!this.regName.test(userNameEl.value)) {
      document.querySelector<HTMLInputElement>(FormSelector.UserAlert).innerText = FormAlert.UserName;
      userNameEl.classList.add(FormSelector.Alert);
      return false;
    }
    return true;
  }

  private numberValidation(): boolean {
    const numberEl: HTMLInputElement = document.querySelector(FormSelector.Telephone);
    numberEl.classList.remove(FormSelector.Alert);
    document.querySelector<HTMLInputElement>(FormSelector.TelephoneAlert).innerText = '';

    if (!this.regTelephone.test(numberEl.value)) {
      document.querySelector<HTMLInputElement>(FormSelector.TelephoneAlert).innerText = FormAlert.Telephone;
      numberEl.classList.add(FormSelector.Alert);
      return false;
    }
    return true;
  }

  private emailValidation(): boolean {
    const emailEl: HTMLInputElement = document.querySelector(FormSelector.Email);
    emailEl.classList.remove(FormSelector.Alert);
    document.querySelector<HTMLInputElement>(FormSelector.EmailAlert).innerText = '';

    if (!this.regEmail.test(emailEl.value)) {
      document.querySelector<HTMLInputElement>(FormSelector.EmailAlert).innerText = FormAlert.Email;
      emailEl.classList.add(FormSelector.Alert);
      return false;
    }
    return true;
  }
}