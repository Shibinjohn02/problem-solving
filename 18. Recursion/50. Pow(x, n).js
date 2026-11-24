
// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2 raise to the powe -2 = 1/2 raise to the power 2 = 1/4 = 0.25

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
    if (n === 0) return 1;

    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    let half = myPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    }

    return x * half * half;
};
