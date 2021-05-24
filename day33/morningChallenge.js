//Problem statement: https://gist.github.com/McLarenCollege/91227f7116397977deea68c76106644d

function findTheInfectedArea(appleArr, numOfHours) {
    let offsets = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let appleArrCopy;
    while (numOfHours-- > 0) {
        appleArrCopy = JSON.parse(JSON.stringify(appleArr));
        for (let i = 0; i < appleArr.length; i++){
            for (let j = 0; j < appleArr[i].length; j++){
                if (appleArr[i][j] === 'V') {
                    affectTheSurrounding([i, j]);
                }
            }
        }
        appleArr = appleArrCopy;
    }
    return appleArr;

    //helper functions
    function isValid(index) {
        return appleArr[index[0]] && appleArr[index[0]][index[1]];
    }
    function affectTheSurrounding([x, y]) {
        for (let i = 0; i < offsets.length; i++){
            let [a, b] = offsets[i];
            if (isValid([a + x, b + y])) {
                appleArrCopy[a + x][b + y] = 'V';
            }
        }
    }
}
let appleArr = [
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "V", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"]
];
let numOfHours = 1;
console.log(findTheInfectedArea(appleArr, numOfHours));
numOfHours = 2;
console.log(findTheInfectedArea(appleArr, numOfHours));