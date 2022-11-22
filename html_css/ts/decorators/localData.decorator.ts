import { Data } from "../models/interfaces.model";

export function LocalData() {
  return function <T extends { new(...arg: any): object }>(constructor: T) {
    return class extends constructor {
      constructor(...arg: any) {
        super(...arg)

        let keys: string[] = [...arg]
        let key: string = keys[0];
        let value: string = keys[1]

        function getter() {
          return JSON.parse(localStorage.getItem(key));
        }

        if (value) {
          console.log(value);
          console.log(typeof value);

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











// export function LocalData(keyData: string) {
//   return function (target: any, key: string) {
//     console.log(this);
//     console.log(target.constructor);
//     console.log(key);

//     const getter = () => {

//       if (localStorage.getItem(keyData) != null) {
//         return JSON.parse(localStorage.getItem(keyData));
//       }
//       return [];
//     };

//     const setter = (data: Data[]) => {
//       if (!localStorage.getItem(keyData)) {
//         localStorage.setItem(keyData, JSON.stringify(data));
//       }
//     };

//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     });
//   };
// }