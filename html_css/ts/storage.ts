import { Data } from "./types/data-interface";

export default class Storage {

  private localStorageSliderData: string;
  private localStorageUserName: string;
  private localStorageTelephone: string;
  private localStorageEmail: string;
  private regName: RegExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  private regNumber: RegExp = /\+38+\d{10}$/;
  private regEmail: RegExp = /(?:[a-z0-9_-]+(?:\.[a-z0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor() {
    this.localStorageSliderData = 'localStorageSliderData';
  }

  public getSliderData(): Data[] {
    this.initStorage();

    return JSON.parse(localStorage.getItem(this.localStorageSliderData));
  }

  private initStorage(): void {
    this.checkLocalStorage();
    this.setFormToLocalStorage();
    this.sendButtonHandler();
  }

  private checkLocalStorage(): void {
    this.localStorageUserName = JSON.parse(localStorage.getItem('username'))?.trim();
    this.localStorageTelephone = JSON.parse(localStorage.getItem('telephone'))?.trim();
    this.localStorageEmail = JSON.parse(localStorage.getItem('email'))?.trim();

    if (this.localStorageUserName || this.localStorageTelephone || this.localStorageEmail) {
      this.renderFormData();
    }
  }

  private renderFormData(): void {
    document.querySelector<HTMLInputElement>('#username').value = this.localStorageUserName
      ? this.localStorageUserName
      : null;

    document.querySelector<HTMLInputElement>('#telephone').value = this.localStorageTelephone
      ? this.localStorageTelephone
      : null;

    document.querySelector<HTMLInputElement>('#email').value = this.localStorageEmail
      ? this.localStorageEmail
      : null;
  }

  private setFormToLocalStorage(): void {
    document
      .querySelector('form')
      .addEventListener(
        'input', (e: Event): void => this.inputHandler(e));
  }

  private inputHandler(event: Event): void {
    localStorage.setItem((event.target as HTMLInputElement).id, JSON.stringify((event.target as HTMLInputElement).value));
  }

  private sendButtonHandler(): void {
    document
      .querySelector('.send-btn')
      .addEventListener(
        'click', (): void => this.clearLocalStorage());
  }

  private clearLocalStorage(): void {

    if (this.passValidation()) {
      document.querySelector<HTMLInputElement>('#username').value = '';
      document.querySelector<HTMLInputElement>('#telephone').value = '';
      document.querySelector<HTMLInputElement>('#email').value = '';
      localStorage.clear();
    }
  }

  protected passValidation(): boolean {
    this.isUserNameValid();
    this.isNumberValid();
    this.isEmailValid();

    if (this.isUserNameValid() && this.isNumberValid() && this.isEmailValid()) {
      return true;
    }
  }

  protected isUserNameValid(): boolean {
    const userNameEl: HTMLInputElement = document.querySelector('#username');
    this.removeFormAlertMessage('#username')

    if (!this.regName.test(userNameEl.value)) {
      this.showFormAlertMessage('#username', 'Please input valid Name & Surname')
      return false;
    }
    return true;
  }

  protected isNumberValid(): boolean {
    const numberEl: HTMLInputElement = document.querySelector('#telephone');
    this.removeFormAlertMessage('#telephone')

    if (!this.regNumber.test(numberEl.value)) {
      this.showFormAlertMessage('#telephone', 'Format: +38 077 777 77 77')
      return false;
    }
    return true;
  }

  protected isEmailValid(): boolean {
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