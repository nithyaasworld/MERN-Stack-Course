//Problem statement: https://gist.github.com/McLarenCollege/dcf7092450669734c71e4c1fd352210f
function findMissingNum(arr) {
    let diff = arr[0];
    let start = 0
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (Math.abs(start - end) > 1) {
        if (arr[middle] - middle !== diff) {
            end = middle;
        } else {
            start = middle;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[start] + 1;
}

let arr1 = [3,4,5,6,7,8,10,11];
console.log(findMissingNum(arr1)); // should return 9
let arr2 = [2, 4, 5, 6, 7, 8];
console.log(findMissingNum(arr2)); // should return 3
let arr3 = [2, 3, 4, 5, 6, 8];
console.log(findMissingNum(arr3)); // should return 7
let arr4 = [2, 3, 4, 6, 7];
console.log(findMissingNum(arr4)); // should return 5