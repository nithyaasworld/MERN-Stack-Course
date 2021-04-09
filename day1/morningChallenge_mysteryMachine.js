//https://gist.github.com/McLarenCollege/6dd83d78b1da8194d4fc6374013c497f
function mysteryMachine(grid, row, col, n, dir) {
    let directionMap = { 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1] };
    while (n > 0) {
          if (grid[row][col] === 0) {
            grid[row][col] = 1;
            dir = turnLeft(dir);
        }else {     
            grid[row][col] = 0;
            dir = turnRight(dir);
        }
        if (grid[row + directionMap[dir][0]] !== undefined && grid[row + directionMap[dir][0]][col + directionMap[dir][1]] !== undefined) {
            row = row + directionMap[dir][0];
            col = col + directionMap[dir][1];
        } else { // to expand a row or column when needed
            if (grid[row + directionMap[dir][0]] === undefined) {
                let newrow = Array(grid[0].length).fill(0);
                if ((row + directionMap[dir][0]) >= 0) {
                    grid.push(newrow);
                    row = row + directionMap[dir][0];
                    col = col + directionMap[dir][1];
                }
                else {
                    grid.unshift(newrow);
                    row = 0;
                    col = col + directionMap[dir][1];
                }
            } else {
                if ((col + directionMap[dir][1]) >= 0) {
                    for (let i = 0; i < grid.length; i++) {
                        grid[i].push(0);
                    }
                    row = row + directionMap[dir][0];
                    col = col + directionMap[dir][1];
                }
                else {
                    for (let i = 0; i < grid.length; i++) {
                        grid[i].unshift(0);
                    }
                    row = row + directionMap[dir][0];
                    col = col + directionMap[dir][1] - 1;
                }
            }
        }
        n--;
    }
    function turnLeft(dir) {
        return (dir - 1) < 0 ? 3 : (dir - 1);
    }
    function turnRight(dir) {
        return (dir + 1) > 3 ? 0 : (dir + 1);
    } 
    return grid;
}
console.log(mysteryMachine([[1]], 0, 0, 1, 0)); // should return: [[0, 0]]
console.log(mysteryMachine([[1]], 0, 0, 3, 0)); // should return [[0,1],[0,1]]
console.log(mysteryMachine([ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 2, 2, 10, 1)); // should return [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 1]]