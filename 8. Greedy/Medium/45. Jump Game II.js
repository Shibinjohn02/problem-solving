
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

// Example 3:
// Input: nums = [1,2,1,1,1]
// Output: 3

// Example 4:
// Input: nums = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]
// Output: 2

// Example 5:
// Input: nums = [1,1,1,1]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    let maxReach = 0;
    let currentEnd = 0;
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        maxReach = Math.max(maxReach, i + nums[i]);
        
        if (i === currentEnd) {
            count++;
            currentEnd = maxReach;
        }
    }

    return count;
};

let nums = [1,1,1,1];
const result = jump(nums);
console.log('result=', result);