
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Example 4:

// Input: s = "0P"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

// Solution 1: Took 7 ms
var isPalindrome = function (s) {
    let left = 0, right = s.length - 1;

    while (left < right) {

        if (!/[a-z0-9]/i.test(s[left])) { left++; continue; }
        if (!/[a-z0-9]/i.test(s[right])) { right--; continue; }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
        }
    }

    return true
};

// Solution 2: Took 5 ms
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true
};


let s = "A man, a plan, a canal: Panama";
const result = isPalindrome(s)
console.log('result=', result)