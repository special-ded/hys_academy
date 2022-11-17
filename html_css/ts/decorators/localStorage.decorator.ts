

export function LocalStorage(target: any, key: any) {
  let value = '';

  const getter = function () {
    console.log(key);
    return value
  }

  const setter = function (val: string) {
    console.log(setter);
    value = val;
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}