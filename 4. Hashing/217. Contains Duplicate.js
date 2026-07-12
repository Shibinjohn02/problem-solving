

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (map.get(nums[i])) {
            return true;
        }

        map.set(nums[i], 1);
    }

    return false;
};

let nums = [1, 2, 3, 1];
let result = containsDuplicate(nums);
console.log('result=', result);