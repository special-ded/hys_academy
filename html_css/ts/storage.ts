import { LocalStorage } from "./decorators/localStorage.decorator";
import { Data, Trim } from "./models/interfaces.model";

export default class Storage {
  private _localData: Data[] = null;

  @LocalStorage
  localStorageSliderData: string;
  localStorageUserName: string;
  localStorageTelephone: string;
  localStorageEmail: string;

  get localData(): Data[] {
    return this._localData;
  }

  ////Decorator
  set localData(value: Data[]) {
    this._localData = value;
  }

  constructor(localStorageName: string) {
    this.localStorageSliderData = localStorageName;
    this.initStorage();
  }

  getSliderData(): Array<Data> {
    return JSON.parse(localStorage.getItem(this.localStorageSliderData));
  }

  initStorage(): void {
    this.checkLocalStorage();
    this.initFormListener();
  }

  checkLocalStorage(): void {
    this.localStorageUserName = this.getFromLocalStorage<string>('username');
    this.localStorageTelephone = this.getFromLocalStorage<string>('telephone');
    this.localStorageEmail = this.getFromLocalStorage<string>('email');

    if (this.localStorageUserName || this.localStorageTelephone || this.localStorageEmail) {
      this.fillFormData();
    }
  }

  getFromLocalStorage<T extends Trim>(key: string): T {
    return JSON.parse(localStorage.getItem(key))?.trim();
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

  initFormListener(): void {
    document.querySelector('form')
      .addEventListener(
        'input', (e) => this.inputHandler(e));
  }
  ////Decorator
  inputHandler(event: Event): void {
    localStorage.setItem((event.target as HTMLInputElement).id, JSON.stringify((event.target as HTMLInputElement).value));
  }

  clearLocalStorage(): void {
    (document.querySelector('#username') as HTMLInputElement).value = '';
    (document.querySelector('#telephone') as HTMLInputElement).value = '';
    (document.querySelector('#email') as HTMLInputElement).value = '';
    localStorage.clear();
  }
}