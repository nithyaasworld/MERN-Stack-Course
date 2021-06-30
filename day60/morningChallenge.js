function neededTime(n, headID, manager, informTime) {
    let neededTime = [];
    for (let i = 0; i < n; i++){
        neededTime.push(findInformTime(i));
    }
    return Math.max(...neededTime);

    function findInformTime(empID) {
        if (empID === headID) return 0;
        let timeNeeded = 0;
        let currManager = manager[empID];
        timeNeeded = informTime[currManager];
        while (manager[currManager] !== -1) {
            currManager = manager[currManager];
            timeNeeded += informTime[currManager];
        }
        return timeNeeded;
    }
}
console.log(neededTime(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1])); //expected 21
console.log(neededTime(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])); //expected 1
console.log(neededTime(1, 0, [-1], [0])); //expected 0