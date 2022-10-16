function howMuchILoveYou(nbPetals) {
  const responses = [
    "not at all",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
  ];
  return responses[nbPetals % 6];
}
