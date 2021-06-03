//https://gist.github.com/McLarenCollege/15bd572e41ab215939c2a66dc9fdaad3
function nBonacciRatio(n) {
    let x2 = 0, x1 = 1, x0 = n*x1 +x2, i=0;
     do{
        [x2, x1] = [x1, x0];
         x0 = n * x1 + x2;
    }while (x0 !== Infinity)
    return x1 / x2;
}
console.log(nBonacciRatio(1)); //should return 1.61803
console.log(nBonacciRatio(2)); //should return 2.4142
console.log(nBonacciRatio(3)); // should return 3.302775637731995
console.log(nBonacciRatio(7)); // should return 7.140054944640259
console.log(nBonacciRatio(50)); // returns 50.0199920063936