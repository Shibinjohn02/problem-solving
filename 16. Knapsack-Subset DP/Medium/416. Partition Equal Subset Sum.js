
// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:
// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Example 3:
// Input: nums = [3,3,6,8,16,16,16,18,20]
// Output: true

/*
Current = 1
Target = 11

Take
↓

Current = 5
Target = 10

--------------------

Skip
↓

Current = 5
Target = 11

Note: Kya main index se start karke remainingTarget bana sakta hoon?

canPartition(nums)
│
├── Calculate totalSum
│
├── Check odd/even
│
├── target = totalSum / 2
│
├── solve(index, remainingTarget)
│      │
│      ├── Base Case
│      ├── Take
│      ├── Skip
│      └── Return true/false
│
└── return solve(0, target)

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Approach: Recurrsion + Memoization (Top Down)
var canPartition = function (nums) {

    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    if (totalSum % 2 != 0) return false;

    let target = totalSum / 2;
    const memo = Array.from(
        { length: nums.length + 1 },
        () => Array(target + 1).fill(-1)
    );

    function solve(index, remainingTarget) {

        if (remainingTarget === 0) return true;

        if (index === nums.length) return false;

        if (memo[index][remainingTarget] !== -1) {
            return memo[index][remainingTarget];
        }

        let canTake = false;

        if (nums[index] <= remainingTarget) {
            canTake = solve(index + 1, remainingTarget - nums[index]);
        }

        let canSkip = solve(index + 1, remainingTarget)

        let answer = canTake || canSkip;

        memo[index][remainingTarget] = answer;

        return answer;
    }

    return solve(0, target);
};


// Approach: Tabular (Bottom Up)
// var canPartition = function (nums) {

//     let totalSum = nums.reduce((sum, num) => sum + num, 0);

//     // Odd sum can never be divided into two equal subsets.
//     if (totalSum % 2 !== 0) return false;

//     const target = totalSum / 2;

//     // State:
//     // dp[i][j] = Can we make sum 'j'
//     // using elements from index 'i' to the end?
//     const dp = Array.from(
//         { length: nums.length + 1 },
//         () => Array(target + 1).fill(false)
//     );

//     // Base Case:
//     // Sum 0 can always be formed by taking no elements.
//     for (let i = 0; i <= nums.length; i++) {
//         dp[i][0] = true;
//     }

//     // Fill table from bottom to top.
//     for (let index = nums.length - 1; index >= 0; index--) {

//         for (let remainingTarget = 1; remainingTarget <= target; remainingTarget++) {

//             // Choice 1: Skip current number.
//             let canSkip = dp[index + 1][remainingTarget];

//             // Choice 2: Take current number (if possible).
//             let canTake = false;

//             if (nums[index] <= remainingTarget) {
//                 canTake = dp[index + 1][remainingTarget - nums[index]];
//             }

//             dp[index][remainingTarget] = canTake || canSkip;
//         }
//     }

//     return dp[0][target];
// };

let nums = [3, 3, 6, 8, 16, 16, 16, 18, 20]
const result = canPartition(nums)
console.log('result=', result)