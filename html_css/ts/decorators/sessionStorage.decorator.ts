import { Data } from "../models/interfaces.model";
import slidesData from "../data/slides-data-big";

export function SessionStorage() {
  return function <T extends { new(...arg: any): object }>(constructor: T) {
    return class extends constructor {
      constructor(...arg: any[]) {
        super(...arg)

        const args: string[] = [...arg];
        const key: string = args[0];
        const value: string = args[1];

        function getter() {

          if (!sessionStorage.getItem(key)) {
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