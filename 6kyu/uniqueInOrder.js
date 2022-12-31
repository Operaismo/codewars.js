var uniqueInOrder = function (iterable) {
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}