

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Questions:
// Q1: What cumulative quantity am I tracking? → Product
// Q2: What does prefix[i] mean? → Product of all elements from index 0 to i
// Q3: Can answer[i] be written as “total − something”? → No subtraction (product problem)
// Q4: Do I need answer for one index or all? → All indices (So: One pass won’t be enough, Need left info + right info)
// Q5: What is excluded at index i? → nums[i] itself
// Q6: Can I decompose the array? → Yes: [ productLeft | nums[i] | productRight ]
// Q7. Can I precompute history to avoid recomputation?

// [1, 2, 3, 4]
//  0  1  2  3
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let left = new Array(nums.length), right = new Array(nums.length), answer = new Array(nums.length);

    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    right[nums.length - 1] = 1
    for (let i = nums.length - 2; i > -1; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};

let nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
// console.log('result=', result)