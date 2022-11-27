export interface Data {
  category: string,
  id: number,
  redirectLink: string,
  title: string,
  url: string,
  userImage: string
};

export interface ISelect {
  initSelect(): void
}

export interface IStorage {
  key: string,
  get localData(): Data[],
  set localData(value: Data[]),
  clearLocalStorage(): void
}