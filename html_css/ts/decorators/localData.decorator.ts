import { Data } from "../models/interfaces.model";

export function LocalData() {
  return function <T extends { new(...arg: any): object }>(constructor: T) {
    return class extends constructor {
      constructor(...arg: any) {
        super(arg)

        let arrayKey: string[] = [...arg]
        let key: string = arrayKey[0];

        console.log(key);
        console.log(constructor.prototype);

        const getter = () => {
          console.log(localStorage.getItem(key));
          return JSON.parse(localStorage.getItem(key));
        }

        const setter = (data: Data[]) => {
          console.log(data);

          localStorage.setItem(key, JSON.stringify(data));
        };

        Object.defineProperty(constructor, key, {
          get: getter,
          set: setter,
        });
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