var uniqueInOrder = function (iterable) {
    let arr = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        arr.push(iterable[i]);
      }
    }
    return arr;
  }