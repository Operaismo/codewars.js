function sumArray(array) {
  if (array && array.length > 1) {
    const sortedArray = array.sort((a, b) => a - b).slice(1, -1);
    return sortedArray.reduce((acc, cur) => acc + cur, 0);
  }

  return 0;
}
