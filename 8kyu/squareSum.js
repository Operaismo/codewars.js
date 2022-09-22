function squareSum(numbers){
  return numbers.reduce((total, current) => total + current**2, 0);
}