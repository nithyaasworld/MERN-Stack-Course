function findBallFall(inputArr) {
    let resultArr = [];
    for (let i = 0; i < inputArr[0].length; i++){
        let currPos = [0, i];
        let result = 1;
        while (currPos[0] != inputArr.length) {
            [x, y] = currPos;
            console.log('x and y are: ', x, y);
            if (!inputArr[x]) {
                console.log('line 10 executed');
                result = -1; break;
            } else if (inputArr[x][y] === 1) {
                console.log('line 13 executed');
                if (inputArr[x][y + 1] === 1) {
                    console.log('line 15 executed');
                    currPos = [x + 1, y + 1];
                    continue;
                } else {
                    console.log('line 18 executed');
                    result = -1;
                    break;
                }
            } else if (inputArr[x][y] === -1) {
                console.log('line 22 executed');
                if (inputArr[x][y - 1] === -1) {
                    console.log('line 25 executed');
                    currPos = [x - 1, y];
                    continue;
                } else {
                    console.log('line 28 executed');
                    result = -1;
                    break;
                }
            } else if (inputArr[x][y] === undefined) {
                console.log('line 33 executed');
                result = -1;
                break;
            } 
        }
        console.log("while loop is done");
        resultArr.push(result);
    }
    console.log(resultArr);
}
grid = [[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]];
findBallFall(grid); //should return [1,-1,-1,-1,-1]