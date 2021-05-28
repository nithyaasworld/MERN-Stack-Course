//problem statement: https://gist.github.com/McLarenCollege/f30f8fb0b2374006064ad08820f4cbbd
function numOfIsland(inputGrid) {
    inputGrid.forEach(grid => console.log(JSON.stringify(grid)));
    console.log("=============================\n\n\n")
    let offsets = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let gridCopy = JSON.parse(JSON.stringify(inputGrid));

    //To check the items that can walk off using the top boundary values
    for (let i = 0; i < gridCopy[0].length; i++){
        if (gridCopy[0][i] === 1) {
            checkTheSurroundings([0,i]);
        }
    }
    //To check the items that can walk off using the bottom boundary values
    for (let i = 0; i < gridCopy[0].length; i++){
        if (gridCopy[gridCopy.length - 1][i] === 1) {
            checkTheSurroundings([gridCopy.length - 1, i]);
        }
    }
    //To check the items that can walk off using the left boundary values
    for (let i = 1; i < gridCopy.length -1; i++){
        if (gridCopy[i][0] === 1) {
            checkTheSurroundings([i, 0]);
        }
    }
    //To check the items that can walk off using the right boundary values
    for (let i = 1; i < gridCopy.length -1; i++){
        if (gridCopy[i][gridCopy.length -1] === 1) {
            checkTheSurroundings([i, gridCopy.length-1]);
        }
    }
    gridCopy.forEach(grid => console.log(JSON.stringify(grid)));
    return gridCopy.reduce((a, b) => a + b.filter(e => e===1).length, 0);

    function checkTheSurroundings(index) {
        let queue = [index];
        while (queue.length > 0) {
          let [x,y] = queue.shift();
            gridCopy[x][y] = 0;
            for (let i = 0; i < offsets.length; i++) {
                let [a, b] = offsets[i];
                if (gridCopy[x+a] && gridCopy[x+a][y+b] === 1) {
                    queue.push([x+a, y+b]);
                }
            }
        } 
    }
}

const grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]];
// console.log(numOfIsland(grid)); //expected 0
const grid2 = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
// console.log(numOfIsland(grid2)); //expected 3
const grid3 = [[0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1], [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]];
console.log(numOfIsland(grid3)); //expected 11