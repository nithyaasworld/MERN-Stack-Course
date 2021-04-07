function mysteryMachine(grid, row, col, n, dir) {
    let directionMap = { 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1] };
    while (n > 0) {
        console.log('n is: ', n);
        console.log('grid is: ', grid);
        console.log('row is: ', row, 'col is: ', col);
        console.log('dir is: ', dir);
        console.log("===========================================");
        if (grid[row][col] === 0) {
            grid[row][col] = 1;
            dir = turnLeft(dir);            
        }else {
            grid[row][col] = 0;
            dir = turnRight(dir);
        }
        //to move forward one unit 
        if (grid[row + directionMap[dir][0]] && grid[row + directionMap[dir][0]][col + directionMap[dir][1]]) {
            row = row + directionMap[dir][0];
            col = col + directionMap[dir][1];
        } else { // to expand a row or column when needed
            if (!grid[row + directionMap[dir][0]]) {
                let newrow = Array(grid[0].length).fill(0);
                if ((row + directionMap[dir][0]) >= 0) grid.push(newrow);
                else grid.unshift(newrow);
            } else {
                if ((col + directionMap[dir][1]) >= 0) {
                    for (let i = 0; i < grid.length; i++) {
                        grid[i].push(0);
                    }
                } else {
                    for (let i = 0; i < grid.length; i++) {
                        grid[i].unshift(0);
                    }
                }
            }
            row = row + directionMap[dir][0];
            col = col + directionMap[dir][1];
        }
        n--;
    }
    function turnLeft(dir){
        return (dir - 1) < 0 ? 3 : (dir - 1);
    }
    function turnRight(dir){
        return (dir + 1) > 3 ? 0 : (dir + 1);
    }
    return grid;
}
//console.log(mysteryMachine([[1]], 0, 0, 1, 0)); // should return: [[0, 0]]

// Initially facing north (0), at the first iteration the player turns right (because it stands on a green square, 1), flips the square and moves forward.

console.log(mysteryMachine([[1]], 0, 0, 3, 0)); // should return [[0,1],[0,1]]
//console.log(mysteryMachine([ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 2, 2, 10, 1)); // should return [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 1]]