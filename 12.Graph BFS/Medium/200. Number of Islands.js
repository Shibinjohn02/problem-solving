
// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
/*
    🟩 🟩 🟩 🟩 🌊
    🟩 🟩 🌊 🟩 🌊
    🟩 🟩 🌊 🌊 🌊
    🌊 🌊 🌊 🌊 🌊
*/

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
/*
    🟩 🟩 🌊 🌊 🌊
    🟩 🟩 🌊 🌊 🌊
    🌊 🌊 🟩 🌊 🌊
    🌊 🌊 🌊 🟩 🟩
*/

// Notes: island = connected group of land.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    let count = 0;
    const queue = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (grid[row][col] === "0" || visited[row][col]) continue;

            count++;
            queue.push([row, col]);
            visited[row][col] = true;

            while (queue.length > 0) {

                const [sr, sc] = queue.shift();

                for (const [dr, dc] of directions) {
                    const newRow = sr + dr;
                    const newCol = sc + dc;

                    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                        continue;
                    }

                    if (grid[newRow][newCol] === "0" || visited[newRow][newCol]) {
                        continue;
                    }

                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }
        }
    }

    return count;
};

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

const result = numIslands(grid);
console.log('result=', result);