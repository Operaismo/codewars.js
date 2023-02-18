function howMuchWater(water, load, clothes){
  if(clothes > 2 * load) return 'Too much clothes';
  if( clothes < load) return 'Not enough clothes';
  return parseFloat((water * (1.1 ** (clothes - load))).toFixed(2));
}