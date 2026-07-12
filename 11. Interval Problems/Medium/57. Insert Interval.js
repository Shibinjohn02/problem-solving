
// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Example 3:
// Input: intervals = [[1,5]], newInterval = [2,7]
// Output: [[1,7]]

// Example 4:
// Input: intervals = [[1,5]], newInterval = [6,8]
// Output: [[1,5],[6,8]]

/*
This problem becomes very easy when you think in 3 zones:
Before Overlap  -> copy
Overlap         -> merge into newInterval
After Overlap   -> copy
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

    let ans = [];
    let i = 0;

    // Add all intervals completely before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i]);
        i++;
    }

    // Merge all overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    ans.push(newInterval);

    // Add remaining intervals
    while (i < intervals.length) {
        ans.push(intervals[i]);
        i++;
    }

    return ans;
};

let intervals = [[1, 5]], newInterval = [6, 8]
const result = insert(intervals, newInterval);
console.log('result=', result);