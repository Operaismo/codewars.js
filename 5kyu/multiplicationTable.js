multiplicationTable = function (size) {
  let r = [];
  for (let i = 1; i <= size; i++) {
    let x = [];
    for (let j = 1; j <= size; j++) {
      x.push(i * j);
    }
    r.push(x);
  }
  return r;
};
