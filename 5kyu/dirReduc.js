function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return arr.reduce(
    (acc, cur) => (
      opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc
    ),
    []
  );
}
