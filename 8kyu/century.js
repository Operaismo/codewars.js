function century(year) {
  return year.toString().endsWith("00") ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
}