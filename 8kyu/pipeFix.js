function pipeFix(numbers) {
  return Array.from(
    { length: numbers.slice(-1) - numbers[0] + 1 },
    (_, index) => index + numbers[0]
  );
}
