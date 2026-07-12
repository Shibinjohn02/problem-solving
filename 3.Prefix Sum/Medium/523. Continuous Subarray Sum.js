

// Example 1:
// Input: nums = [23, 2, 4, 6, 7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

// Example 2:
// Input: nums = [23, 2, 6, 4, 7] , k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

// Example 3:
// Input: nums = [23, 2, 6, 4, 7], k = 13
// Output: false

// A good subarray is a subarray where:
// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.

// k = prefix[r] - prefix[l - 1]
// prefix[l - 1] = prefix[r] - k

// (prefix[r] - prefix[l-1]) % k = 0
// prefix[r] % k == prefix[l-1] % k

// [23, 2, 4, 6, 7]
// [23, 25, 29, 35, 42]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, k) {
    let prefixSum = 0;
    const map = new Map();
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let rem = ((prefixSum % k) + k) % k;

        if (map.has(rem)) {
            if (i - map.get(rem) >= 2) {
                return true;
            }
        } else {
            map.set(rem, i);
        }
    }

    return false;
};

let nums = [23, 2, 4, 6, 7], k = 6
const result = checkSubarraySum(nums, k);
console.log('resukt=', result)


// 🔑 General truth (IMPORTANT)

// Agar a aur b ka remainder same hai,
// toh a − b hamesha K ka multiple hota hai.

// or

// Agar (a − b) ka remainder 0 hai
// toh a % k aur b % k same honge.

// Ex: (a - b) % K = 0  ⇔  a % K == b % K


// Thats why:

// subarraySum(l → r) = prefix[r] - prefix[l-1]
// subarraySum % K = 0
// (prefix[r] - prefix[l-1]) % K = 0

// Apply same Math rule:

// a = prefix[r]
// b = prefix[l-1]
// prefix[r] % K == prefix[l-1] % K

// 🔐 Final takeaway

// 1. Prefix sum hamesha difference based hota hai
// Ex: subarraySum = prefix[r] − prefix[l-1]
// 👉 Subarray difference se nikalta hai,
// addition se kabhi nahi.
// Isliye modulo rule bhi difference pe lagega.

// 2. Modulo rule sirf difference pe valid hota hai
// 3. Addition ka is problem se koi role nahi