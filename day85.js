//https://gist.github.com/McLarenCollege/1ac00ed5a53632893e85d721b58791cb
function isThereaTriplet(input) {
    if (input.length < 3) return false;
    let triplets = [];
    let counter = 0;
    triplets.push([input[0]]);
    while (counter++ < input.length) {
        triplets.forEach((triplet) => {
            if (triplet.slice(-1)[0] < input[counter]) {
                triplets.push(triplet.slice(0));
                triplet.push(input[counter]);
            }
        })
        if(triplets.some(triplet => triplet.length > 2)) return true
        triplets.push([input[counter]]);
    }
    return false;
}
console.log(isThereaTriplet([5, 4, 3, 2, 1])); // false
console.log(isThereaTriplet([2, 1, 5, 0, 4, 6])); // true