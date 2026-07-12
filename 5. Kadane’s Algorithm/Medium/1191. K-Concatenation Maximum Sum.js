


// Example 1:
// Input: arr = [1,2], k = 3
// Output: 9

// Example 2:
// Input: arr = [1,-2,1], k = 5
// Output: 2

// Example 3:
// Input: arr = [-1,-2], k = 7
// Output: 0

// Example 4:
// Input: arr = [-5,4,-4,-3,5,-3], k= 3
// Output: 5

// Example: 5:
// Input: arr = [-5,-2,0,0,3,9,-2,-5,4], k = 5
// Output: 20

// Example: 6:
// Input: arr = [2, -1, 2], k = 5
// Output:

// Example: 7:
// Input: arr = [-1], k = 1
// Output:

// stay inside one copy
// OR
// cross boundaries between copies

// Cases:
// 1. For k = 1 use kadane's Algo
// 2. For k > 1

// Case A — Inside one copy only
// [5, -1, 4]: Best subarray may be inside one block. So Kadane on single array is enough.

// Case B — Crossing boundaries
// arr = [2, -1, 2]
// Single best = 3
// [2, -1, 2 | 2, -1, 2] = 6 (total sum of arr is positive)

// If totalSum <= 0 then use kadane on 1 or 2 copies max
// If totalSum > 0
// a. [1,2,1,2,1,2] - use kadane on entire Array find sum and multiple it k times
// b. [1,-2,1, 1,-2,1, 1,-2,1, 1,-2,1, 1,-2,1] - Suffix + Prefix

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
    let maxCurrent = -1;
    let maxSub = -1;
    let minCurrent = arr[0];
    let minSub = arr[0]
    let maxPrefix = -Infinity;
    let maxSuffix = 0;
    let totalSum = 0;
    let runningSum = 0;
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxSub = Math.max(maxSub, maxCurrent);

        minCurrent = Math.min(arr[i], minCurrent + arr[i]);
        minSub = Math.min(minSub, minCurrent);

        totalSum += arr[i];
        maxPrefix = Math.max(maxPrefix, totalSum);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        runningSum += arr[i];
        maxSuffix = Math.max(maxSuffix, runningSum);
    }

    if (maxSub <= 0) return 0;

    if (k === 1) return maxSub;

    // If total sum is negative
    if (totalSum <= 0) {
        result = Math.max(maxSub, maxPrefix + maxSuffix);
    }

    // For +ve: Case A: Inside one copy only
    if (totalSum > 0 && minSub > 0) {
        result = maxSub * k;
    } else if (totalSum > 0) {
        // For +ve:  Case B: Crossing boundaries suffix + full copies + prefix
        result = maxSuffix + ((k - 2) * totalSum) + maxPrefix;
    }

    return result % (1000000007);
};

let arr = [1, -2, 1], k = 5
const result = kConcatenationMaxSum(arr, k);
console.log('result=', result);