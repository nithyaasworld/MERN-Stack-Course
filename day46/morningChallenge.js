//https://gist.github.com/McLarenCollege/93db67b2e77ae8315aeb85e28cab66c4

function canThisPlayerWin(n) {
    if (n === 1) return true;

    let currTurn = "alice";
    while (n > 1) {
        if (Math.sqrt(n) % 1 === 0) {
            if (canThisPlayerWin(n - Math.sqrt(n))) {
                n--;
            } else {
                n = n - Math.sqrt(n);
            }
        } else {
            n--;
        }
        if (currTurn === "alice") {
            currTurn = "bob";
        } else {
            currTurn = "alice";
        }
    }
    return currTurn === "alice" ? true : false;
}
// console.log(canThisPlayerWin(17));

// function findHighestPerfectSquare(n) {

// }