function checkNums(arr, k) {
    if (arr.length % 4 !== 0) return false;
    let subArrayCount = arr.length / k;
    let allCombinations = [];
    allCombinations.push(Array.from(Array(subArrayCount), () => Array(1)));
    
    // while (allCombinations.every(item => item.every(subItem => subItem.length === k))) {
    let subCombination = allCombinations.shift();
    cons
    
    let unUsedElements = findUnusedElements(subCombination, arr.length);
    console.log(unUsedElements);
        // for (let i = 0; i < subCombinations.length;  i++){
        //     for (let j = 0; j < subCombinations[0].length; j++){
        //         unUsedElements.splice(unUsedElements.indexOf(subCombinations[i][j]), 1);
        //     }
        // }
        // console.log(unUsedElements);
        // for (let i = 0; i < arr.length; i++){
        //     console.log(subCombinations);
        // }
    // }
}
function findUnusedElements(subCombination, lengthOfArray) {
    let unUsedElements = new Array(lengthOfArray).fill().map((_, i) => i);
    for (let i = 0; i < subCombination.length; i++){
        for (let j = 0; j < subCombination[0].length; j++){
            unUsedElements.splice(unUsedElements.indexOf(subCombination[i][j]), 1);
        }
    }
    console.log(unUsedElements);
    // let unUsedElements = new Array(arr.length).fill().map((_, i) => i);
    // for (let i = 0; i < subCombinations.length;  i++){
    //     for (let j = 0; j < subCombinations[0].length; j++){
    //         unUsedElements.splice(unUsedElements.indexOf(subCombinations[i][j]), 1);
    //     }
    // }
    // console.log(unUsedElements);
}
console.log(checkNums([1, 2, 3, 3, 4, 4, 5, 6], 4));