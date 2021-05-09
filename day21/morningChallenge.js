function checkWord(testBoard, word) {
    let k = 0;
    let visited = Array.from(Array(testBoard.length), () => new Array(testBoard[0].length).fill(false));
    let offsets = [[0, 1], [1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1], [-1,0], [0,-1]];
  
    for(let i=0; i<testBoard.length; i++){
        for(let j=0; j<testBoard[0].length; j++){
            if(testBoard[i][j] === word[0]){  
                visited[i][j] = true;
                if(startSearch([i,j], 1, visited)){
                    return true;
                }else{
                    visited[i][j] = false;
                }
            }
        }
    }
    return false;
  
    function startSearch([i,j], k, visited){
        if(k=== word.length) return true;
        let queue = [];   
            for(let l=0; l<offsets.length; l++){
                if(testBoard[i+offsets[l][0]] 
                    && testBoard[i+offsets[l][0]][j+offsets[l][1]] === word[k] 
                    && visited[i+offsets[l][0]][j+offsets[l][1]] === false){
                    queue.push([i+offsets[l][0],j+offsets[l][1]]);
                }
            }
        for(let m=0; m<queue.length; m++){
            let [currItemX, currItemY] = queue[m];
            visited[currItemX][currItemY] = true;
            if(startSearch([currItemX,currItemY], k+1, visited)){
                return true;
            }else{
                visited[currItemX][currItemY] = false;
            }
        }
        return false;
    }
}
let testBoard = [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ];
console.log(checkWord(testBoard, 'EAR')); // should return true
console.log(checkWord(testBoard, 'EARS')); // should return false
console.log(checkWord(testBoard, 'BAILER')); // should return true
console.log(checkWord(testBoard, 'RSCAREIOYBAILNEA')); // should return true