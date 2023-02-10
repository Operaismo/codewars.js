function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);
  return sub == tail;
}