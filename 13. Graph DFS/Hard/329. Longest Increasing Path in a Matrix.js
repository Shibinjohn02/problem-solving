// Example 1:
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Example 2:
// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// Example 3:
// Input: matrix = [[1]]
// Output: 1

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Stores longest increasing path starting from each cell.
    const visited = Array.from({ length: rows }, () => Array(cols).fill(0));

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    let longestPath = 0;

    function dfs(sr, sc) {

        // Already computed
        if (visited[sr][sc] !== 0) {
            return visited[sr][sc];
        }

        let maxPath = 1;

        for (const [dr, dc] of directions) {
            const newRow = sr + dr;
            const newCol = sc + dc;

            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                continue;
            }

            if (matrix[newRow][newCol] <= matrix[sr][sc]) {
                continue;
            }

            maxPath = Math.max(maxPath, 1 + dfs(newRow, newCol));
        }

        visited[sr][sc] = maxPath;
        return maxPath;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            longestPath = Math.max(longestPath, dfs(row, col));
        }
    }

    return longestPath;
};

let matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]];
const result = longestIncreasingPath(matrix);
console.log('result=', result);