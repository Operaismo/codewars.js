function describeAge(a) {
  return `You're a(n) ${a < 13 ? 'kid' : a < 18 ? 'teenager' : a < 65 ? 'adult' : 'elderly'}`
}
