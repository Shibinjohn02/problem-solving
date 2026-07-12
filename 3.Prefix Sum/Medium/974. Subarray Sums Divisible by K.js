

// Example 1:
// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:
// Input: nums = [5], k = 9
// Output: 0

// Pehle: prefix[r] - prefix[l-1] = goal
// Ab:   (prefix[r] - prefix[l-1]) % k = 0
// prefix[r] % k == prefix[l-1] % k

// [4, 5, 0, -2, -3, 1]
// [4, 9, 9, 7, 4, 5]

// Same remainder ⇒
// prefix[0] = 4   → rem = 4
// prefix[1] = 9   → rem = 4

// (prefix[1] - prefix[0]) % 5 = 0
// 9 - 4 = 5
// 5 % 5 = 0

// Ab actual subarray kaun sa hai?
// subarray = (l → r)
// l = (index of first prefix) + 1
// So:
// l = 0 + 1 = 1
// r = 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/

var subarraysDivByK = function (nums, k) {
    let prefixSum = 0, count = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let rem = ((prefixSum % k) + k) % k;

        if (map.has(rem)) {
            count += map.get(rem);
        }

        map.set(rem, (map.get(rem) || 0) + 1);
    }

    return count;
};

let nums = [4, 5, 0, -2, -3, 1], k = 5
const result = subarraysDivByK(nums, k);
console.log('resukt=', result)


// Think plates and apples 🍎

// 17 apples
// 5 apples per plate
// 17 / 5 = 3 → 3 full plates
// 17 % 5 = 2 → 2 apples left

// One-line takeaway: Division tells “how many times”, modulo tells “what remains”.