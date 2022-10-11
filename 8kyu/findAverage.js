function findAverage(array) {
  return array || array.length || array !== [] || array !== null ? array.reduce((a, b) => a + b) / array.length : 0;
}