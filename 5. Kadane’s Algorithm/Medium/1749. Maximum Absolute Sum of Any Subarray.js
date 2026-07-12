

// Example 1:
// Input: nums = [1,-3,2,3,-4]
// Output: 5
// Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.

// Example 2:
// Input: nums = [2,-5,1,-4,3,-2]
// Output: 8
// Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.

// big positive sum
// big negative sum -> abs(-100) = 100

// []
// sum = 0
// abs = 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {

    let maxEnding = nums[0];
    let minEnding = nums[0];

    let maxSum = nums[0];
    let minSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        maxEnding = Math.max(num, maxEnding + num);
        maxSum = Math.max(maxSum, maxEnding);

        minEnding = Math.min(num, minEnding + num);
        minSum = Math.min(minSum, minEnding);
    }

    return Math.max(maxSum, -minSum);
};


let nums = [2, -5, 1, -4, 3, -2];
const result = maxAbsoluteSum(nums);
console.log('result=', result);