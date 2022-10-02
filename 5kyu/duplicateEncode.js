const duplicateEncode = (word) => {
  return word
    .toLowerCase()
    .replace(/./gu, (c) =>
      [...word.toLowerCase()]
        .reduce((map, c) => map.set(c, (map.get(c) ?? 0) + 1), new Map())
        .get(c) === 1
        ? '('
        : ')'
    );
};
