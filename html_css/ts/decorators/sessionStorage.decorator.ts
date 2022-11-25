import { Data } from "../models/interfaces.model";

export function SessionStorage() {
  return function <T extends { new(...arg: any): object }>(constructor: T) {
    return class extends constructor {
      constructor(...arg: any[]) {
        super(...arg)

        let args: string[] = [...arg];
        let key: string = args[0];
        let value: string = args[1];
        // check for null
        function getter() {
          return JSON.parse(sessionStorage.getItem(key));
        }

        if (value) {
          sessionStorage.setItem(key, JSON.stringify(value));
          return
        }

        setter(getter());

        function setter(data: Data[]) {
          sessionStorage.setItem(key, JSON.stringify(data));
        };
      }
    }
  }
}