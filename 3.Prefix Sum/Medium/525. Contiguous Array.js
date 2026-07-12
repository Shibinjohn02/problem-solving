

// Example 1:
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Example 2:
// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Example 3:
// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.

// [0, 1, 1, 1, 1, 1, 0, 0, 0]
// [0, 1, 2, 3, 4, 5, 5, 5, 5]

// Index:        0  1  2  3  4  5   6   7   8
// Converted:  [-1, 1, 1, 1, 1, 1, -1, -1, -1]
// Prefix Sum: [-1, 0, 1, 2, 3, 4,  3,  2,  1]

// 👉 Order does NOT matter
// 👉 Only the COUNT matters
// Hence: number of 0s == number of 1s
// How can I convert this into a “sum becomes zero” kind of problem?
// Once you do that conversion, the problem becomes: “Find the longest contiguous subarray whose sum is 0”

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxLength = function (nums) {
    let converted = new Array(nums.length).fill(0);
    let prefixSum = 0, maxLength = 0;
    let map = new Map();
    map.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        converted[i] = nums[i] === 0 ? -1 : 1;
    }

    for (let i = 0; i < converted.length; i++) {
        prefixSum += converted[i];

        if (map.has(prefixSum)) {
            maxLength = Math.max(maxLength, i - map.get(prefixSum));
        } else {
            map.set(prefixSum, i);
        }
    }

    return maxLength;
};

let nums = [0, 1];
const result = findMaxLength(nums);
console.log('result=', result);