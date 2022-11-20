export function LocalStorage(target: any, key: any) {
  console.log(target);
  console.log(key);

  let value = '';

  const getter = function () {
    console.log(value);
    return value
  }

  const setter = function (val: string) {
    console.log(value);
    return value = val;
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}