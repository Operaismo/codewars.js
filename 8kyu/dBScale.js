function dBScale(intensity) {
  return Math.round(10 * Math.log10(intensity / 10 ** -12));
}