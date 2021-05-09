//Problem statement: https://gist.github.com/McLarenCollege/6a0da51ed310d6986d94bb468466744b
function findLargestSumOfStrength(input) {
  let largest = 0;
  let index = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      fromCurrIndex([i, j]);
      leaveOneRow([i, j]);
      leaveOneCol([i, j]);
    }
  }

  function fromCurrIndex([x, y]) {
    let currSum = 0;
    for (let i = x; i < input.length; i++) {
      for (let j = y; j < input[0].length; j++) {
        currSum += input[i][j];
      }
    }
    if (currSum > largest) largest = currSum;
  }

  function leaveOneRow([x, y]) {
    let currSum = 0;
    if (x + 1 < input.length) {
      for (let i = x + 1; i < input.length; i++) {
        for (let j = y; j < input[0].length; j++) {
          currSum += input[i][j];
        }
      }
    }
    if (currSum > largest) largest = currSum;
  }

  function leaveOneCol([x, y]) {
    let currSum = 0;
    if (x + 1 < input[0].length) {
      for (let i = x; i < input.length; i++) {
        for (let j = y + 1; j < input[0].length; j++) {
          currSum += input[i][j];
        }
      }
    }
    if (currSum > largest) largest = currSum;
  }

  return largest;
}
console.log(
  findLargestSumOfStrength([
    [-5, -4, -1],
    [-3, 2, 4],
    [2, 5, 8],
  ])
); // should return 19
console.log(
  findLargestSumOfStrength([
    [-5, -3, 5],
    [-3, 2, 6],
    [4, 5, 8],
  ])
); // should return 23
console.log(
  findLargestSumOfStrength([
    [-20, -19, -18, -17, -16, 10],
    [-19, -18, -17, -16, -15, 11],
    [-18, -17, -16, -15, -14, 12],
    [-17, -16, -15, -14, -13, 13],
    [-16, -15, -14, -13, -12, 14],
    [-15, -14, -13, -12, -11, 15],
    [-14, -13, -13, -12, -11, 16],
    [-14, -14, -14, 10, 11, 102],
  ])
); // should return 193
