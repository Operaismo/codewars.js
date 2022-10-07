function moveZeros(arr) {
  const nonZero = arr.filter(
    (x) =>
      x != 0 ||
      typeof x === 'boolean' ||
      typeof x === 'string' ||
      typeof x === null ||
      Array.isArray(x)
  );
  return [...nonZero, ...new Array(arr.length - nonZero.length).fill(0)];
}
