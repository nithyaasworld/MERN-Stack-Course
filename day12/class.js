function randomShuffle(arr) {
    for (let i = 0; i < arr.length; i++){
        let randomNum = Math.floor(Math.random() * arr.length);
        let temp = arr[randomNum];
        let curr = arr[i];
        arr[i] = temp;
        arr[randomNum] = curr;
    }
    return arr;
}
console.log(randomShuffle([3, 4, 5, 6, 7]));