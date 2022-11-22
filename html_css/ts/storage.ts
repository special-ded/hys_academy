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

  constructor(key: string, value?: string | Data[]) {
    this.localStorageSliderData = key;
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}