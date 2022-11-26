import { Data } from "../models/interfaces.model";
import slidesData from "../data/slides-data-big";

export function SessionStorage() {
  return function <T extends { new(...arg: any): object }>(constructor: T) {
    return class extends constructor {
      constructor(...arg: any[]) {
        super(...arg)

        let args: string[] = [...arg];
        let key: string = args[0];
        let value: string = args[1];

        function getter() {

          if (JSON.parse(sessionStorage.getItem(key)) === null || undefined) {
            console.log("No data in SessionStorage");
            return slidesData()
          }
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