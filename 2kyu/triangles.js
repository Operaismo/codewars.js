const colors = ["R", "G", "B"];

function combineColors(color1, color2) {
  if (color1 === color2) {
    return color1;
  }

  return colors.find(color => color !== color1 && color !== color2);
}

function log3(x) {
  return Math.log(x) / Math.log(3);
}

function triangle(row) {
  const { length } = row;

  if (length === 1) {
    return row[0];
  }

  const n = Math.floor(log3(length - 1));
  const idealLength = Math.pow(3, n) + 1;

  if (length === idealLength) {
    return combineColors(row[0], row[length - 1]);
  }

  const size = length - idealLength + 1;
  const firstColor = triangle(row.substring(0, size));
  const secondColor = triangle(row.substring(length - size));

  return combineColors(firstColor, secondColor);
}

const testCases = [
  ["B", "B"],
  ["GB", "R"],
  ["RRR", "R"],
  ["RGBG", "B"],
  ["RBRGBRB", "G"],
  ["RBRGBRBGGRRRBGBBBGG", "G"],
];

testCases.forEach(([row, expected]) => {
  const color = triangle(row);

  if (color === expected) {
    console.log(`\x1b[32mOK  \x1b[0m ${row}`);
  }
  else {
    console.log(`\x1b[31mFAIL\x1b[0m ${row}: expected \x1b[32m${expected}\x1b[0m but got \x1b[31m${color}\x1b[0m instead`);
  }
});