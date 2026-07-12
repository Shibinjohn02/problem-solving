
// Example 1:
// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation: 
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".

// Example 2:
// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

// Example 3:
// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation: We cannot reach the target without getting stuck.

/*
Notes:
Example, 0000 se tum directly ja sakte ho:
1000
9000
0100
0900
0010
0090
0001
0009
4 wheels × 2 moves = 8 immediate neighbors
Grid problems → 4 neighbors
Open Lock → 8 neighbors
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const dead = new Set(deadends);

    if (dead.has("0000")) return -1;
    if (target === "0000") return 0;

    const queue = [];
    const visited = new Set();
    let jump = 0;

    queue.push("0000");
    visited.add("0000");

    while (queue.length > 0) {

        const size = queue.length;

        for (let i = 0; i < size; i++) {

            const state = queue.shift();

            if (state === target) return jump;

            for (let j = 0; j < 4; j++) {
                const digit = Number(state[j]);

                const next = (digit + 1) % 10;
                const prev = (digit + 9) % 10;

                const nextState = state.slice(0, j) + next + state.slice(j + 1);
                const prevState = state.slice(0, j) + prev + state.slice(j + 1);

                if (!dead.has(nextState) && !visited.has(nextState)) {
                    queue.push(nextState);
                    visited.add(nextState);
                }

                if (!dead.has(prevState) && !visited.has(prevState)) {
                    queue.push(prevState);
                    visited.add(prevState);
                }
            }
        }

        jump++;
    }

    return -1;
};

let deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"
const result = openLock(deadends, target);
console.log('result=', result);