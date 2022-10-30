function between(a, b) {
  return Array.from(new Array(b-a + 1), x => a++);
}