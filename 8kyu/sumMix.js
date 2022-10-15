function sumMix(x) {
  console.log("x:", x);
  return x.map(s => { return Number(s) }).reduce((a, b) => a + b, 0);
}