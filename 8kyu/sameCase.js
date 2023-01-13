function sameCase(a, b) {
  if (a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) {
    return -1;
  } else if (a == a.toUpperCase() && b == b.toUpperCase() || a == a.toLowerCase() && b == b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}
