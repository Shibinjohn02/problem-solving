
// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    let result = new Array(n);
    let index = n - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left]
        let rightSquare = nums[right] * nums[right]

        if (leftSquare > rightSquare) {
            result[index] = leftSquare
            left++;
        } else {
            result[index] = rightSquare
            right--;
        }
        index--;
    }
    return result
};


console.log(result)