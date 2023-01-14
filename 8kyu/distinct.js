function distinct(a) {
  return a.filter((item,
    index) => a.indexOf(item) === index);
}