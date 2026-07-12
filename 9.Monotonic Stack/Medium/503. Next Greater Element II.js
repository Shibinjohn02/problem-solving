
// Example 1:
// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.

// Example 2:
// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

// Example 3:
// Input: nums = [5,4,3,2,1]
// Expected: [-1,5,5,5,5]
// Output:   [-1,5,4,3,2]

// Example 4:
// Input: nums = [1,1,1,1,1]
// Expected:[-1,-1,-1,-1,-1]
// Output:   [-1,1,1,1,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let stack = [];
    let ans = new Array(n).fill(-1);

    for (let i = 0; i < 2 * n; i++) {
        let curr = nums[i % n];

        while (stack.length && curr > nums[stack[stack.length - 1]]) {
            let idx = stack.pop();
            ans[idx] = curr;
        }

        // push only first pass
        if (i < n) {
            stack.push(i);
        }
    }

    return ans;
};

let nums = [1, 1, 1, 1, 1]
const result = nextGreaterElements(nums);
console.log('result=', result);