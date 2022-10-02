function squareSum(numbers){
  return numbers.map(n => n **2).reduce((a, b) => a + b, 0);
}