
// Example 1:

// Input: nums = [1,1,1,2,2,3]
//                i j
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 0;  // pointer to write valid numbers

    for (let read = 0; read < nums.length; read++) {
        // Write first two occurrences without checking
        if (write < 2 || nums[read] !== nums[write - 2]) {
            nums[write] = nums[read];
            write++;
        }
    }

    return write; // new length
};
