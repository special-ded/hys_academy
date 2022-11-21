import { Data } from "../models/interfaces.model";

export function LocalData(keyData: string) {
  return function (target: Object, key: string) {
    console.log(target.constructor);

    const getter = () => {

      if (localStorage.getItem(keyData) != null) {
        return JSON.parse(localStorage.getItem(keyData));
      }
      return [];
    };

    const setter = (data: Data[]) => {
      if (!localStorage.getItem(keyData)) {
        localStorage.setItem(keyData, JSON.stringify(data));
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}