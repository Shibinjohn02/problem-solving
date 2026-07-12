
// Negative × Negative = Opposite of Opposite = Positive
// Negative + Negative = More in negative direction = Negative


// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let minEnd = nums[0];
    let maxEnd = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        let prevMin = minEnd;
        let prevMax = maxEnd;

        let v1 = num;
        let v2 = prevMin * num;
        let v3 = prevMax * num;

        minEnd = Math.min(v1, v2, v3);
        maxEnd = Math.max(v1, v2, v3);

        maxProduct = Math.max(maxProduct, maxEnd);
    }

    return maxProduct;
};


let nums =[1,-3,2,3,-4];
const result = maxProduct(nums);
console.log('result=', result);


// SUM problems → only max needed
// PRODUCT problems → max + min needed
