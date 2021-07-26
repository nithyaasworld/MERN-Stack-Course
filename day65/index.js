//https://gist.github.com/McLarenCollege/6647a938a4ac605bf2188baf92a94a6c
function findMaxMatchingSubset(inputArr, m, n) {
    let result = inputArr.length;
    if (checkIfValid(inputArr.join(''))) return result;
    let allSubsets = findAllSubset(inputArr).filter(x => x.length > 0);
    
    allSubsets.sort((a, b) => b.length - a.length);
    console.log(allSubsets);
    for (let i = 0; i < allSubsets.length; i++) {
        for (let j = 0; j < allSubsets[i].length; j++) {
            let ones = 0, zeroes = 0;
            for (let k = 0; k < allSubsets[i][j].length; k++) {
                inputArr[allSubsets[i][j][k] === 0] ? zeroes++ : ones++;
                if (zeroes > m || ones > n) break;
            }
            if (zeroes <= m && ones <= n) return allSubsets[i].length;
        }
    }

    return 0;
    function checkIfValid(inputStr) {
        let ones = 0;
        let zeroes = 0;
        for (let i = 0; i < inputStr.length; i++){
            inputStr[i] == 1 ? ones++ : zeroes++ ;
            if (ones > m || zeroes > n) return false;
        }
        return true;
    }
    function findAllSubset(inputArr) {
        let allSubsets = [];
        let firstSubset = []
        for (let i = 0; i < inputArr.length; i++){
            for (let j = 0; j < inputArr.length; j++){
                if (i === j) continue;
                firstSubset.push([i, j].sort((a,b) => a-b));
            }
        }
        // allSubsets = [removeDuplicates(firstSubset)];
        console.log(firstSubset);
        let currK = 2;
        while (currK++ <= inputArr.length) {
            let currAllSubset = [];
            allSubsets.slice(-1)[0].forEach(subSet => {
                inputArr.forEach((input, i) => {
                    if(!subSet.includes(i))
                    currAllSubset.push([...subSet, i].sort((a, b) => a - b));
                });
            });
            allSubsets.push(removeDuplicates(currAllSubset));
        }
        // if (k === 4) console.log(allSubsets);
        return allSubsets;
    }
    function removeDuplicates(givenArr) {
        givenArr.sort((a, b) => JSON.stringify(a) < JSON.stringify(b) ? -1 : JSON.stringify(a) >JSON.stringify(b) ? 1 : 0);
        let resultArr = [];
        for (let i = 0; i < givenArr.length; i++){
            let isDuplicate = false;
            for (let j = i+1; j < givenArr.length; j++){
                if (JSON.stringify(givenArr[j]) === JSON.stringify(givenArr[i])) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) resultArr.push(givenArr[i]);
        }
        if (JSON.stringify(resultArr[resultArr.length - 1]) === JSON.stringify(resultArr[resultArr.length - 2])) resultArr.pop();
        return resultArr;
    }
}
// console.log(findMaxMatchingSubset(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxMatchingSubset(["10","0","1"], 1, 1))