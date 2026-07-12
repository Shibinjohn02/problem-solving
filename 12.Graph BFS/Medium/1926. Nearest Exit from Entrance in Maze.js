
// Example 1:
// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.
/*
Case 1:
          c0  c1  c2  c3

    r0    🧱  🧱  🚪  🧱
    r1    🚪  ⬜  🚶  🧱
    r2    🧱  🧱  🧱  🚪

Case 2:
          c0  c1  c2  c3  c4  c5

    r0    🧱  🧱  🚪  🧱  🚪  🧱
    r1    🚪  ⬜  🚶  ⬜  ⬜  🧱
    r2    🧱  🧱  🧱  🧱  🧱  🧱

Case 3:
          c0  c1  c2  c3  c4  c5

    r0    🧱  🧱  🧱  🧱  🚪  🧱
    r1    🚪  ⬜  🚶  ⬜  ⬜  🧱
    r2    🧱  🧱  ⬜  🧱  🧱  🧱
    r3    🧱  🧱  🚪  🧱  🧱  🧱
*/

// Example 2:
// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.
/*
          c0  c1  c2

    r0    🧱  🧱  🧱
    r1    🚶  ⬜  🚪
    r2    🧱  🧱  🧱
*/

// Example 3:
// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.
/*
          c0  c1

    r0    🚶  🧱
*/

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;

    const queue = [];
    let distance = 0;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    queue.push(entrance);

    // Mark entrance as visited
    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length > 0) {

        const size = queue.length;

        for (let i = 0; i < size; i++) {

            const [row, col] = queue.shift();

            for (const [dr, dc] of directions) {

                const newRow = row + dr;
                const newCol = col + dc;

                if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                    continue;
                }

                if (maze[newRow][newCol] === '+') {
                    continue;
                }

                // Found an exit
                if (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) {
                    return distance + 1;
                }

                // Mark visited and push
                maze[newRow][newCol] = '+';
                queue.push([newRow, newCol]);
            }
        }

        distance++;
    }

    return -1;
};


let maze = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], entrance = [1, 0]
const result = nearestExit(maze, entrance);
console.log('result=', result);