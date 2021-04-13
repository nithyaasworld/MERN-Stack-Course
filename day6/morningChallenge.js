function knightDialer(n) {
    let dialPad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#']];
    let offsets = [[-1, -2], [1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1]];
    let validMoves = [];
    let visited = Array.from(Array(4), () => Array(3).fill(false));
    console.log(visited);

    for (let i = 0; i < dialPad.length; i++){
        for (let j = 0; j < dialPad[0].length; j++){
            let currentMove = [dialPad[i][j]];
            visited[i][j] = true;
            if (!['*', '#'].includes(currentMove[0])) {
                let queue = []
                for (let k = 0; k < offsets.length; k++){
                    if (dialPad[i + offsets[k][0]] && ![undefined, '*', '#'].includes(dialPad[i + offsets[k][0]][[j + offsets[k][1]]])) {
                        if (visited[i + offsets[k][0]][[j + offsets[k][1]]] === false) {
                            visited[i + offsets[k][0]][[j + offsets[k][1]]] = true;
                            currentMove.push(dialPad[i + offsets[k][0]][[j + offsets[k][1]]]);
                            validMoves.push(currentMove.join(''));
                            currentMove = [dialPad[i][j]];
                        }
                    }
                }
            }
            visited = Array.from(Array(4), () => Array(3).fill(false));
        }
    }
    console.log(validMoves.sort());
}
//knightDialer(1);
knightDialer(2); //[04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]