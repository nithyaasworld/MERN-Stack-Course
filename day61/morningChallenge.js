//https://gist.github.com/McLarenCollege/c4564f8dfaeaaa835a98039d77ccca69
function findNumOfArithmeticArrays(inputArr) {
    if (inputArr.length < 3) return 0;
    let count = 0;
    let currDiff = Math.abs(inputArr[1] - inputArr[0]);
    let arithmeticArrCount = 0;

    for (let i = 1; i < inputArr.length; i++){
        let newDiff = Math.abs(inputArr[i] - inputArr[i - 1]);
        if (newDiff === currDiff) {
            arithmeticArrCount += count;
            count += 1;
        } else {
            currDiff = newDiff;
            count = 1;
        }
    }
    return arithmeticArrCount;
}
console.log(findNumOfArithmeticArrays([1, 2, 3, 4])); //expected 3
console.log(findNumOfArithmeticArrays([2, 6, 10, 12, 14])); //expected 2