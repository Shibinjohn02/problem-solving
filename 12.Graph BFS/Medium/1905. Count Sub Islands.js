

// Example 1:
// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
/*
Grid 1:
    r\c  0   1   2   3   4

    0    🟩  🟩  🟩  🌊  🌊
    1    🌊  🟩  🟩  🟩  🟩
    2    🌊  🌊  🌊  🌊  🌊
    3    🟩  🌊  🌊  🌊  🌊
    4    🟩  🟩  🌊  🟩  🟩

Grid 2:
    r\c  0   1   2   3   4

    0    🟩  🟩  🟩  🌊  🌊
    1    🌊  🌊  🟩  🟩  🟩
    2    🌊  🟩  🌊  🌊  🌊
    3    🟩  🌊  🟩  🟩  🌊
    4    🌊  🟩  🌊  🟩  🌊
*/

// Example 2:
// Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// Output: 2 
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
/*
Grid 1:
    r\c  0   1   2   3   4

    0    🟩  🌊  🟩  🌊  🟩
    1    🟩  🟩  🟩  🟩  🟩
    2    🌊  🌊  🌊  🌊  🌊
    3    🟩  🟩  🟩  🟩  🟩
    4    🟩  🌊  🟩  🌊  🟩

Grid 2:
    r\c  0   1   2   3   4

    0    🌊  🌊  🌊  🌊  🌊
    1    🟩  🟩  🟩  🟩  🟩
    2    🌊  🟩  🌊  🟩  🌊
    3    🌊  🟩  🌊  🟩  🌊
    4    🟩  🌊  🌊  🌊  🟩
*/

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    const rows = grid1.length;
    const cols = grid1[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let count = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (grid2[row][col] === 0 || visited[row][col]) {
                continue;
            }

            let isSubIsland = true;

            const queue = [[row, col]];
            visited[row][col] = true;

            while (queue.length > 0) {
                const [sr, sc] = queue.shift();

                if (grid1[sr][sc] === 0) {
                    isSubIsland = false;
                }

                for (const [dr, dc] of directions) {
                    const newRow = sr + dr;
                    const newCol = sc + dc;

                    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                        continue;
                    }

                    if (grid2[newRow][newCol] === 0 || visited[newRow][newCol]) {
                        continue;
                    }

                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                }
            }

            if (isSubIsland) {
                count++;
            }
        }
    }

    return count;
};
let grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]], grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]
const result = countSubIslands(grid1, grid2);
console.log('result=', result);