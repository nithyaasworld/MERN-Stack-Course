//Problem statement: https://gist.github.com/McLarenCollege/799d611a8b8701a05588b8efab8628fc
function canIReadAll(numCourses, inputArr) {
    let booksAndTheirDependencies = new Array(numCourses).fill(0);
    for (let item of inputArr) {   
        booksAndTheirDependencies[item[0]]++;
    }
    let booksWithoutDependency = [];
    for (let i = 0; i < booksAndTheirDependencies.length; i++){
        if (booksAndTheirDependencies[i] === 0) {
            booksWithoutDependency.push(i);
        }
    }
    if (booksWithoutDependency.length === 0) return false;
    while (booksWithoutDependency.length > 0 && inputArr.length>0) {
        let currBook = booksWithoutDependency.pop();
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i][1] === currBook) {
                booksWithoutDependency.push(inputArr[i][0]);
                inputArr.splice(i, 1);
                i--;
            }
        }
    }
    return inputArr.length === 0;
}
console.log(canIReadAll(4, [[1, 0], [0, 2], [1, 2], [0, 3]])); // should return true
console.log(canIReadAll(2, [[1, 0]])) // should return true;
console.log(canIReadAll(2, [[1, 0], [0, 1]])); //should return false;
console.log(canIReadAll(4, [[1, 3], [0, 1]])); //should return true;