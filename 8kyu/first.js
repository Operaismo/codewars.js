function first(arr, n) {
  return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}