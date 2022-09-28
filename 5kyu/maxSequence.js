var maxSequence = function(arr){
  let currentSum = 0;
  let maxSum = 0;
  const allNegative = currentVal => currentVal < 0;
  const allPositive = currentVal => currentVal > 0;
  if(!arr || !arr.length || arr.every(allNegative)) return 0;
  if(arr.every(allPositive)) return arr.reduce((a, b) => a + b, 0);
  
   arr.forEach(a => {
    currentSum = Math.max(a, currentSum + a);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
}