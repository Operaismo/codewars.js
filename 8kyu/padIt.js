function padIt(str, n) {
  while (n > 0) {
    // if (n % 2 === 0) {
    //   str = str + '*';
    // } else {
    //   str = '*' + str;
    // }
    n % 2 === 0 ? str = str + '*' : str = '*' + str;
    n--;
  }
  return str;
}