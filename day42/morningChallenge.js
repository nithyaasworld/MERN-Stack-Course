function findBallFall(inputArr) {
    let resultArr = [];
    for (let i = 0; i < inputArr[0].length; i++){
        let currPos = [0, i];
        let result = 1;
        while (currPos[0] != inputArr.length) {
            [x, y] = currPos;
            // console.log('x and y are: ', x, y);
            if (!inputArr[x]) {
                console.log('line 10 executed');
                result = -1; break;
            } else if (inputArr[x][y] === 1) {
                // console.log('line 13 executed');
                if (inputArr[x][y + 1] === 1) {
                    // console.log('line 15 executed');
                    currPos = [x + 1, y + 1];
                    continue;
                } else {
                    // console.log('line 18 executed');
                    result = -1;
                    break;
                }
            } else if (inputArr[x][y] === -1) {
                // console.log('line 22 executed');
                if (inputArr[x][y - 1] === -1) {
                    // console.log('line 25 executed');
                    currPos = [x + 1, y -1];
                    continue;
                } else {
                    // console.log('line 28 executed');
                    result = -1;
                    break;
                }
            } else if (inputArr[x][y] === undefined) {
                // console.log('line 33 executed');
                result = -1;
                break;
            }
        }
        // console.log("while loop is done");
        if (result === -1) {
            resultArr.push(result);
        } else {
            resultArr.push(currPos[1]);
        }
    }
    return resultArr;
}
grid = [[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]];
console.log(findBallFall(grid)); //should return [1,-1,-1,-1,-1]
grid2 = [[-1]]; //should return [-1]
console.log(findBallFall(grid2));
grid3 = [[1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1]];
console.log(findBallFall(grid3)); //should return [0,1,2,3,4,-1]