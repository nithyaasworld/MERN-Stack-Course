//https://gist.github.com/McLarenCollege/55ec93f5ec29e58dc6de9548167ae1a8
function findMaxIceCreams(costArr, coin) {
    costArr.sort((a, b) => a - b);
    for (let i = 0; i < costArr.length; i++){
        if ((coin - costArr[i]) >= 0) coin -= costArr[i];
         else return i;
    }
    return costArr.length;
}
console.log(findMaxIceCreams([1, 3, 2, 4, 1], 7)); // expected 4
console.log(findMaxIceCreams([10, 6, 8, 7, 7, 8], 5)); //expected 0
console.log(findMaxIceCreams([1,6,3,1,2,5], 20)); //expected 6