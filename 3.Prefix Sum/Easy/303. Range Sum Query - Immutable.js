
// Example 1:
// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.prefix = []; // [-2, -2, 1, -4, -2, -3]
    let runningSum = 0;


    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        this.prefix[i] = runningSum;
    }
    
};

NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) {
        return this.prefix[right];
    }
    return this.prefix[right] - this.prefix[left - 1];
};


let nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums)
console.log(obj.sumRange(0, 2))