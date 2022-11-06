function validateBattlefield(field) {
  let ships = {
    battleship: {
      allowed: 1,
    },
    crusiers: {
      allowed: 2,
    },
    destroyers: {
      allowed: 3,
    },
    subs: {
      allowed: 4,
    },
  };

  const getShape = (x, y) => {
    let shape = [{ x, y }];

    if (field[y + 1][x]) {
      while (field[shape[shape.length - 1].y + 1][x] === 1) {
        field[shape[shape.length - 1].y + 1][x] = 0;
        shape.push({ y: shape[shape.length - 1].y + 1, x });
      }
    } else if (field[y][x + 1]) {
      while (field[y][shape[shape.length - 1].x + 1] === 1) {
        field[y][shape[shape.length - 1].x + 1] = 0;
        shape.push({ y, x: shape[shape.length - 1].x + 1 });
      }
    }

    return shape;
  };

  const touch = (a, b) => {
    if (a === b) return false;

    return a.some(({ x: ax, y: ay }) =>
      b.some(({ x: bx, y: by }) => {
        for (let y = ay - 1; y <= ay + 1; y++) {
          for (let x = ax - 1; x <= ax + 1; x++) {
            if (x === ax && y === ay) {
              continue;
            }

            if (x === bx && y === by) {
              return true;
            }
          }
        }
        return false;
      })
    );
  };

  const shapes = [];
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
      if (field[y][x]) {
        const shape = getShape(x, y);
        shapes.push(shape);

        switch (shape.length) {
          case 4:
            ships.battleship.present = ships.battleship.present
              ? ships.battleship.present + 1
              : 1;
            break;
          case 3:
            ships.crusiers.present = ships.crusiers.present
              ? ships.crusiers.present + 1
              : 1;
            break;
          case 2:
            ships.destroyers.present = ships.destroyers.present
              ? ships.destroyers.present + 1
              : 1;
            break;
          case 1:
            ships.subs.present = ships.subs.present
              ? ships.subs.present + 1
              : 1;
            break;
        }
      }
    }
  }

  if (shapes.some((shapeA) => shapes.some((shapeB) => touch(shapeA, shapeB))))
    return false;

  return Object.values(ships).every(
    ({ present, allowed }) => present === allowed
  );
}
console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
