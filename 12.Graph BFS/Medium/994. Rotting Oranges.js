
// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
/*
   ❌🍊  🍊  🍊
    🍊   🍊  ⬜
    ⬜   🍊  🍊
*/

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
/*
   ❌🍊  🍊  🍊
    ⬜   🍊  🍊
    🍊   ⬜  🍊
*/

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

/*
    ⬜  ❌🍊
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];
    let fresh = 0;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col]);
            } else if (grid[row][col] === 1) {
                fresh++;
            }
        }
    }

    let minutes = 0;

    while (queue.length > 0 && fresh > 0) {

        const size = queue.length;

        for (let i = 0; i < size; i++) {

            const [row, col] = queue.shift();

            for (const [dr, dc] of directions) {

                const newRow = row + dr;
                const newCol = col + dc;

                if (
                    newRow < 0 ||
                    newRow >= rows ||
                    newCol < 0 ||
                    newCol >= cols
                ) {
                    continue;
                }

                if (grid[newRow][newCol] !== 1) {
                    continue;
                }

                grid[newRow][newCol] = 2;
                fresh--;

                queue.push([newRow, newCol]);
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};


let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
const result = orangesRotting(grid);
console.log('result=', result);