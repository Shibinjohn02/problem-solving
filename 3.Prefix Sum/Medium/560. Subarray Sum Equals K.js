

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// [1,1,1] -> [1,2,3]
// [1,2,3] -> [1,3,5]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sum(l → r) = k
// k = prefix[r] - prefix[l - 1]
// prefix[l - 1] = prefix[r] - k


// For example:
// k = 2
// 

var subarraySum = function (nums, k) {
    let prefixSum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};

let nums = [1, 1, 1], k = 2;
const result = subarraySum(nums, k);
console.log('resukt=', result)



// End (r)
//   |
//   |  "Mujhe goal chahiye"
//   |
// prefix[r] - goal  ----->  Map (past)
//                               |
//                               v
//                          Start (l-1)
