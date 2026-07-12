
// Example 1:
// Input: arr = [1,-2,0,3]
// Output: 4
// Explanation: Because we can choose [1,-2,0,3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.

// Example 2:
// Input: arr = [1,-2,-2,3]
// Output: 3
// Explanation: We just choose [3] and it's the maximum sum.

// Example 3:
// Input: arr = [-1,-1,-1,-1]
// Output: -1
// Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.

// [1,-2,-2,3]
// [1, -1, -3. 0]

// Brute Force: Create pair by removing each element one by one for ex: 1,-2,0 | 1,0,3 | -2,0,3

/*
Cases:
Case A. No deletion used:
    1. All are negative elements in array. - return maximum element (normal Kadane)
    2. All are positive elements in array. - use direct kadane's

Case B. One deletion used
One deletion → left[i-1] + right[i+1]

nums = [1, -2, 0, 3]
right[3] = 3
right[2] = max(0, 0 + 3) = 3
right[1] = max(-2, -2 + 3) = 1
right[0] = max(1, 1 + 1) = 2
left =  [1, -1, 0, 3]
right = [2, 1, 3, 3]
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {

    if (arr.length === 1) return arr[0];

    let n = arr.length;
    let left = new Array(n);
    let right = new Array(n);
    let result = -Infinity;
    let current = arr[0];
    let maxSum = arr[0];

    left[0] = arr[0];

    for (let i = 1; i < n; i++) {
        current = Math.max(arr[i], current + arr[i]);
        maxSum = Math.max(maxSum, current);

        left[i] = Math.max(arr[i], left[i - 1] + arr[i]);
    }

    right[n - 1] = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(arr[i], right[i + 1] + arr[i]);
    }

    for (let i = 1; i < n - 1; i++) {
        result = Math.max(result, left[i - 1] + right[i + 1]);
    }

    return Math.max(result, maxSum);
};

// Better Version:
var maximumSum = function (arr) {
    let keep = arr[0];      // max ending here without deletion
    let del = -Infinity;    // max ending here with one deletion
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        del = Math.max(del + arr[i], keep);   // delete current OR extend deleted
        keep = Math.max(arr[i], keep + arr[i]);

        result = Math.max(result, keep, del);
    }

    return result;
};

let arr = [1, -2, -2, 3];
const result = maximumSum(arr);
console.log("result=", result);