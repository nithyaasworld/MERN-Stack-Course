//problem statement: https://gist.github.com/McLarenCollege/b232aad0b5d1d1122a78b8d13431d23f
function encode(input){
    let combination = [input];
    let currItem = input;
    for(let i=0; i<input.length-1; i++){
        currItem = currItem[currItem.length - 1] + currItem.substring(0,currItem.length - 1);
        combination.push(currItem);
    }
    combination.sort();
    let result = "";
    combination.forEach((str) => result += str[str.length - 1]);
    return [result,combination.indexOf(input)];
}
console.log(encode("bananabar")); //should return ["nnbbraaaa", 4]