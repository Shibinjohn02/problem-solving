
// Example 1:
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation:
// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.
/*
    X X X X
    X O O X
    X X O X
    X O X X
*/

// Example 2:
// Input: board = [["X"]]
// Output: [["X"]]

// Example 3:
// Input: board = [["O","O","O"],["O","O","O"],["O","O","O"]]
// Output: [["O","O","O"],["O","O","O"],["O","O","O"]]

// Example 4:
// Input: board = [["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]
// Output: [["O","X","X","O","X"],["X","X","X","X","O"],["X","X","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]

/* Notes: 

    A region is:
    A cell with O plus all other O cells connected to it (directly or indirectly) through up/down/left/right moves.

    Then a surrounded region is:
    A region where none of the cells in that entire connected group touch the boundary.

*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function (board) {
    const rows = board.length;
    const cols = board[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (board[row][col] === "X" || visited[row][col]) {
                continue;
            }

            const queue = [[row, col]];
            const zeros = [[row, col]];
            let isBoundary = false;

            visited[row][col] = true;

            if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
                isBoundary = true;
            }

            while (queue.length > 0) {

                const [sr, sc] = queue.shift();

                for (const [dr, dc] of directions) {
                    const newRow = sr + dr;
                    const newCol = sc + dc;

                    if (newRow < 0 || newRow >= rows || newCol < 0 ||
                        newCol >= cols
                    ) {
                        continue;
                    }

                    if (board[newRow][newCol] === "X" || visited[newRow][newCol]) {
                        continue;
                    }

                    if (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) {
                        isBoundary = true;
                    }

                    visited[newRow][newCol] = true;
                    queue.push([newRow, newCol]);
                    zeros.push([newRow, newCol]);
                }
            }

            if (!isBoundary) {
                for (const [r, c] of zeros) {
                    board[r][c] = "X";
                }
            }
        }
    }
};

let board = [["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]]
solve(board);
console.log('result=', board);