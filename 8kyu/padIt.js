function padIt(str, n) {
  while (n > 0) {
    n % 2 === 0 ? str = str + '*' : str = '*' + str;
    n--;
  }
  return str;
}