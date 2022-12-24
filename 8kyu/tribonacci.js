function tribonacci(signature, n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push((i < 3) ? signature[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}