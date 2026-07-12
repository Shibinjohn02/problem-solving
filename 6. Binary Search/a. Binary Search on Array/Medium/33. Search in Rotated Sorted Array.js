
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// Example 4:
// Input: nums = [3,4,5,6,1,2], target = 2
// Output: 5

// realIndex = (mid + rotation) % n

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function findPivot(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

function binarySearch(left, right, nums, target) {

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

var search = function (nums, target) {
    const pivot = findPivot(nums);

    // If target lies in left sorted pat
    if (target >= nums[0] && target <= nums[pivot - 1]) {
        return binarySearch(0, pivot - 1, nums, target);
    }

    // Otherwise search right part
    return binarySearch(pivot, nums.length - 1, nums, target);
};

let nums = [3, 4, 5, 6, 1, 2], target = 2
const result = search(nums, target);
console.log('result=', result)