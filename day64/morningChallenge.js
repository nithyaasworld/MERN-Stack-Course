//https://gist.github.com/McLarenCollege/71bb049fcbd1903dc34b1ef64b1efd79
function findMinClip(inputArr, time) {
    if (!inputArr.some(clip => clip[0] === 0)) return -1;
    if (!inputArr.some(clip => clip[1] === time)) return -1;
    
    let maxStartingPoint = 0;
    inputArr.forEach(clip => {
        if (clip[0] === 0) {
            if (maxStartingPoint < clip[1]) maxStartingPoint = clip[1];
        }
    })
    let next;
    let count = 1;
    
    while (next !== time) {
        let currMax = 0;
        for (let i = 0; i < inputArr.length; i++){
            if (inputArr[i][0] === 0) {
                continue;
            } else if (inputArr[i][0] > maxStartingPoint) {
                continue;
            } else {
                if (inputArr[i][1] > currMax) {
                    currMax = inputArr[i][1];
                    next = inputArr[i][1];
                }
            }
        }
        if (currMax === maxStartingPoint) return -1;
        maxStartingPoint = currMax;
        count++;
    }
    return count;
}
clips = [[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]]
console.log(findMinClip(clips, 9));
clip2 = [[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]];
console.log(findMinClip(clip2, 10));
clip3 = [[0, 1], [1, 2]];
console.log(findMinClip(clip3, 5));
