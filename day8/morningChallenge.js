function maxLengthOfSnakeSequence(matrix) {
  let maxPossibleCount = matrix.length + matrix[0].length + 1;
  let maxCount = 0;
  let subCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let subResult = [[i, j]];
      while (subResult.length > 0) {
        let queue = subResult.slice(0);
        subResult = [];
        while (queue.length > 0) {
          let [x, y] = queue.shift();
          if (
            matrix[x] !== undefined &&
            matrix[x][y + 1] !== undefined &&
            Math.abs(matrix[x][y] - matrix[x][y + 1]) === 1
          ) {
            subResult.push([x, y + 1]);
          }
          if (
            matrix[x + 1] !== undefined &&
            matrix[x + 1][y] !== undefined &&
            Math.abs(matrix[x][y] - matrix[x + 1][y]) === 1
          ) {
            subResult.push([x + 1, y]);
          }
        }
        subCount++;
      }
      if (subCount > maxCount) {
        maxCount = subCount;
        if (maxCount === maxPossibleCount) return maxCount;
      }
      subCount = 0;
    }
  }
  return maxCount;
}
console.log(
  maxLengthOfSnakeSequence([
    [7, 5, 2, 3, 1],
    [3, 4, 1, 4, 4],
    [1, 5, 6, 7, 8],
    [3, 4, 5, 8, 9],
    [3, 2, 2, 7, 6],
  ])
);
