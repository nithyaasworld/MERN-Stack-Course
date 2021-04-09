// https://gist.github.com/McLarenCollege/f83f3fbfaed0396f62cb570c73e1110e
function josephus(inputArr, k) {
    let result = [];
    while (inputArr.length > 0) {
        let counter = k;
        while (counter-- > 1) {
            inputArr.push(...inputArr.splice(0, 1));
        }
        result.push(...inputArr.splice(0, 1));
    }
    return result;
}
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3)); //[3,6,2,7,5,1,4]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],1)); // should return [1,2,3,4,5,6,7,8,9,10]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));  // should return [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]