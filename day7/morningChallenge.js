// https://gist.github.com/McLarenCollege/a7b63e9a3fa0b860365271a3b35c4455
function findPartitions(n) {
 let dp = Array.from(Array(n+1), () => Array(n+1).fill(null));
 //Filling the first column
 for(let i=0; i<n+1; i++){
    dp[i][0] = 1;
 }
//Filling the first row
 for(let i=1; i<n+1; i++){
    dp[0][i] = 0;
 }
 //Filling the rest of the dp states
 for(let i=1; i<n+1; i++){
    for(let j=1; j<n+1; j++){
       if(j < i){
          dp[i][j] = dp[i-1][j];
       }else {
          dp[i][j] = dp[i-1][j] + dp[i][j-i];
       }
    }
 }
 return dp[n][n];
 };
 console.log(findPartitions(4)); //should return 5
 console.log(findPartitions(5)); //should return 7
 console.log(findPartitions(50)); //should return 204226
 console.log(findPartitions(80)); //should return 15796476