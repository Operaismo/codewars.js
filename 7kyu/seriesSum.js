function SeriesSum(n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}