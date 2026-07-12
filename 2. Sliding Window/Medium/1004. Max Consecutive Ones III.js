

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// 0 1 2 3 4 5 6 7 8 9 10
// 1 1 1 0 0 0 1 1 1 1  0
//         l r

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/

var longestOnes = function(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, (right - left + 1));
    }

    return maxLen;
};


// One-line takeaway:
// Longest subarray with “at most K X” ⇒ Sliding Window (expand right, shrink left)