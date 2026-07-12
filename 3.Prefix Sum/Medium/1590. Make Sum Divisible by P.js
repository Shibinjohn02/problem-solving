

// Example 1:
// Input: nums = [3,1,4,2], p = 6
// Output: 1
// Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.

// Example 2:
// Input: nums = [6,3,5,2], p = 9
// Output: 2
// Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

// Example 3:
// Input: nums = [1,2,3], p = 3
// Output: 0
// Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.

// [3,1,4,2]
// [3,4,8,10]

// [6, 3, 5, 2,  0]
// [6, 9, 14,16, 16]

// [1,2,3]
// [1,3,6]

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    const target = totalSum % p;

    // If already divisible, no need to remove anything
    if (target === 0) return 0;

    const map = new Map();
    map.set(0, -1); // prefix remainder 0 at index -1

    let prefix = 0;
    let minLen = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefix = (prefix + nums[i]) % p;

        // We want: (prefix - prev) % p == target
        const needed = (prefix - target + p) % p;

        if (map.has(needed)) {
            minLen = Math.min(minLen, i - map.get(needed));
        }

        // Store earliest index for this remainder
        if (!map.has(prefix)) {
            map.set(prefix, i);
        }
    }

    return minLen === nums.length ? -1 : minLen;
};
