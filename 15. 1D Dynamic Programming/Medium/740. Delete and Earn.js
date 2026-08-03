
// Example 1:
// Input: nums = [3,4,2]
// Output: 6
// Explanation: You can perform the following operations:
// - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
// - Delete 2 to earn 2 points. nums = [].
// You earn a total of 6 points.

// Example 2:
// Input: nums = [2,2,3,3,3,4]
// Output: 9
// Explanation: You can perform the following operations:
// - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
// - Delete a 3 again to earn 3 points. nums = [3].
// - Delete a 3 once more to earn 3 points. nums = [].
// You earn a total of 9 points.

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const freq = new Map();
    let maxNum = 0;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + num);
        maxNum = Math.max(maxNum, num);
    }

    const earn = new Array(maxNum + 1).fill(0);

    for (const [num, points] of freq) {
        earn[num] = points;
    }

    // State: dp[i] = Maximum points using values 0...i
    const dp = new Array(earn.length).fill(0);

    // Base Cases
    dp[0] = earn[0];
    dp[1] = Math.max(earn[0], earn[1]);

    // Transition
    for (let i = 2; i < earn.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + earn[i]);
    }

    return dp[earn.length - 1];
};

const nums = [2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5]
const result = deleteAndEarn(nums);
console.log('result=', result);