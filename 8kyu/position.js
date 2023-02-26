function position(letter) {
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // Convert the character into lowercase
  const myCharLowercase = letter.toLowerCase();

  // Find the position of the char in the alphabet
  const position = letters.indexOf(myCharLowercase) + 1;

  // Return the desired message with the position
  return `Position of alphabet: ${position}`;
}