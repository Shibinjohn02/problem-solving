
// Example 1:
// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

// Example 2:
// Input: nums = [2,2,2,2,2]
// Output: 5
// Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.

/*
Step 1: Find the maximum LIS length.

nums = [1,3,5,4,7]
Longest LIS length = 4

Step 2: Now ask: How many increasing subsequences have length exactly 4?

1 → 3 → 5 → 7
1 → 3 → 4 → 7

Count: 2
So Return: 2


                    solve(0,-1)
                       [1]
                     /     \
                  TAKE     SKIP
                   1          1
                  /            \
          solve(1,0)        solve(1,-1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {

    const memo = new Map();

    function solve(index, previousIndex) {

        if (index === nums.length) {
            return {
                length: 0,
                count: 1
            };
        }

        const key = index + "," + previousIndex;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // Skip current element
        const skip = solve(index + 1, previousIndex);

        let take = {
            length: 0,
            count: 0
        };

        // Take current element
        if (previousIndex === -1 || nums[index] > nums[previousIndex]) {
            const next = solve(index + 1, index);

            take = {
                length: 1 + next.length,
                count: next.count
            };
        }

        let result;

        if (take.length > skip.length) {
            result = take;
        }
        else if (skip.length > take.length) {
            result = skip;
        }
        else {
            result = {
                length: take.length,
                count: take.count + skip.count
            };
        }

        memo.set(key, result);

        return result;
    }

    return solve(0, -1).count;
};

let nums = [1, 3, 5, 4, 7]
const result = findNumberOfLIS(nums)
console.log('result=', result)