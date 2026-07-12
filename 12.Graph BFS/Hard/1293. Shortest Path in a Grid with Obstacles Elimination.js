

// Example 1:
// Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
// Output: 6
// Explanation: 
// The shortest path without eliminating any obstacle is 10.
// The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
/*
Case 1:
          c0  c1  c2

    r0    🚶  ⬜  ⬜
    r1    🧱  🧱  ⬜
    r2    ⬜  ⬜  ⬜
    r3    ⬜  🧱  🧱
    r4    ⬜  ⬜  🚪

Case 2:
          c0  c1  c2

    r0    🚶  ⬜  ⬜
    r1    🧱  🧱  ⬜
    r2    ⬜  ⬜  ⬜
    r3    ⬜  🧱  🧱
    r4    ⬜  ⬜  🧱
    r4    ⬜  ⬜  🚪
*/

// Example 2:
// Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
// Output: -1
// Explanation: We need to eliminate at least two obstacles to find such a walk.
/*
          c0  c1  c2

    r0    🚶  🧱  🧱
    r1    🧱  🧱  🧱
    r2    🧱  ⬜  🚪
*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];
    let steps = 0;

    const targetRow = rows - 1;
    const targetCol = cols - 1;

    const visited = new Set();

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    queue.push([0, 0, k]);
    visited.add(`0,0,${k}`);

    while (queue.length > 0) {

        const size = queue.length;

        for (let i = 0; i < size; i++) {

            const [row, col, obs] = queue.shift();

            if (row === targetRow && col === targetCol) {
                return steps;
            }

            for (const [dr, dc] of directions) {

                const newRow = row + dr;
                const newCol = col + dc;

                if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                    continue;
                }

                // Determine remaining eliminations after entering next cell
                const nextObs = grid[newRow][newCol] === 1 ? obs - 1 : obs;

                // Cannot enter obstacle if no eliminations left
                if (nextObs < 0) {
                    continue;
                }

                const key = `${newRow},${newCol},${nextObs}`;

                if (visited.has(key)) {
                    continue;
                }

                visited.add(key);
                queue.push([newRow, newCol, nextObs]);
            }
        }

        steps++;
    }

    return -1;
};
let grid = [[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], k = 1
const result = shortestPath(grid, k);
console.log('result=', result);