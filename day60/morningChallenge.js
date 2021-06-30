function neededTime(n, headID, manager, informTime) {
    // ---------- Way: 1 works only for the given Input  ------------- //
        
    // let neededTime = 0    manager = [... new Set(manager)];
    // manager.forEach((manager, emp) => {
    //     if (manager !== -1) {
    //         neededTime += informTime[manager];

    //     } 
    // })
    // return neededTime;

    // ---------- Way: 2 Work in Progress ------------------ //

    // let neededTime = [];

    // for (let i = 0; i < n; i++){
    //     neededTime.push(findInformTime(i));
    // }

    // console.log(neededTime);

    // function findInformTime(empID) {
    //     if (empID == headID) return 0;
    //     let timeNeeded = 0;
    //     let currManager = manager[empID];
    //     timeNeeded = informTime[currManager];
    //     while (currManager !== -1) {
    //         currManager = manager[currManager];
    //         timeNeeded += informTime[currManager];
    //     }
    //     return timeNeeded;
    // }
}
console.log(neededTime(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]));
console.log(neededTime(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]));
console.log(neededTime(1, 0, [-1], [0]));