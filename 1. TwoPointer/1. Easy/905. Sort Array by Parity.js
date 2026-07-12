// Asked by:

// Amazon
// Google
// Bloomberg
// Apple
// Adobe
// NVIDIA

// Reason:
// Tests your ability to recognize simple two-pointer partitioning.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:

// Input: nums = [0]
// Output: [0]

// Example 3:

// Input: nums = [0,1,2]
// Output: [0,2,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let left = 0, right = 1;

    while (right < nums.length) {

        if (nums[left] % 2 == 0) {
            left++;
        }

        if (nums[right] % 2 === 0 && nums[left] % 2 != 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }

        right++;
    }

    return nums;
};

let nums = [0, 1, 2];
const result = sortArrayByParity(nums);
console.log(result)