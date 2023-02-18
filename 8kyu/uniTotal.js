function uniTotal (string) {
  return !string ? 0 : string.split("").map(c => c.charCodeAt(0)).reduce((a, b) => a + b);
}