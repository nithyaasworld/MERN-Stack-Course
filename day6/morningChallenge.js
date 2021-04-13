function knightDialer(n) {
    let dialPad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#']];
    let offsets = [[-1, -2], [1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, -1], [2, 1]];
    let validMoves = new Set();

    for (let i = 0; i < dialPad.length; i++){
        for (let j = 0; j < dialPad[0].length; j++){
            if (!['*', '#'].includes(dialPad[i][j])) {
                let queue = [[dialPad[i][j]]];
                while (queue.length > 0) {
                    let currItem = queue.shift();
                    if (currItem.length === n) {
                        validMoves.add(currItem.join(''));
                        continue;
                    }
                    let lastMoveItem = currItem[currItem.length-1];
                    let lastItemPos;
                    for (let m = 0; m < dialPad.length; m++){
                        for (let n = 0; n < dialPad[0].length; n++){
                            if (dialPad[m][n] === lastMoveItem) {
                                lastItemPos = [m, n];
                                break;
                            }
                        }
                    }
                    for (let k = 0; k < offsets.length; k++){
                        if (dialPad[lastItemPos[0] + offsets[k][0]] && ![undefined, '*', '#'].includes(dialPad[lastItemPos[0] + offsets[k][0]][[lastItemPos[1] + offsets[k][1]]])) {
                            let itemToPush = [...currItem, dialPad[lastItemPos[0] + offsets[k][0]][lastItemPos[1] + offsets[k][1]]];
                                queue.push(itemToPush);
                         }
                    }
                }
            }
        }
    }
    return validMoves.size;
}
console.log(knightDialer(1)); //should return 10
console.log(knightDialer(2)); //should return 20
console.log(knightDialer(4)); //should return 104