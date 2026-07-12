
// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// [1, 7, 3, 6, 5, 6]
// [1, 8, 11, 17, 22, 28]
//  i

/**
 * @param {number[]} nums
 * @return {number}
 */

// Pure math question:
// leftSum + nums[i] + rightSum = totalSum

// Rearrange
// rightSum = totalSum - leftSum - nums[i]

var pivotIndex = function (nums) {
    let totalSum = 0;
    let leftSum = 0;

    for (let num of nums) {
        totalSum += num;
    }

    for (let i = 0; i < nums.length; i++) {
        console.log(totalSum - leftSum - nums[i]);
        if (leftSum === (totalSum - leftSum - nums[i])) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};

let nums = [1, 7, 3, 6, 5, 6];
const result = pivotIndex(nums);
console.log('result=', result)
