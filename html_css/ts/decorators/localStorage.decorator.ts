

export function LocalStorage(target: any, key: any) {

  const getter = function () {
    console.log(key);
  }

  const setter = function (val: string) {
    console.log(setter);
    key = val;
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}