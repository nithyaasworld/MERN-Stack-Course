// https://gist.github.com/McLarenCollege/fa1b35115ce47d5339d3f29d8d5a515b
function findGamePoints(throws) {
    throws.sort((a, b) => a - b);
    let threes;
    for (let i = 0; i < 3; i++){
        if (['111', '222', '333', '444', '555', '666'].includes(throws.slice(i, i + 3).join(''))) {
            threes = throws[i];
            break;
        }
    }
    let totalPoint = 0;
    if (threes) {
        switch (threes) {
            case 1: totalPoint += 1000; break;
            case 6: totalPoint += 600; break;
            case 5: totalPoint += 500; break;
            case 4: totalPoint += 400; break;
            case 3: totalPoint += 300; break;
            case 2: totalPoint += 200; break;
        }
    }
    //remove threes from throws-Array
    let throwsRemoved = 0;
    for (let i = 0; i < throws.length; i++){
        if (throws[i] === threes) {
            throws.splice(i, 1);
            throwsRemoved++;
            i--;
        }
        if (throwsRemoved === 3) break;
    }
    for (let i = 0; i < throws.length; i++){
        if (throws[i] === 1) totalPoint += 100;
        else if (throws[i] === 5) totalPoint += 50;
    }
    return totalPoint;
}
console.log(findGamePoints([5, 1, 3, 4, 1]));
console.log(findGamePoints([1, 1, 1, 3, 1]));
console.log(findGamePoints([2, 4, 4, 5, 4]));