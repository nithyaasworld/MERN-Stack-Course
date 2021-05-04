//Problem statement: https://gist.github.com/McLarenCollege/f336b98e779f4b57017f5daee99c5f3e
function removeInvalidParentheses(input) {
    let inputArr = input.split("");
    let result = [];
    let toBeRemovedOpen = [];
    let toBeRemovedClose = [];

    let openBracketPositions = [];
    let closeBracketPositions = [];

    for (let i = 0; i < inputArr.length; i++){
        if (input[i] === "(") {
            toBeRemovedOpen.push(i);
            openBracketPositions.push(i);
        } else if (input[i] === ")") {
            closeBracketPositions.push(i);
            if (toBeRemovedOpen.length > 0) {
                toBeRemovedOpen.pop();
            } else {
                toBeRemovedClose.push(i);
            }
        }
    }


    if (toBeRemovedOpen.length > 0) {
        console.log(openBracketPositions);
    }
    console.log(toBeRemovedOpen);
    console.log(toBeRemovedClose);
}
// console.log(removeInvalidParentheses("()())()"));
// console.log(removeInvalidParentheses("(v)())()"));
console.log(removeInvalidParentheses(")()(()("));