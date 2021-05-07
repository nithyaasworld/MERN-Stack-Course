//Problem statement: https://gist.github.com/McLarenCollege/f336b98e779f4b57017f5daee99c5f3e
function removeInvalidParentheses(input) {
    let inputArr = input.split("");
    let result = [];
   
    function isValid(inputString) {
        let open = 0;
        for (let i = 0; i < inputString.length; i++){
            if (inputString[i] === "(") open++;
            else if (inputString[i] === ")") {
                if (open < 1) return false;
            }
        }
    }
}
// console.log(removeInvalidParentheses("()())()"));
// console.log(removeInvalidParentheses("(v)())()"));
console.log(removeInvalidParentheses(")()(()("));