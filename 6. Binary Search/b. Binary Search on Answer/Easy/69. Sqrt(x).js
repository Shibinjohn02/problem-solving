

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    if (x === 0) return 0

    let low = 1;
    let high = x;
    let ans = 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if ((mid * mid) <= x) {
            low = mid + 1
            ans = mid;
        } else {
            high = mid - 1
        }
    }

    return ans;
};

let x = 4
const result = mySqrt(x)
console.log('result=', result)