//https://gist.github.com/McLarenCollege/4e9214ea815867f654ac0083a2f7f004
function findMaxFruit(fruitTrees) {
  let max = 0;
  for (let i = 0; i < fruitTrees.length; i++) {
    let currMax = 0;
    let currFruits = [];
    for (let j = i; j < fruitTrees.length; j++) {
      if (currFruits.length === 0) {
        currMax++;
        currFruits.push(fruitTrees[j]);
      } else if (currFruits.includes(fruitTrees[j])) {
        currMax++;
      } else if(currFruits.length < 2) {
        currMax++;
        currFruits.push(fruitTrees[j]);
      } else {
          break;
      }
    }
    if (currMax > max) {
      max = currMax;
    }
    currFruits = [];
    currMax = 0;
  }
  return max;
}
console.log(findMaxFruit([1, 2, 1]));
console.log(findMaxFruit([0, 1, 2, 2]));
console.log(findMaxFruit([1, 2, 3,2,2]));