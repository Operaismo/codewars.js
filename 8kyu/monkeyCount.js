function monkeyCount(n) {
  return [...Array(n).keys()].map(i => i + 1);
}