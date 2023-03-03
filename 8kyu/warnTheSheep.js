function warnTheSheep(queue) {
  return queue.reverse()[0] === 'wolf'
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;
}