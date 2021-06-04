function findBallFall(inputArr) {
  let resultArr = [];
  for (let i = 0; i < inputArr[0].length; i++) {
    let currPos = [0, i];
    let result = 1;
    while (currPos[0] != inputArr.length) {
      [x, y] = currPos;
      if (!inputArr[x]) {
        result = -1;
        break;
      } else if (inputArr[x][y] === 1) {
        if (inputArr[x][y + 1] === 1) {
          currPos = [x + 1, y + 1];
        } else {
          result = -1;
          break;
        }
      } else if (inputArr[x][y] === -1) {
        if (inputArr[x][y - 1] === -1) {
          currPos = [x + 1, y - 1];
        } else {
          result = -1;
          break;
        }
      } else if (inputArr[x][y] === undefined) {
        result = -1;
        break;
      }
    }
    result === -1 ? resultArr.push(result) : resultArr.push(currPos[1]);
  }
  return resultArr;
}
grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];
console.log(findBallFall(grid)); //should return [1,-1,-1,-1,-1]
grid2 = [[-1]]; //should return [-1]
console.log(findBallFall(grid2));
grid3 = [
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
];
console.log(findBallFall(grid3)); //should return [0,1,2,3,4,-1]
