
// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    const memo = Array.from(
        { length: nums.length },
        () => Array(nums.length + 1).fill(-1)
    );

    function solve(index, previousIndex) {

        if (index === nums.length) return 0;

        if (memo[index][previousIndex + 1] !== -1) {
            return memo[index][previousIndex + 1];
        }

        let canTake = 0;

        if (previousIndex === -1 || nums[index] > nums[previousIndex]) {
            canTake = 1 + solve(index + 1, index);
        }

        const canSkip = solve(index + 1, previousIndex);

        return memo[index][previousIndex + 1] = Math.max(canTake, canSkip);
    }

    return solve(0, -1);
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18]
const result = lengthOfLIS(nums)
console.log('result=', result)