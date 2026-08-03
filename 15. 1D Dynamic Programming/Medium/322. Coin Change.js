
// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    // State:
    // dp[i] = Minimum coins needed to make amount i.
    const dp = new Array(amount + 1).fill(Infinity);

    // Base Case:
    // 0 coins are needed to make amount 0.
    dp[0] = 0;

    // Build the answer for every amount from 1 to amount.
    for (let i = 1; i <= amount; i++) {

        // Try every coin as the current coin.
        for (const coin of coins) {

            // Coin can be used only if it doesn't exceed the current amount.
            if (i - coin >= 0) {

                // Transition:
                // Current best answer
                // vs
                // Answer after choosing the current coin.
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // If amount cannot be formed, return -1.
    return dp[amount] === Infinity ? -1 : dp[amount];
};