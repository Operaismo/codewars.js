function correct(string)
{
  const corrections = {
    "5": "S",
    "0": "O",
    "1": "I",
  };

  return string.replace(/[501]/gi, (char) => corrections[char]);
}