function pigIt(str) {
  const latinify = (word) => {
    return word.match(/[A-z]/i)
      ? `${word.substr(1)}${word.substr(0, 1)}ay`
      : word;
  };
  return str.split(' ').map(latinify).join(' ');
}
