import { LocalData } from "./decorators/localData.decorator";
import { LocalStorage } from "./decorators/localStorage.decorator";
import { Data } from "./models/interfaces.model";

@LocalData()
export default class Storage {
  private _localData: Data[];

  @LocalStorage
  public localStorageSliderData: string;
  localStorageUserName: string;
  localStorageTelephone: string;
  localStorageEmail: string;

  get localData(): Data[] {
    return this._localData;
  }

  set localData(value: Data[]) {
    this._localData = value;
  }

  constructor(key: string) {
    this.localStorageSliderData = key;
  }


  getFromLocalStorage(): Array<Data> {
    return JSON.parse(localStorage.getItem(this.localStorageSliderData));
  }

  setToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}