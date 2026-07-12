
// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Example 3:

// Input: nums = [2,3,8,9,10], target = 16
// Output: 15

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort(function (a, b) { return a - b });

    let diff = 0, closestSum = 0, i = 0, left = 1, right = nums.length - 1;

    while (i < (nums.length - 2)) {

        let sum = nums[i] + nums[left] + nums[right];

        if ((left === 1 && right === nums.length - 1) || Math.abs(sum - target) < diff) {
            diff = Math.abs(sum - target);
            closestSum = sum;
        }

        if (sum === target) {
            return sum;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }

        if (left === right) {
            i++;
            left = i + 1;
            right = nums.length - 1;
        }
    }

    return closestSum;
};


let nums = [2, 3, 8, 9, 10], target = 16
const result = threeSumClosest(nums, target);
console.log('result=', result);