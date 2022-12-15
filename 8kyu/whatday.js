function whatday(num) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][num - 1] || "Wrong, please enter a number between 1 and 7";
}