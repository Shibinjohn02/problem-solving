
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:
// Input: n = 3
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {

    if (n <= 0) return false

    if (n === 1) return true

    if (n % 2 !== 0) return false

    return isPowerOfTwo(n / 2);
};