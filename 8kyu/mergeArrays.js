function mergeArrays(arr1, arr2) {
  return arr1.length == 0 && arr2.length == 0 ? [] : Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);
}