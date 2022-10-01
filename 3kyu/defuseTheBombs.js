// Defuse all of the Bombs!
// 10
Bomb.diffuse(Bomb.key);

// 9
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();

// 8
Bomb.diffuse(BombKey);

// 7
const diffuseTheBomb = () => true;
Bomb.diffuse();

// 6
Bomb.diffuse(3.14159);

// 5
const date = new Date();
date.setFullYear(2018);
Bomb.diffuse(date);

// 4
Bomb.diffuse(Object.freeze({ key: 43 }));

// 3
const obj = {
  valueOf: () => {
    if (!this.used) {
      this.used = true;
      return 9;
    }
    return 11;
  },
};
Bomb.diffuse(obj);

// 2
Math.random = function () {
  return {
    valueOf: () => {
      if (!this.used) {
        this.used = true;
        return 0.5;
      }
      return 1;
    },
  };
};
Bomb.diffuse(42);

// 1
Array.prototype.valueOf = function () {
  return this.reduce((sum, cur) => sum + cur);
};
Bomb.diffuse(new Buffer('yes').toString('base64'));

console.log(Bomb);
