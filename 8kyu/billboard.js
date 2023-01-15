function billboard(name, price = 30) {
  let q = 0;
  for (let i = 1; i <= name.length; i++) { q += price };
  return q;
} 