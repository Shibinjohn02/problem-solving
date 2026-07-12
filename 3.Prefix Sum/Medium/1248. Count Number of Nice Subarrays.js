
// Example 1:
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

// Example 2:
// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.

// Example 3:
// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

// odd = 1
// even = 0

// Input:     [1, 1, 2, 1, 1]  k = 3
// Converted: [1, 1, 0, 1, 1]
// PrefixSum: [1, 2, 2, 3, 4]

// [2, 4, 6]
// [0, 0, 0]
// [0, 0, 0]

// Input:     [2, 2, 2, 1, 2, 2, 1, 2, 2, 2]  k = 2
// Converted: [0, 0, 0, 1, 0, 0, 1, 0, 0, 0] 
// PrefixSum: [0, 0, 0, 1, 1, 1, 2, 2, 2, 2]

// Hint 1: After replacing each even by zero and every odd by one can we use prefix sum to find answer ?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let prefixSum = 0, count = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += (nums[i] % 2 === 0) ? 0 : 1;
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};

let nums = [1, 1, 2, 1, 1], k = 3
let result = numberOfSubarrays(nums, k);
console.log('result=', result);