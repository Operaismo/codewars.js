function giveMeFive(obj) {
  let result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length == 5) {
      arr.push(obj[key]);
    }
  }
  return result;
}