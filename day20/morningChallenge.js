//Problem statement: https://gist.github.com/McLarenCollege/f336b98e779f4b57017f5daee99c5f3e
function removeInvalidParentheses(input) {
    if (isValid(input)) return [input];
    let inputArr = input.split("");
    let result = [];
    for (let i = 0; i < inputArr.length; i++){
        let inputCopy = input.split("");
        inputCopy.splice(i, 1);
        result.push(inputCopy.join(''));
    }
    while (result.length > 0) {
        if (result.some((item) => isValid(item))) {
            break;
        }
        let subResult = [...result];
        result = [];
        while (subResult.length > 0) {
            let item = subResult.pop().split('');
            for (let i = 0; i < item.length; i++){
                let itemCopy = [...item];
                itemCopy.splice(i, 1);
                result.push(itemCopy.join(''));
            }
        }
    }
    return [... new Set(result.filter((item) => isValid(item)))];
    function isValid(inputString) {
        if (inputString === "") return false;
        let open = 0;
        for (let i = 0; i < inputString.length; i++){
            if (inputString[i] === "(") open++;
            else if (inputString[i] === ")") {
                open--;
                if (open < 0) return false;
            } 
        }
        return open === 0;
    }
}
console.log(removeInvalidParentheses("()())()"));
console.log(removeInvalidParentheses("(v)())()"));
console.log(removeInvalidParentheses(")()(()("));
console.log(removeInvalidParentheses("(((("));