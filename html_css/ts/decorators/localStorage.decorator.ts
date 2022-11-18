export function LocalStorage(target: any, key: any) {
  let value = '';

  const getter = function () {
    return value
  }

  const setter = function (val: string) {
    value = val;
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}