function preFizz(n) {
  let num = 1;
  let arr = [];
  for(let i = 0; i < n; i++){
    arr.push(num);
    num++;
  }
  return arr;
}