
// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]
/*
          c0  c1  c2

    r0    ⚪  ⚪  ⚪
    r1    ⚪  🟢  ⚪
    r2    🟢  🟢  🟢
*/

// Example 3:
// Input: mat = [[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]
// Output:      [[0,1,0,1,2],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]
//      [[0,1,0,1,1],[1,2,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]
/*
          c0  c1  c2  c3  c4

    r0    ⬜  🟩  ⬜  🟩  🟩
    r1    🟩  🟩  ⬜  ⬜  🟩
    r2    ⬜  ⬜  ⬜  🟩  ⬜
    r3    🟩  ⬜  🟩  🟩  🟩
    r4    🟩  ⬜  ⬜  ⬜  🟩
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    const queue = [];

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (mat[row][col] === 0) {
                queue.push([row, col]);
            } else {
                mat[row][col] = -1;
            }
        }
    }

    while (queue.length > 0) {

        const [row, col] = queue.shift();

        for (const [dr, dc] of directions) {

            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                continue;
            }

            if (mat[newRow][newCol] !== -1) {
                continue;
            }

            mat[newRow][newCol] = mat[row][col] + 1;

            queue.push([newRow, newCol]);
        }
    }

    return mat;
};

let mat = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
const result = updateMatrix(mat);
console.log('result=', result);