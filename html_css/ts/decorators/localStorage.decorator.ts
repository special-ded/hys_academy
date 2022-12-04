export function LocalStorage(target: any, key: string): void {
  let value = '';

  const getter = function () {
    return value
  }

  const setter = function (val: string) {
    return value = val;
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}