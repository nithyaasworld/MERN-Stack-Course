//https://gist.github.com/McLarenCollege/6dd83d78b1da8194d4fc6374013c497f
function mysteryMachine(grid, row, col, n, dir) {
    let directionMap = { 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1] };
    while (n > 0) {
        console.log('\n\n\n\n\n');
        console.log('n is: ', n);
        console.log('grid is: ', grid);
        console.log('row is: ', row, 'col is: ', col);
        console.log('dir is: ', dir);
        console.log("===========================================");
        if (grid[row][col] === 0) {
            grid[row][col] = 1;
            dir = turnLeft(dir);
            console.log('direction at line 13: ', dir);
            console.log("===========================================");
        }else {     
            grid[row][col] = 0;
            dir = turnRight(dir);
        }
        console.log('row + directionMap[dir][0]', row + directionMap[dir][0]);
        console.log('col + directionMap[dir][1]', col + directionMap[dir][1]);
        // console.log('grid[row + directionMap[dir][0]][col + directionMap[dir][1] ', grid[row + directionMap[dir][0]][col + directionMap[dir][1]]);
        // to move forward one unit in the current direction
        if (grid[row + directionMap[dir][0]] && !!grid[row + directionMap[dir][0]][col + directionMap[dir][1]]) {
            console.log('did i ever enter here: ');
            row = row + directionMap[dir][0];
            col = col + directionMap[dir][1];
        } else { // to expand a row or column when needed
            if (!grid[row + directionMap[dir][0]]) {
                let newrow = Array(grid[0].length).fill(0);
                if ((row + directionMap[dir][0]) >= 0) {
                    console.log('pushed new row when n is: ', n);
                    grid.push(newrow);
                    row = row + directionMap[dir][0];
                    col = col + directionMap[dir][1];
                }
                else {
                    console.log('unshifted new row when n is: ', n);
                    grid.unshift(newrow);
                    row = 0;
                    col = col + directionMap[dir][1];
                }
            } else {
                if ((col + directionMap[dir][1]) >= 0) {
                    for (let i = 0; i < grid.length; i++) {
                        grid[i].push(0);
                    }
                    console.log('pushed a column when n is: ', n);
                    row = row + directionMap[dir][0];
                    col = col + directionMap[dir][1];
                }
                else {
                    for (let i = 0; i < grid.length; i++) {
                        grid[i].unshift(0);
                    }
                    console.log('unshifted a column when n is: ', n);
                    row = row + directionMap[dir][0];
                    col = col + directionMap[dir][1] - 1;
                }
            }
        }
        n--;
        // console.log('n is: ', n);
        // console.log('grid is: ', grid);
        // console.log('row is: ', row, 'col is: ', col);
        // console.log('dir is: ', dir);
        // console.log("===========================================");
    }
    function turnLeft(dir) {
        return (dir - 1) < 0 ? 3 : (dir - 1);
    }
    function turnRight(dir) {
        return (dir + 1) > 3 ? 0 : (dir + 1);
    } 
    return grid;
}
//console.log(mysteryMachine([[1]], 0, 0, 1, 0)); // should return: [[0, 0]]

// Initially facing north (0), at the first iteration the player turns right (because it stands on a green square, 1), flips the square and moves forward.

console.log(mysteryMachine([[1]], 0, 0, 3, 0)); // should return [[0,1],[0,1]]
//console.log(mysteryMachine([ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 2, 2, 10, 1)); // should return [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 1]]