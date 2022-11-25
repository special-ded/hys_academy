import { LocalData } from "./decorators/localData.decorator";
import { LocalStorage } from "./decorators/localStorage.decorator";
import { Data } from "./models/interfaces.model";

@LocalData()
export default class Storage {
  @LocalStorage
  public key: string;
  private _localData: Data[];
  private localStorageUserName: string;
  private localStorageTelephone: string;
  private localStorageEmail: string;

  public get localData(): Data[] {
    return this._localData;
  }

  public set localData(value: Data[]) {
    this._localData = value;
  }

  constructor(key: string, value?: string | Data[]) {
    this.key = key;
  }

  public getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}