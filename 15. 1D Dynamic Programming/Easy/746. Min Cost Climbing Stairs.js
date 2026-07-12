
// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
/*
      Top (index 3) ✅
          ↑
        [2] 20
          ↑
        [1] 15
          ↑
        [0] 10

dp[i] = minimum total cost to reach stair i.
*/

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

// Har dp[i] me hum sirf us stair tak pahunchne ki minimum cost store kar rahe hain.
/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {

    // dp[i] = minimum total cost to reach stair i.
    const dp = new Array(cost.length).fill(0);

    // Base Cases
    dp[0] = cost[0];
    dp[1] = cost[1];

    // Transition
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
    }

    // Final Answer
    return Math.min(dp[cost.length - 1],dp[cost.length - 2]);
};


const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
const result = minCostClimbingStairs(cost);
console.log('result=', result);