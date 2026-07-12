
// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Example 3:
// Input: intervals = [[4,7],[1,4]]
// Output: [[1,7]]
// Explanation: Intervals [1,4] and [4,7] are considered overlapping.

// Example 4:
// Input: intervals = [[1,4],[0,4]]
// Output: [[0,4]]

// Example 5:
// Input: intervals = [[1,4],[2,3]]
// Output: [[1,4]]

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    let ans = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let last = ans[ans.length - 1];
        let interval = intervals[i];

        if (last[1] >= interval[0]) {
            ans[ans.length - 1][1] = Math.max(last[1], interval[1]);
        } else {
            ans.push(interval);
        }
    }

    return ans;
};

let intervals = [[1,4],[2,3]]
const result = merge(intervals)
console.log('result=', result);