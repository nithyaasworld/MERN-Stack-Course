function minStep(string1, string2) {
    let dp = Array.from(Array(string1.length), () => Array(string2.length).fill(null));
    //filling the first row of dp
    let currDistance = 0;
    let letterFound = false;
    for(let i=0; i<dp[0].length; i++){
        if(!letterFound && string1[0] === string2[i]){
            dp[0][i] = currDistance;
            letterFound = true;
        }else{
            dp[0][i] = ++currDistance;
        }
    }
    //filling the first column of dp
    currDistance = 0;
    letterFound = false;
    for(let i=0; i<dp.length; i++){
        if(!letterFound && string1[i] === string2[0]){
            dp[i][0] = currDistance;
            letterFound = true;
        }else{
            dp[i][0] = ++currDistance;
        }
    }
    //filling the rest of the states of dp
    for(let i=1; i<dp.length; i++){
        for(let j=1; j<dp[0].length; j++){
            if(string1[i] === string2[j]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j]) + 1;
            }
        }
    }
    return dp.slice(-1)[0].slice(-1)[0];
}
console.log(minStep('abad', 'abac')); // should return 1
console.log(minStep('Anshuman', 'Antihuman')); // should return 2
console.log(minStep('kitten', 'sitting')); // should return 3
console.log(minStep('sea', 'eat')); // should return 2