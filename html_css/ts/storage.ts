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

  constructor(key: string, value?: string) {
    this.localStorageSliderData = key;
  }

  getFromLocalStorage(): Array<Data> {
    return JSON.parse(localStorage.getItem(this.localStorageSliderData));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}