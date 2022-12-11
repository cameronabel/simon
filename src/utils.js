export function generateEnum(arr){
  let obj = Object.create(null);
  for (let key of arr){
    obj[key] = Symbol(key);
  }
  return Object.freeze(obj);
}

