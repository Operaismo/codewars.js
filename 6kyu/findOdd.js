function findOdd(A) {
  // Count occurrences of each item
  var occurrences = A.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  console.log("occurrences:", occurrences);
  return Object.keys(occurrences).filter(n => freq[n] % 2);
}