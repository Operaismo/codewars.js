function highAndLow(numbers){
  let result = numbers.split(" ").map(x => parseInt(x)).sort((a, b) => a - b);
  return `${result[result.length - 1]} ${result[0]}`;
  
}