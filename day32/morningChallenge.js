//Problem Statement https://gist.github.com/McLarenCollege/1f370cf08039d4448720fbd0748697d0
function checkNums(arr, k) {
    if (arr.length % k !== 0) return false;
    let subArrayCount = arr.length / k;
    arr.sort((a, b) => a - b);
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]) {
            obj[arr[i]]++;
            if (obj[arr[i]] > k) return false;
        } else {
            obj[arr[i]] = 1;
        }
    }
    for (let i = 0; i < subArrayCount; i++){
        let item = [];
        for (const key in obj) {
            item.push(key);
            if (item.length > 1) {
                if (item[item.length - 1] - item[item.length - 2] !== 1) return false;
            }
            obj[key] -= 1;
            if (obj[key] === 0) {
                delete obj[key];
            }
            if (item.length === k) {
                break;
            }
        }
        if (item.length !== k) return false;
    }
    return true;
}
console.log(checkNums([1, 2, 3, 3, 4, 4, 5, 6], 4)); // expected: true
console.log(checkNums([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3)); //expected: true
console.log(checkNums([3, 3, 2, 2, 1, 1], 3)); //expected: true
console.log(checkNums([3, 3, 2, 2, 1, 2], 3)); //expected: false