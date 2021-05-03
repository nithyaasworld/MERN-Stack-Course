//Problem statement: https://gist.github.com/McLarenCollege/b7b2b54b9e591ab8c40b94a2110c281b
function findMaxProfit(input) {
    let i = 0;
    let result = 0;
    while (input[i + 1]) {
        if (input[i] < input[i + 1]) {
            result += input[i+1] - input[i];
        }
        i++;
    }
    return result;
}
console.log(findMaxProfit([5, 2, 10])); //should return 8
console.log(findMaxProfit([1, 2, 3])); //should return 2
console.log(findMaxProfit([5, 2, 10, 12, 8, 1])); //should return 10
console.log(findMaxProfit([100, 50, 30, 20, 40])); //should return 20