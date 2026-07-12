
// Example 1:
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {

    if (num === 0) return 0

    let low = 1;
    let high = num;
    let ans = 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if ((mid * mid) <= num) {
            low = mid + 1
            ans = mid;
        } else {
            high = mid - 1
        }
    }

    return (ans * ans) === num ? true : false;
};

let num = 16
const result = isPerfectSquare(num)
console.log('result=', result)