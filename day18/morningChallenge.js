function canIReadAll(numCourses, inputArr) {

    let completedBooks = [];
    let queue = [[inputArr[0][1]], inputArr[0][0]];
    while (completedBooks.length < numCourses) {
        let item = queue.shift();
        for (let i = 0; i < inputArr.length; i++){
            if(inputArr[i][0] === item) queue.push(inputArr[i][1]) 
        }
    }
}
console.log(canIReadAll(4, [[1,0],[0,2],[1,2],[0,3]]));