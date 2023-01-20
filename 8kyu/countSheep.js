var countSheep = function (num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += i.toString() + ' sheep...';
  }
  return str;
}