
// Example 1:
// Input: n = 5, minProfit = 3, group = [2,2], profit = [2,3]
// Output: 2
// Explanation: To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
// In total, there are 2 schemes.

// Example 2:
// Input: n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
// Output: 7
// Explanation: To make a profit of at least 5, the group could commit any crimes, as long as they commit one.
// There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).

/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {

    const memo = Array.from(
        { length: group.length + 1 },
        () =>
            Array.from(
                { length: n + 1 },
                () => Array(minProfit + 1).fill(-1)
            )
    );
    const MOD = 1000000007;

    function solve(index, membersLeft, remainingProfit) {

        if (index === group.length) {
            return remainingProfit === 0 ? 1 : 0;
        }

        if (memo[index][membersLeft][remainingProfit] !== -1) {
            return memo[index][membersLeft][remainingProfit];
        }

        let canTake = 0;

        if (membersLeft >= group[index]) {
            canTake = solve(index + 1, membersLeft - group[index], Math.max(0, remainingProfit - profit[index]));
        }

        const canSkip = solve(index + 1, membersLeft, remainingProfit);

        const schemes = (canTake + canSkip) % MOD;

        memo[index][membersLeft][remainingProfit] = schemes

        return schemes;
    }

    return solve(0, n, minProfit);
};