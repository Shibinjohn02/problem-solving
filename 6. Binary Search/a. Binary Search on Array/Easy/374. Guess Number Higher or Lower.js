

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let res = guess(mid);

        if (res === 0) {
            return mid;
        }
        else if (res === 1) {
            left = mid + 1
        }
        else if (res === -1) {
            right = mid - 1;
        }
    }

    return left;
};

const n = 10;
const result = guessNumber(n);
console.log('result=', result);