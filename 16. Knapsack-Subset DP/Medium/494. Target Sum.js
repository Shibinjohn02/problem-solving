
// Example 1:
// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// Example 2:
// Input: nums = [1], target = 1
// Output: 1

/*
                                           solve(0,1)
                                          /          \
                                   solve(1,0)      solve(1,2)
                                   /      \         /      \
                          solve(2,-1) solve(2,1) solve(2,1) solve(2,3)
                           /     \      /    \      /   \      /   \
                     (-2)  (0) (0) (2) (0) (2) (2) (4)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {

    const memo = new Map();

    function solve(index, remainingTarget) {

        // Base Case
        if (index === nums.length) {

            if (remainingTarget === 0) return 1;

            return 0;
        }

        let memoKey = index + ',' + remainingTarget;

        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }

        // Choose +
        const positiveWays = solve(index + 1, remainingTarget - nums[index]);

        // Choose -
        const negativeWays = solve(index + 1, remainingTarget + nums[index]);

        const ways = positiveWays + negativeWays;

        memo.set(memoKey, ways);

        return ways;
    }

    return solve(0, target);
};