// addLength 8kyu!!
function addLength(str) {
  return str.split(' ').map((e) => `${e} ${e.length}`);
}