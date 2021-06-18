//https://gist.github.com/ArnavPuri/000d4ce51c2ab744a3a1df58395bfb99
function findTheWinner(arr, k) {
  if (arr.length < k) return Math.max(...arr);
  let winner = arr[0];
  let times = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[0] > arr[1]) {
      times++;
      if (times === k) return arr[0];
      arr.push(arr[1]);
      arr.splice(1, 1);
    } else {
      winner = arr[1];
      times = 1;
      if (times === k) return arr[1];
      arr.push(arr[0]);
      arr.splice(0, 1);
    }
    i++;
  }
  return winner;
}

console.log(findTheWinner([2, 1, 3, 5, 4, 6, 7], 2)); //5
console.log(findTheWinner([3, 2, 1], 10)); //3
console.log(findTheWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000)); //99