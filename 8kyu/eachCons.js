function eachCons(array, n) {
  return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length == n);
}