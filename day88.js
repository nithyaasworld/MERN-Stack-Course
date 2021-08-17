//https://gist.github.com/McLarenCollege/ac4358ec92c6d615b2a55a0612ddef63

function steps(target, initial) {
  let stepCount = 0;

  while (initial.join("") !== target.join("")) {
    let lastIncremented = null;
    for (let i = 0; i < initial.length; i++) {
      if (initial[i] < target[i]) {
        if (!(lastIncremented !== null && lastIncremented === i - 1)) stepCount++;
        initial[i]++;
        lastIncremented = i;
      }
    }
  }
  return stepCount;
}
console.log(steps([1, 2, 3, 2, 1], [0, 0, 0, 0, 0]));
console.log(steps([3, 1, 5, 4, 2], [0, 0, 0, 0, 0]));