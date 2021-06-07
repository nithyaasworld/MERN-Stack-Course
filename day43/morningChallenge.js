//Problem statement: https://gist.github.com/McLarenCollege/97e06b239563a96ef4bd9de382748026

function findAverageWaitTime(inputArr) {
    if (inputArr.length === 0) return 0;
    let currFreeTime = inputArr[0][0] + inputArr[0][1];
    let waitTime = [inputArr[0][1]];
   
    for (let i = 1; i < inputArr.length; i++) {
        let currWaitTime;
        if (currFreeTime < inputArr[i][0]) {
            currWaitTime = inputArr[i][1]
            currFreeTime = inputArr[i][0] + inputArr[i][1];
        } else {
            currWaitTime = (currFreeTime - inputArr[i][0]) + inputArr[i][1];
            currFreeTime += inputArr[i][1];
        }
        waitTime.push(currWaitTime);
    }
    return waitTime.reduce((a, b) => a + b)/waitTime.length;
}
console.log(findAverageWaitTime([[1, 2], [2, 5], [4, 3]]));
console.log(findAverageWaitTime([[5, 2], [5, 4], [10, 3], [20, 1]]));
console.log(findAverageWaitTime([[5, 2]]));
console.log(findAverageWaitTime([]));