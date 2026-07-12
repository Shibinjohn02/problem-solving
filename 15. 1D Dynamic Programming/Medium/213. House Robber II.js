
// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:
// Input: nums = [1,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    if (nums.length === 1) return nums[0];

    function robLinear(arr) {
        if (arr.length === 1) return arr[0];

        const dp = new Array(arr.length).fill(0);

        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1]);

        for (let i = 2; i < arr.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
        }

        return dp[arr.length - 1];
    }

    // Case 1: Exclude last house
    const case1 = robLinear(nums.slice(0, nums.length - 1));

    // Case 2: Exclude first house
    const case2 = robLinear(nums.slice(1));

    return Math.max(case1, case2);
};