//https://gist.github.com/McLarenCollege/1b1c2a5bc69689b6af08ff352edff8ca

function calcScore(input, guess){
    let correctPos = 0;
    let incorrectPos = 0;
    let inputLeft = [];
    let guessLeft = [];
    for(let i=0; i<input.length; i++){
        if(input[i] === guess[i]) correctPos++;
        else {
            inputLeft.push(input[i]);
            guessLeft.push(guess[i]);
        }
    }
    for(let i=0; i<guessLeft.length; i++){
        if(inputLeft.includes(guessLeft[i])){
            incorrectPos++;
            let itemToDel = inputLeft.findIndex(x => x===guessLeft[i]);
            inputLeft.splice(itemToDel,1);
        }
    }
    return { correctPos: correctPos, incorrectPos: incorrectPos};
}
console.log(calcScore([4, 4, 1, 2], [4, 1, 0, 2])); // Should return { correctPos: 2, incorrectPos: 1 }
console.log(calcScore([4, 4, 1, 2], [0, 0, 0, 0])); // Should return { correctPos: 0, incorrectPos: 0 }
console.log(calcScore([4, 4, 1, 2], [4, 4, 1, 2])); // Should return { correctPos: 4, incorrectPos: 0 }