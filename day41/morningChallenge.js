//https://gist.github.com/McLarenCollege/15bd572e41ab215939c2a66dc9fdaad3
function nBonacciRatio(n) {
    let previousTen = [0, 1];
    for (let i = 2; i < 10; i++){
        previousTen[i] = n * previousTen[i - 1] + previousTen[i - 2];
    }
    let ratioOfLastTen = [];
    for (let i = 2; i < previousTen.length; i++){
       ratioOfLastTen.push(previousTen[i] / previousTen[i - 1]);
    }
    while (!ratioOfLastTen.every(x => Number(x.toFixed(16)) === Number(ratioOfLastTen[0].toFixed(16)))) {
        previousTen = previousTen.slice(-2);
        for (let i = 2; i < 10; i++){
            previousTen[i] = n * previousTen[i - 1] + previousTen[i - 2];
        }
        ratioOfLastTen = [];
        findRatioofLastTen(previousTen);
    }
    function findRatioofLastTen(inputArr) {
        for (let i = 2; i < inputArr.length; i++){
            ratioOfLastTen.push(inputArr[i] / inputArr[i - 1]);
         }
    }
    return ratioOfLastTen[0];
}
console.log(nBonacciRatio(1)); //should return 1.61803
console.log(nBonacciRatio(2)); //should return 2.4142
console.log(nBonacciRatio(3)); // should return 3.302775637731995
console.log(nBonacciRatio(7)); // should return 7.140054944640259
console.log(nBonacciRatio(50));