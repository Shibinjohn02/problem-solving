

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Example 3:
// Input: nums = [1,0,1,2]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
// Version 1
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {

        if (!set.has(nums[i] - 1)) {
            let val = nums[i];
            while (set.has(val)) {
                val += 1;
            }
            maxLength = Math.max(maxLength, val - nums[i]);
        }
    }

    return maxLength;
};

// Better Version
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
};


let nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log('result=', result);