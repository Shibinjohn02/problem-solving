
// Example 1:
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.

// Example 2:
// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

// Example 3:
// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.

// In a circular array, the end connects back to the start.
// So after index 3 comes index 0 again.
// Mathematically: next index of i = (i + 1) % n

// normal segment
// OR
// wrapped segment (end + beginning)


// circularMax = totalSum - minimumSubarraySum (middle part)
// total array = prefix + middle + suffix
// prefix + suffix = totalSum - middle

// We compute:

// 1️⃣ Normal Kadane → maxSubarray
// 2️⃣ Minimum subarray → minSubarray
// 3️⃣ Total sum → totalSum

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let totalSum = 0;

    let maxCurrent = nums[0];
    let normalMax = nums[0];

    let minCurrent = nums[0];
    let minSub = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        totalSum += num;

        // Kadane for maximum subarray
        if (i > 0) {
            maxCurrent = Math.max(num, maxCurrent + num);
            normalMax = Math.max(normalMax, maxCurrent);

            // Kadane for minimum subarray
            minCurrent = Math.min(num, minCurrent + num);
            minSub = Math.min(minSub, minCurrent);
        }
    }

    // Edge case: all numbers are negative
    if (normalMax < 0) {
        return normalMax;
    }

    let circularMax = totalSum - minSub;

    return Math.max(normalMax, circularMax);
};


let nums = [1, -2, 3, -2];
const result = maxSubarraySumCircular(nums);
console.log('result=', result)