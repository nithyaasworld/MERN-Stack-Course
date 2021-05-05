function checkWord(testBoard, word) {
    let k = 0;
    let visited = Array.from(Array(testBoard.length), () => new Array(testBoard[0].length).fill(false));
    let offsets = [[0, 1], [1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
  
    for (let i = 0; i < testBoard.length; i++){
        for (let j = 0; j < testBoard[0].length; j++){
            if (testBoard[i][j] === word[k]) {
                visited[i][j] = true;
                let currItem = [i, j];
                k++;
                // while (k < word.length) {
                //     let found = false;
                //     for (let m = 0; m < offsets.length; m++){
                //         [offsetX, offsetY] = offsets[m];
                //         if (testBoard[offsetX + currItem[0]] && testBoard[offsetX + currItem[0]][offsetY + currItem[1]] === word[k]) {
                //             visited[offsetX + currItem[0]][offsetY + currItem[1]] = true;
                //             currItem = [offsetX + currItem[0], offsetY + currItem[1]]
                //             found = true;
                //             break;
                //         }
                //     }
                //     k++;
                //     if (k >= word.length && found) {
                //         console.log(visited);
                //         return true;
                //     }
                // }
                
            }
        }
    }
    return false;
}
let testBoard = [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ];
console.log(checkWord(testBoard, 'EAR'));
console.log(checkWord(testBoard, 'EARS')); // should return false
console.log(checkWord(testBoard, 'BAILER')); // should return true
console.log(checkWord(testBoard, 'RSCAREIOYBAILNEA')); // should return true