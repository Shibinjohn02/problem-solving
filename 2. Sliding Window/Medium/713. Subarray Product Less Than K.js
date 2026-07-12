

// Example 1:
// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

// Example 2:
// Input: nums = [1,2,3], k = 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;

    let left = 0, right = 0, product = 1, count = 0;

    while (right < nums.length) {
        product = product * nums[right];

        while (product >= k) {
            product = product / nums[left];
            left++;
        }

        count = count + (right - left + 1);
        right++;
    }

    return count;
};

let nums = [10, 5, 2, 6], k = 100;
const result1 = numSubarrayProductLessThanK(nums, k);
console.log('result1=', result1);

// 🧠 One-line rule to remember forever ()

// Counting + “at most / less than” → (right - left + 1)
// Length / exact match → normal sliding window

// Note: Window validity is monotonic
// a. expanding right may break it
// b. shrinking left always fixes it