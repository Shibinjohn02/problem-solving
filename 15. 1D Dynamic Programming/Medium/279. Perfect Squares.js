
// Example 1:
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

    const squares = [];

    // Generate all perfect squares <= n
    for (let i = 1; i * i <= n; i++) {
        squares.push(i * i);
    }

    // State:
    // dp[i] = Minimum perfect squares needed to make integer i.
    const dp = new Array(n + 1).fill(Infinity);

    // Base Case:
    // 0 perfect squares are needed to make integer 0.
    dp[0] = 0;

    // Build the answer for every integer from 1 to n.
    for (let i = 1; i <= n; i++) {

        // Try every perfect square as the current choice.
        for (const square of squares) {

            // The perfect square can be used only if it does not exceed i.
            if (i - square >= 0) {

                // Transition:
                // Current best answer
                // vs
                // Answer after choosing the current perfect square.
                dp[i] = Math.min(dp[i], dp[i - square] + 1);
            }
        }
    }

    // Final Answer
    return dp[n];
};