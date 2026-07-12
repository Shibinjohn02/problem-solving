// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Input: [1,2,0,3,12]
// Output: [1,2,3,12,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;

    for (right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            let temp = nums[left];
            nums[left] = nums[right]
            nums[right] = temp;
            left++;
        }
    }
};

const result = moveZeroes([1, 2, 0, 3, 12])
console.log("result=", result)