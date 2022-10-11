function oddOrEven(array) {
   let sum = array.reduce((a, b) => a + b, 0);
  return sum % 2 ? "odd" : "even";
}