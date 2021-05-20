function primeFactors(n) {
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
    let finalString = [];
    factorsCount.forEach(item => {
        if (item[1] === 1) {
            finalString.push(`(${item[0]})`)
        } else {
            finalString.push(`(${item[0]}**${item[1]})`)
        }
    })
    return finalString.join('');
}
console.log(primeFactors(80));
console.log(primeFactors(86240));