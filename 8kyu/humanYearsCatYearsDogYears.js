var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears, dogYears;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  }
  if (humanYears > 2) {
    catYears = 24 + 4 * (humanYears - 2);
    dogYears = 24 + 5 * (humanYears - 2);
  }
  console.log(
    humanYears,
    "human years is",
    catYears,
    "cat years and",
    dogYears,
    "dog years."
  );
  return [humanYears, catYears, dogYears];
};
