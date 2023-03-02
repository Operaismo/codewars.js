function closeCompare(a, b, margin = 0) {
  return Math.abs(a - b) <= margin ? 0 : Math.sign(a - b);
}
