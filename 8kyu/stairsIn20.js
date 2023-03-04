function stairsIn20(stairs) {
  return stairs.reduce((steps, day) => steps.concat(day)).reduce((sum, count) => sum + count) * 20;
}