function seatsInTheater(nCols, nRows, col, row) {
  let colsBehind = nCols - col + 1;
  let rowsBehind = nRows - row;
  return colsBehind * rowsBehind;
}