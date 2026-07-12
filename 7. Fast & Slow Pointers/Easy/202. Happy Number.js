
// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */

function getSumOfSquares(n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;      // get last digit
        sum += digit * digit;    // square and add
        n = Math.floor(n / 10);  // remove last digit
    }

    return sum;
}

var isHappy = function (n) {
    let unique = new Set();

    while (true) {
        let sum = getSumOfSquares(n);

        if (sum === 1) return true;

        n = sum;

        if (unique.has(sum)) return false;

        unique.add(sum);
    }
};