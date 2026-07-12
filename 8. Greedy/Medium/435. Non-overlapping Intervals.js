
// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// Example 4:
// Input: intervals = [[1,4], [2,3]]
// Output: 1    
// Explanation: You need to remove Either one — both choices work.

// Example 5:
// Input: [[1,3], [2,5]]
// Output: 1

// Example 6:
// Input: [[1,100],[11,22],[1,11],[2,12]]
// Output: 2

// Example 7:
// Input: [[0,1],[3,4],[1,2]]
// Output: 0

/* 
Cases: 
1. Same start → overlap
2. Same end → overlap
3. Different start and different end, still overlapping. (So containment is one case, not the only case)
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

// My Approch
var eraseOverlapIntervals = function (intervals) {

    if (intervals.length === 1) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let current = intervals[1], previous = intervals[0], shouldUpdate = false;;

    for (let i = 1; i < intervals.length; i++) {

        if (i > 1) {
            if (!shouldUpdate) previous = JSON.parse(JSON.stringify(current));
            current = intervals[i];
        }

        if (current[0] < previous[1]) {
            count++;
            shouldUpdate = true;
        } else {
            shouldUpdate = false;
        }
    }

    return count;
}

// Better Approach
var eraseOverlapIntervals = function (intervals) {

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let previous = intervals[0];

    for (let i = 1; i < intervals.length; i++) {

        let current = intervals[i];

        if (current[0] < previous[1]) {
            count++; // remove current
        } else {
            previous = current; // safe, update
        }
    }

    return count;
};

let intervals = [[1, 100], [11, 22], [1, 11], [2, 12]];
const result = eraseOverlapIntervals(intervals);
console.log('result=', result);

