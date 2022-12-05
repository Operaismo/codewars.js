const flip = (d, a) => {
  //TODO
  return d == 'R' ? a.sort((a, b) => a - b) : d == 'L' ? a.sort((a, b) => b - a) : 'INVALID';
}