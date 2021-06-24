var readlineSync = require('readline-sync');

let randomArr = [];
let i = 4;
while (i-- > 0) {
    randomArr.push(Math.ceil(Math.random() * 5));
}
let userChoiceArr;
let hasUserWon = false;
let guessesLeft = 10;
console.log(); 
while (guessesLeft-- > 0) {
    userChoiceArr = readlineSync.question('Guess the 4 digit number: ');
    userChoiceArr = userChoiceArr.split('').map(e => Number(e));

    if (randomArr.toString() === userChoiceArr.toString()) {
        hasUserWon = true;
        console.log("Congrats! You won!");
        break;
    } else {
        console.log(calcScore(randomArr, userChoiceArr));
        console.log(`${guessesLeft} more guesses left.\n`);
    }
}
if (!hasUserWon) {
    console.log('Sorry you failed to guess. The Right answer was ' + randomArr.join(''));
}
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