//https://gist.github.com/McLarenCollege/ea9f791d2f07c03c1a2071c6d31fbc42

function simplifiedFractions(n){
    let result = [];
    for(let denominator=2; denominator<=n; denominator++){
        for(let numerator=1; numerator<denominator; numerator++){
                if (numerator === 1){
                    result.push(`${numerator}/${denominator}`);
                }else if(denominator % numerator !== 0){
                    result.push(`${numerator}/${denominator}`);
                }
        }
    }
    return result;
}
console.log(simplifiedFractions(4));
console.log(simplifiedFractions(1));
console.log(simplifiedFractions(3));
console.log(simplifiedFractions(2));
console.log(simplifiedFractions(5));