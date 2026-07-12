
// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
// Explaination: abs(0 - 3) = 3 > 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    // if duplicate found in current window
    if (window.has(nums[i])) return true;

    window.add(nums[i]);

    // keep window size ≤ k
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
};

// var containsNearbyDuplicate = function (nums, k) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
//       return true;
//     }
//     map.set(nums[i], i);
//   }

//   return false;
// };


let nums = [1, 2, 3, 1, 2, 3], k = 2;
const result = containsNearbyDuplicate(nums, k);
console.log('result=', result);
