function periodIsLate(last, today, cycleLength) {
  return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;
}