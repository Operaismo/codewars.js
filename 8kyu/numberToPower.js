function numberToPower(number, power){
  let result = number;
  if(power === 0) result = 1;
  for(let i = 1; i < power; i++){
    result = result * number;
  }
  return result;
}