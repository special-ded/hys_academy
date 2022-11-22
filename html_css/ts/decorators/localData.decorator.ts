import { Data } from "../models/interfaces.model";

export function LocalData() {
  return function <T extends { new(...arg: any): object }>(constructor: T) {
    return class extends constructor {
      constructor(...arg: any) {
        super(...arg)

        let keys: string[] = [...arg]
        let key: string = keys[0];
        let value: string = keys[1];

        function getter() {
          return JSON.parse(localStorage.getItem(key));
        }

        if (value) {
          localStorage.setItem(key, JSON.stringify(value));
          return
        }

        setter(getter())

        function setter(data: Data[]) {
          localStorage.setItem(key, JSON.stringify(data));
        };

      }
    }
  }
}
