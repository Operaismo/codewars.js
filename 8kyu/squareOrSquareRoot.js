function squareOrSquareRoot(array) {
  return array.map(item => Math.sqrt(item) == Math.sqrt(item).toFixed(0) ? Math.sqrt(item) : item * item);  
}