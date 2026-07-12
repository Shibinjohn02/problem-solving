
// Example 1:
// Input: s = "())"
// Output: 1

// Example 2:
// Input: s = "((("
// Output: 3

// Example 3:
// Input: s = "()))(("
// Output: 4

// Example 4:
// Input: s = "((()))"
// Output: 0

// Example 5:
// Input: s = ")))((("
// Output: 6

/**
 * @param {string} s
 * @return {number}
 */

var minAddToMakeValid = function (s) {
    let closing = 0, opening = 0;

    for (let char of s) {
        if (char === '(') opening++;
        else {
            if (opening !== 0) opening--;
            else closing++;
        }
    }

    return Math.abs(opening + closing);
};

let s = "())"
let result = minAddToMakeValid(s);
console.log('result=', result);