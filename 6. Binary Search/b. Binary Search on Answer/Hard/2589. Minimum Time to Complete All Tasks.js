// Example 1:
// Input: tasks = [[2,3,1],[4,5,1],[1,5,2]]
// Output: 2
// Explanation: 
// - The first task can be run in the inclusive time range [2, 2].
// - The second task can be run in the inclusive time range [5, 5].
// - The third task can be run in the two inclusive time ranges [2, 2] and [5, 5].
// The computer will be on for a total of 2 seconds.

// Example 2:
// Input: tasks = [[1,3,2],[2,5,3],[5,6,2]]
// Output: 4
// Explanation: 
// - The first task can be run in the inclusive time range [2, 3].
// - The second task can be run in the inclusive time ranges [2, 3] and [5, 5].
// - The third task can be run in the two inclusive time range [5, 6].
// The computer will be on for a total of 4 seconds.

// Instead of picking time from:
// start → end  (left to right)

// We pick from:
// end → start  (right to left)

// Why?
// Because:
// later times (near end) overlap more with future tasks

/*
Example 1:
Task 1 → [2,3,1]
Can run at time 2 or 3
Needs 1 second
time = 2

Task 2 → [4,5,1]
Can run at 4 or 5
Needs 1 second
time = 5

Task 3 → [1,5,2]
Can run anywhere from 1 to 5
Needs 2 seconds
time = 2 and time = 5

Final: 2 and 5

Example 2:
Task 1 → [1,3,2]
Needs 2 seconds between 1–3
Choose: 2, 3

Task 2 → [2,5,3]
Needs 3 seconds between 2–5
We already have: 2, 3
Need 1 more
Add: 5

Task 3 → [5,6,2]
Needs 2 seconds between 5–6
We already have: 5
Need 1 more
Add: 6

Final ON times: 2, 3, 5, 6
Total: 4 seconds

"Can I reuse time slots across tasks?"
*/

/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function (tasks) {
        // Step 1: sort by end time
        tasks.sort((a, b) => a[1] - b[1]);

        // Track which time slots are ON
        const used = new Set();

        for (let [start, end, duration] of tasks) {

                // Step 2: count already used slots in this range
                let alreadyUsed = 0;
                for (let t = start; t <= end; t++) {
                        if (used.has(t)) alreadyUsed++;
                }

                // Step 3: remaining slots needed
                let need = duration - alreadyUsed;

                // Step 4: fill from RIGHT (end → start)
                for (let t = end; t >= start && need > 0; t--) {
                        if (!used.has(t)) {
                                used.add(t);
                                need--;
                        }
                }
        }

        return used.size;
};


let tasks = [[2, 3, 1], [4, 5, 1], [1, 5, 2]]
const result = findMinimumTime(tasks);
console.log('result=', result);