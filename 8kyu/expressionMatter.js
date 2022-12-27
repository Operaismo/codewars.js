function expressionMatter(a, b, c) {
  let output = [
    `${a * (b + c)}`,
    `${a * b * c}`,
    `${a + b * c}`,
    `${(a + b) * c}`,
    `${a + b + c}`,
  ];
  return Math.max(...output);
}
