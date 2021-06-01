//https://gist.github.com/McLarenCollege/6d93214e6440090a370bcff4b7554862
function printVertically(inputStr) {
    let strArr = inputStr.split(' ');
    let longestStr = strArr.reduce((acc, val) => val.length > acc ? val.length : acc, 0);
    let result = Array.from(Array(longestStr), () => new Array(strArr.length))

    for (let i = 0; i < strArr.length; i++){
        for (let j = 0; j < longestStr; j++){
            result[j][i] = strArr[i][j] || ' ';
        }
    }
    result.forEach(item => console.log(item.join('').trimRight()));
}
printVertically("HOW ARE YOU");
//expected
// "HAY"
// "ORO"
// "WEU"
console.log("---------------------");
printVertically("TO BE OR NOT TO BE");
//expected
// "TBONTB"
// "OEROOE"
// "   T"
console.log("---------------------");
printVertically("CONTEST IS COMING");
//expected
// "CIC"
// "OSO"
// "N M"
// "T I"
// "E N"
// "S G"
// "T"
console.log("---------------------");