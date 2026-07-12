

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Example 3:
// Input: nums = [-1], k = 1
// Output: -1.00000


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
    let i = 0, j = k - 1, maxAvg = -Math.pow(10, 4);;
    let sum = nums.slice(i, j + 1).reduce((sum, num) => sum + num, 0);
    maxAvg = Math.max(maxAvg, (sum / k));
    j++;
    while (j < nums.length) {
        sum = (sum + nums[j]) - nums[i];
        maxAvg = Math.max(maxAvg, (sum / k));
        i++;
        j++;
    }

    return maxAvg;
};

const nums = [-1], k = 1
const result = findMaxAverage(nums, k);
console.log('result=', result)