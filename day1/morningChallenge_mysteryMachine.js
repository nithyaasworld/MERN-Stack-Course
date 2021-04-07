function mysteryMachine(grid, row, col, n, dir) {
    let directionMap = { 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1] };
    while (n > 0) {
        console.log('n is: ', n);
        console.log('grid is: ', grid);
        if (grid[row][col] === 0) {
            grid[row][col] = 1;
            dir = turnleft(dir);
            if (grid[row + directionMap[dir][0]] && grid[row + directionMap[dir][0]][col + directionMap[dir][1]]) {
                row = row + directionMap[dir][0];
                col = col + directionMap[dir][1];
            } else {
                if (!grid[row + directionMap[dir][0]]) {
                    let newrow = Array(grid[0].length).fill(0);
                    console.log(newrow);
                    if ((row + directionMap[dir][0]) >= 0) {
                        grid.push(newrow);
                    }else grid.unshift(newrow);
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
            
        }else {
            grid[row][col] = 0;
            dir = turnright(dir);
            if (grid[row + directionMap[dir][0]] && grid[row + directionMap[dir][0]][col + directionMap[dir][1]]) {
                row = row + directionMap[dir][0];
                col = col + directionMap[dir][1];
            } else {
                if (!grid[row + directionMap[dir][0]]) {
                    let newrow = Array(grid[0].length).fill(0);
                    if ((row + directionMap[dir][0]) >= 0) {
                        grid.push(newrow);
                    }else grid.unshift(newrow);
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
        }
        n--;
    }
    function turnleft(dir){
        switch (dir) {
            case 0 : return 3;
            case 1: return 0;
            case 2: return 1;
            case 3 : return 2;
        }
    }
    function turnright(dir){
        switch (dir) {
            case 0 : return 1;
            case 1: return 2;
            case 2: return 3;
            case 3 : return 0;
        }
    }
    return grid;
}
//console.log(mysteryMachine([[1]], 0, 0, 1, 0)); // should return: [[0, 0]]

// Initially facing north (0), at the first iteration the player turns right (because it stands on a green square, 1), flips the square and moves forward.

console.log(mysteryMachine([[1]], 0, 0, 3, 0)); // should return [[0,1],[0,1]]
//console.log(mysteryMachine([ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 2, 2, 10, 1)); // should return [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 1]]