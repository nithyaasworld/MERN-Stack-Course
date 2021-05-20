function countPatternsFrom(startingPoint, n){
    let lock = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
    let offsets = [[0,-1], [-1,-1], [-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [1,-2], [2, -1], [-2,1], [-1,2], [-1,-2], [-2,-1], [2,1], [1,2]];
    let passingOverOffsets = [
        //in the format [element to pass over, element to reach]
        [[0,1], [0,2]], //left to right
        [[1,1], [2,2]], //left top to right bottom
        [[1,0], [2,0]], //top to bottom
        [[1,-1], [2,-2]], //right top to left bottom
        [[-1,0], [-2,0]], //bottom to top
        [[-1,-1], [-2, -2]], //right bottom to left top 
        [[-1,1], [-2,2]], //left bottom to right top 
        [[0,-1], [0,-2]], //right to left
    ]; 
    let results = [startingPoint];
    while(--n > 0){
        findAllPossibleCombination();
    }
    return results.length;
    
    function findAllPossibleCombination(){
        let subResults = [];
        for(let i=0; i<results.length; i++){
            let result = results[i];
            let currStarting = findTheIndex(result[result.length-1]);
            for(let i=0; i < offsets.length; i++){
                let x = currStarting[0]+offsets[i][0];
                let y = currStarting[1]+offsets[i][1];
                if(isItValid([x,y])){
                    let itemInValidation = lock[x][y];
                    if (result.indexOf(itemInValidation) === -1){
                        let resultCopy = result + lock[x][y];
                        subResults.push(resultCopy);
                    }
                }
            }
            passingOverOffsets.forEach(offset => {
                //middle element
                let x = currStarting[0]+offset[0][0];
                let y = currStarting[1]+offset[0][1];
                if(isItValid([x,y]) && result.indexOf(lock[x][y]) !== -1){
                    //corner element
                    let a = currStarting[0]+offset[1][0];
                    let b = currStarting[1]+offset[1][1];
                    if(isItValid([a,b]) && result.indexOf(lock[a][b]) === -1){
                        let resultCopy = result + lock[a][b];
                        subResults.push(resultCopy);
                    }
                }
            })
        }
        results = subResults;
    }
    function findTheIndex(startingPoint){
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(lock[i][j] === startingPoint){
                    return [i,j];
                }
            }
        }
    }
    function isItValid([x,y]){
        if(lock[x] && lock[x][y]){
            return true;
        }else return false;
    }
}
// console.log(countPatternsFrom("D", 2)); // Should return 7
// console.log(countPatternsFrom('D', 3)); // Should return 37
console.log(countPatternsFrom('E', 4)); // Should return 256
// console.log(countPatternsFrom("C", 2)); // Should return 5
console.log(countPatternsFrom('E', 8)); // Should return 23280