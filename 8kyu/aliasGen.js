// aliasGen 8kyu!!!
function aliasGen(first, last) {
  return first[0].match(/[a-zA-Z]/i) && last[0].match(/[a-zA-Z]/i)
    ? `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
    : 'Your name must start with a letter from A - Z.';
}