function findMaxDiff(inputTree) {
  let maxDiff = [0];
  let parents = [];
  subFunc(inputTree, parents, maxDiff);
  return maxDiff[0];
}
function subFunc(inputTree, parents, maxDiff) {
  parents.push(inputTree.value);

  if (inputTree.left) {
    subFunc(inputTree.left, parents, maxDiff);
  } else {
    let currMaxDiff = findMathDiff(parents);
    if (maxDiff[0] < currMaxDiff) maxDiff[0] = currMaxDiff;
  }

  if (inputTree.right) {
    subFunc(inputTree.right, parents, maxDiff);
  } else {
    let currMaxDiff = findMathDiff(parents);
    if (maxDiff[0] < currMaxDiff) maxDiff[0] = currMaxDiff;
  }
  parents.pop();
}
function findMathDiff(inputArr) {
  let sortedArr = inputArr.slice(0).sort((a, b) => a - b);
  return Math.abs(sortedArr[0] - sortedArr[sortedArr.length - 1]);
}

let root = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
    },
    right: {
      value: 6,
      left: {
        value: 4,
      },
      right: {
        value: 7,
      },
    },
  },
  right: {
    value: 10,
    right: {
      value: 14,
      left: {
        value: 13,
      },
    },
  },
};
console.log(findMaxDiff(root));