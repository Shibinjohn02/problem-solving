
// Example 1:
// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

// [7] | [2,5,10,8] sum → 7 and 25 → max = 25
// [7,2] | [5,10,8] sum → 9 and 23 → max = 23
// [7,2,5] | [10,8] sum → 14 and 18 → max = 18 ✅
// [7,2,5,10] | [8] sum → 24 and 8 → max = 24

// Example 2:
// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.

// [1] | [2,3,4,5] → max = 14  
// [1,2] | [3,4,5] → max = 12  
// [1,2,3] | [4,5] → max = 9  ✅  
// [1,2,3,4] | [5] → max = 10

// Example 3:
// Input: nums = [1,2,3,4,5], k = 1
// Output: 10

// Low: max element in array, High: total sum of array

// Can I split array into ≤ k parts such that each part sum ≤ 15 ?
// We don’t try all splits → we build splits greedily

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function canSplit(nums, k, mid) {
    let sum = 0;
    let parts = 1; // start with 1 subarray

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > mid) return false;

        if (sum + nums[i] > mid) {
            parts++;
            sum = nums[i];
        } else {
            sum += nums[i];
        }
    }

    return parts <= k;
}

var splitArray = function (nums, k) {
    let low = 0, high = 0;

    for (let i = 0; i < nums.length; i++) {
        high += nums[i];
        if (nums[i] > low) {
            low = nums[i];
        }
    }

    if (k === 1) return high;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if (canSplit(nums, k, mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

let nums = [1, 2, 3, 4, 5], k = 1
const result = splitArray(nums, k);
console.log('result=', result);