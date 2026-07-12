

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:

// Input: nums = [6,2,6,5,1,2]
// [1,2,2,5,6,6]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// a = 6, b = 2, c = 6, d = 5,  e = 1, f = 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let left = 0, right = 1, maxSum = 0;
    nums.sort((a, b) => a - b);

    while (right < nums.length) {
        maxSum += nums[left];
        left += 2;
        right += 2;
    }

    return maxSum;
};

let nums = [6, 2, 6, 5, 1, 2];
const result = arrayPairSum(nums);
console.log('result=', result)




// The 5 things to remember permanently

// Sort the array.
// Pair adjacent elements.
// Take every alternate element (0,2,4,...).
// This is a Parallel Two-Pointer technique.
// Sorting ensures optimal minimum sum.