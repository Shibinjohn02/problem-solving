
// Example 1:
// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.

// Example 2:
// Input: nums = [9], target = 3
// Output: 0

/*
solve(4)
│
├── choose 1 → solve(3)
│   │
│   ├── choose 1 → solve(2)
│   │   │
│   │   ├── choose 1 → solve(1)
│   │   │   │
│   │   │   ├── choose 1 → solve(0) = 1
│   │   │   ├── choose 2 → solve(-1) = 0
│   │   │   └── choose 3 → solve(-2) = 0
│   │   │
│   │   ├── choose 2 → solve(0) = 1
│   │   └── choose 3 → solve(-1) = 0
│   │
│   ├── choose 2 → solve(1)
│   │   │
│   │   ├── choose 1 → solve(0) = 1
│   │   ├── choose 2 → solve(-1) = 0
│   │   └── choose 3 → solve(-2) = 0
│   │
│   └── choose 3 → solve(0) = 1
│
├── choose 2 → solve(2)
│   │
│   ├── choose 1 → solve(1)
│   │   │
│   │   ├── choose 1 → solve(0) = 1
│   │   ├── choose 2 → solve(-1) = 0
│   │   └── choose 3 → solve(-2) = 0
│   │
│   ├── choose 2 → solve(0) = 1
│   └── choose 3 → solve(-1) = 0
│
└── choose 3 → solve(1)
    │
    ├── choose 1 → solve(0) = 1
    ├── choose 2 → solve(-1) = 0
    └── choose 3 → solve(-2) = 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

    const memo = new Map();

    function solve(remainingTarget) {

        if (remainingTarget === 0) return 1;

        if (remainingTarget < 0) return 0;

        if (memo.has(remainingTarget)) {
            return memo.get(remainingTarget);
        }

        let totalWays = 0;

        for (const num of nums) {
            totalWays += solve(remainingTarget - num);
        }

        memo.set(remainingTarget, totalWays);

        return totalWays;
    }

    return solve(target);
};

let nums = [1, 2, 3], target = 4
const result = combinationSum4(nums, target);
console.log('result=', result);