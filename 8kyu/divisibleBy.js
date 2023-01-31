function divisibleBy(numbers, divisor){
  return numbers.filter((x) => x % divisor == 0);
}