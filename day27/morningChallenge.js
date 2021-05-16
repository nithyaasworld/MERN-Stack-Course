//Problem statement: https://gist.github.com/McLarenCollege/235216b55c8a96c3e8eb8d4efeaef5ee

function chooseBestSum(distanceToTravel, numOfCities, distanceList) {
    if (distanceList.length < numOfCities) return null;
    let allCombination = findAllCombination(distanceList, numOfCities);
    let result = 0;
    for (let i = 0; i < allCombination.length; i++){
        let currCombination = allCombination[i];
        let currSum = 0;
        for (let k = 0; k < currCombination.length; k++) {
            currSum += distanceList[currCombination[k]];
        }
        if (currSum < distanceToTravel && result < currSum) result = currSum;
        if (currSum === distanceToTravel) return currSum;
    }
    return result === 0 ? null : result;
    function findAllCombination(distanceList, numOfCities){
        if (numOfCities === 1) {
            return distanceList.map((el,i) => [i]);
        }
        if (numOfCities > 1) {
            let lastCombination = findAllCombination(distanceList, numOfCities - 1);
            let subCombination = [];
            lastCombination.forEach((el) => {
                distanceList.forEach((distance, j) => {
                    if (!el.includes(j)) {
                        let elCopy = el.slice(0);
                        elCopy.push(j);
                        subCombination.push(elCopy);
                    }
                })
            });
            return subCombination;
        }
    }
}

ts = [50, 55, 56, 57, 58] 
console.log(chooseBestSum(163, 3, ts)) //-> 163

xs = [50] 
console.log(chooseBestSum(163, 3, xs)) //-> null

ys = [91, 74, 73, 85, 73, 81, 87] 
console.log(chooseBestSum(230, 3, ys)) //-> 228