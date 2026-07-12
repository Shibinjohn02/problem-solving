
// Example 1:
// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.

// Example 2:
// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//  Version 1
var minimumDifference = function (nums, k) {
    nums.sort(function (a, b) { return b - a });
    let minDiff = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let subArr = nums.slice(i, i + k);
        let highest = subArr[0], lowest = subArr[subArr.length - 1];
        if (subArr.length === k) minDiff = Math.min(minDiff, (highest - lowest));
    }

    return minDiff;
};

//  Version 2
var minimumDifference = function(nums, k) {
    if (k === 1) return 0;

    nums.sort((a, b) => a - b);
    let minDiff = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        minDiff = Math.min(
            minDiff,
            nums[i + k - 1] - nums[i]
        );
    }

    return minDiff;
};

let nums = [9, 4, 1, 7], k = 2;
const result = minimumDifference(nums, k);
console.log('result=', result);