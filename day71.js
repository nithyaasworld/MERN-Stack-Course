//https://gist.github.com/McLarenCollege/cf0eab2e4b16413d13f658663262e0a0

function findLeastPrice(price, special, needs) {
    if (needs.every(need => !need)) return 0;
    if (price.every(price => price===0)) return 0;
    let leastPrice = Number.MAX_VALUE;
    for (let i = 0; i < special.length; i++){
        if (special[i].slice(0, -1).every((item, i) => item <= needs[i])) {
            let currLeastPrice = 0;
            needs.forEach((need, j) => currLeastPrice += (need - special[i][j]) * price[j] );
            currLeastPrice += special[i][special[i].length - 1];
            if (currLeastPrice < leastPrice) leastPrice = currLeastPrice;
        }
    }
    return leastPrice;
}
let price = [2, 5];
let special = [[3, 0, 5], [1, 2, 10]];
let needs = [3, 2];
console.log(findLeastPrice(price, special, needs));
let price1 = [2, 3, 4];
let special1 = [[1, 1, 0, 4], [2, 2, 1, 9]]
let needs1 = [1, 2, 1];
console.log(findLeastPrice(price1, special1, needs1));
[1,1,1]
[[1,1,1,0],[2,2,1,1]]
[1,1,0]