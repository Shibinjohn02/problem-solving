
// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
// After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

// Example 2:
// Input: tasks = ["A","C","A","B","D","B"], n = 1
// Output: 6
// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:
// Input: tasks = ["A","A","A", "B","B","B"], n = 3
// Output: 10
// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

// Jab gap fill nahi hota → idle aata hai
// Jab enough different tasks hote hain → idle avoid hota hai

// const map = new Map([["A", 3], ["B", 3]]);

/*
(maxFreq - 1) * (n + 1) + countMaxFreqTasks 
formulaResult = (3 - 1) * (2 + 1) + 2 = 2 * 3 + 2 = 8
answer = max(totalTasks, formulaResult)
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    // Step 1: Count the frequency of each task
    let freq = new Array(26).fill(0);
    for (let task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    // Step 2: Sort frequencies to find the task with the maximum frequency
    freq.sort((a, b) => a - b);

    // The maximum frequency task determines the number of "gaps" (Gaddha)
    let maxFreq = freq[freq.length - 1];
    let gaps = maxFreq - 1;

    // Step 3: Calculate the total available idle slots in these gaps
    // Each gap must have a size of 'n' to satisfy the cooling requirement
    let availableSlots = gaps * n;

    // Step 4: Fill the spaces (Gaddha) with the remaining tasks
    // We iterate backwards from the next highest frequency
    for (let i = 24; i >= 0; i--) {
        // A task cannot fill more than 'gaps' number of slots
        // (If a task also has maxFreq, it fills one slot in each gap)
        availableSlots -= Math.min(gaps, freq[i]);
    }

    // Step 5: Calculate total time
    // If availableSlots > 0, we must add that idle time to the total task count.
    // If availableSlots <= 0, the tasks themselves filled all gaps, so the 
    // total time is just the number of tasks.
    return availableSlots > 0 ? tasks.length + availableSlots : tasks.length;
};