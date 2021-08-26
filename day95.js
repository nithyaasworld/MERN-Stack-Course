//https://gist.github.com/McLarenCollege/e3b1746c5ffaa57353805864250f8824

function largestRect(histogram) {
    let rounds = Math.max(...histogram);
    let maxArea = 0;
    for (let round = 1; round <= rounds; round++){
        let groups = [];
        for (let j = 0; j < histogram.length; j++){
            if (histogram[j] >= round) groups.push(histogram[j]);
             else {
                if (groups.length * round > maxArea) {
                    maxArea = groups.length * round;
                }
                groups = [];
            }
        }
        if (groups.length * round > maxArea) {
            maxArea = groups.length * round;
        }
        groups = [];
    }
    return maxArea;
}
console.log(largestRect([2, 1, 5, 6, 2, 3])); // return 10
console.log(largestRect([2])); //return 2