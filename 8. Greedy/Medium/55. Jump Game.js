
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Start at index 0 → value = 2
// You can jump:
// 1 step → index 1
// 2 steps → index 2
// Suppose you go to index 1 → value = 3
// From here you can jump:
// to index 2
// to index 3
// to index 4
// Index 4 is the last index

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: Step-by-step
// Start at index 0 → value = 3
// You can go to:
// index 1
// index 2
// index 3

// Now check all possibilities:

// If you go to index 1 → value = 2

// You can go to:

// index 2
// index 3
// If you go to index 2 → value = 1

// You can go to:

// index 3
// If you go to index 3 → value = 0

// You are stuck
// You cannot move further.
// furthest

// Example 3:
// Input: nums = [1,0,1,0]
// Output: false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0, lastIndex = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {

        if (maxReach >= lastIndex) return true;

        if (i > maxReach) return false;

        maxReach = Math.max(maxReach, (i + nums[i]));
    }

    return false;
};

let nums = [1, 2, 1, 1, 1];
const result = canJump(nums);
console.log('result=', result);
