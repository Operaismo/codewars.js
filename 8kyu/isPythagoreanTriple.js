function isPythagoreanTriple(integers) {
  let sorted = integers.sort((a, b) => a - b);
  return sorted[2] ** 2 == sorted[0] ** 2 + sorted[1] ** 2;
}