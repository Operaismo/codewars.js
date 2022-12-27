function rentalCarCost(d) {
  let cost = 40 * d;
  if (d >= 3 && d < 7) cost -= 20;
  if (d >= 7) cost -= 50;
  return cost;
}
