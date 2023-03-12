const changeMe = moneyIn => {
  if (moneyIn === '£5') return `${'20p '.repeat(5 * 5).trimRight()}`;
  if (moneyIn === '£2') return `${'20p '.repeat(5 * 2).trimRight()}`;
  if (moneyIn === '£1') return `${'20p '.repeat(5 * 1).trimRight()}`;
  if (moneyIn === '50p') return `${'20p '.repeat(2).trimRight()} 10p`;
  if (moneyIn === '20p') return `${'10p '.repeat(2).trimRight()}`;

  return moneyIn;
}