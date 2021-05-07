//Problem statement: https://gist.github.com/McLarenCollege/6a0da51ed310d6986d94bb468466744b

function findLargestSumOfStrength(input) {
    let largest = 0;
    let index = 0;
    
    while(index < input.length || index < input[0].length) {
        fromCurrIndex(index);
        leaveOneRow(index);
        leaveOneCol(index);
        index++;
    }

    function fromCurrIndex(index) {
        let currSum = 0;
        for (let i = index; i < input.length; i++){
            for (let j = index; j < input[0].length; j++){
                currSum += input[i][j];
            }
        }
        if (currSum > largest) largest = currSum;
    }

    function leaveOneRow(index) {
        let currSum = 0;
        if (index + 1 < input.length) {
            for (let i = index+1; i < input.length; i++){
                for (let j = index; j < input[0].length; j++){
                    currSum += input[i][j];
                }
            }
        }
        if (currSum > largest) largest = currSum;
    }

    function leaveOneCol(index) {
        let currSum = 0;
        if (index + 1 < input[0].length) {
            for (let i = index; i < input.length; i++){
                for (let j = index+1; j < input[0].length; j++){
                    currSum += input[i][j];
                }
            }
        }
        if (currSum > largest) largest = currSum;
    }

    return largest;
}
console.log(findLargestSumOfStrength([[-5, -4, -1], [-3, 2, 4], [2, 5, 8]])); // should return 19
console.log(findLargestSumOfStrength([[-5, -3, 5], [-3, 2, 6], [4, 5, 8]])); // should return 23