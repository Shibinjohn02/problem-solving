

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Example 4:
// Input: target = 11, nums = [1,2,3,4,5]
// Output: 3

// Example 5:
// Input: target = 15, nums = [1,2,3,4,5]
// Output: 5

// 0 1 2 3 4 5
// 2 3 1 2 4 3
// i     j

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
    let i = 0, j = 0, minCount = Infinity, sum = 0;

    while (j < nums.length) {
        sum += nums[j];

        while (sum >= target) {
            minCount = Math.min(minCount, (j - i) + 1);
            sum -= nums[i];
            i++;
        }

        j++;
    }

    return minCount === Infinity ? 0 : minCount;
};

const target = 15, nums = [1, 2, 3, 4, 5]
const result = minSubArrayLen(target, nums);
console.log('result=', result)