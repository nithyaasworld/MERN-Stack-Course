//Problem statement: https://gist.github.com/McLarenCollege/d9c1b07ff2f516660fcf919caf4ae258
function primeFactors(n) {
    //Finding the factors
    let factors = [];
    let i = 2;
    while (n !== 1) {
        if (n % i === 0) {
            factors.push(i);
            n /= i;
        } else {
            i++;
        }
    }
    //Finding the count of factor
    let factorsCount = [];
    let currItem = factors[0];
    let currCount = 1;
    for (let i = 1; i < factors.length; i++){
        if (factors[i] === currItem) {
            currCount++;
        } else {
            factorsCount.push([currItem, currCount]);
                currItem = factors[i];
                currCount = 1;
            }
    }
    factorsCount.push([currItem, currCount]);
    //modifying it to the expected format
    let finalString = [];
    factorsCount.forEach(item => (item[1] === 1) ? finalString.push(`(${item[0]})`) : finalString.push(`(${item[0]}**${item[1]})`));
    return finalString.join('');
}
console.log(primeFactors(80));
console.log(primeFactors(86240));