
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    // 1. State
    // dp[i] = Stair i tak pahunchne ke total number of ways.
    const dp = new Array(n + 1).fill(0);

    // 2. Base Cases
    // Stair 0 tak pahunchne ka 1 way hai (already wahin khade ho)
    dp[0] = 1;

    // Stair 1 tak pahunchne ka bhi 1 way hai
    dp[1] = 1;

    // 3. Transition
    // Current answer previous 2 states se banega
    // dp[i] = dp[i-1] + dp[i-2]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // 4. Final Answer
    // Hume stair n tak pahunchne ke ways chahiye
    return dp[n];
};

const n = 2;
const result = climbStairs(n);
console.log('result=', result);