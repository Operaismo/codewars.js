function countBy(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }
  return result;
}