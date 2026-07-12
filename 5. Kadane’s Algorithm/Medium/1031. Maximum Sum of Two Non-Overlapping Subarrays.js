
// Example 1:
// Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
// Output: 20
// Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.

// Example 2:
// Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
// Output: 29
// Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.

// Example 3:
// Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
// Output: 31
// Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.

// Hint: We can use prefix sums to calculate any subarray sum quickly. For each L length subarray, find the best possible M length subarray that occurs before and after it.

//  0  1  2   3   4   5   6   7   8
// [0, 6, 5,  2,  2,  5,  1,  9,  4]
// [0, 6, 11, 13, 15, 20, 21, 30, 34]

// Case 1 → firstLen before secondLen
// Case 2 → secondLen before firstLen

// Run a loop
// Check which is max firstLen or secondLen
// which is max for ex: secondLen stop at (j - i + 1) === secondLen store max of s



/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {

    function helper(L, M) {
        let n = nums.length;

        // prefix sum
        let prefix = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        let maxL = 0;   // best L window seen so far
        let result = 0;

        for (let i = L + M; i <= n; i++) {

            // L window before current M window
            let Lsum = prefix[i - M] - prefix[i - M - L];
            maxL = Math.max(maxL, Lsum);

            // current M window
            let Msum = prefix[i] - prefix[i - M];

            result = Math.max(result, maxL + Msum);
        }

        return result;
    }

    return Math.max(helper(firstLen, secondLen), helper(secondLen, firstLen));
};
