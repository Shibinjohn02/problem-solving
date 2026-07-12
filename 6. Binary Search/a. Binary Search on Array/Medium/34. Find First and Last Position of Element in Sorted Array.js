
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

//  0  1  2  3  5  6
// [5, 7, 7, 8, 8, 10]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let leftMost = -1
    let rightMost = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            leftMost = mid;
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            rightMost = mid;
            left = left + 1;
        }
    }

    return [leftMost, rightMost];
};

let nums = [5, 7, 7, 8, 8, 10], target = 8
const result = searchRange(nums, target);
console.log('result=', result)