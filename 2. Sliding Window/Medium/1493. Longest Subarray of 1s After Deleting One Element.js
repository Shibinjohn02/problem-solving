

// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// 0 1 2 3 4
// 0 0 0 1 1
// l r

// 0 1 2 3 
// 1 1 0 1

// Questions:
// What am I tracking? → Length of the longest valid subarray
// Is the array contiguous?  → Yes
// What operation is allowed? → Deleting one element
// What does a “valid window” mean? → A window is valid if it contains at most one 0
// When is “invalid window” mean?  → When a window contains more than one zero
// What breaks the window?  → zeros = window length − ones count > 1
// ---------
// How do I fix a broken window validity?  → Shrink from the left
// Do I ever need to recompute the window from scratch?  → No — always update incrementally
// What is the cheapest way to make it uniform?  Delete one zero and keep all the 1s

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let left = 0, ones = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 1) ones++;

        while ((right - left + 1) - ones > 1) {
            if (nums[left] === 1) ones--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen ? maxLen - 1 : 0;
};

let nums = [1, 1, 0, 1]
const result = longestSubarray(nums);
console.log('result=', result);