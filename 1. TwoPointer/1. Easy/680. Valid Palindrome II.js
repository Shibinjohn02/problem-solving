
// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abbca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
// Input: s = "abc"
// Output: false

// Example 4:
// Input: s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
// Output: true

// Example 5:
// Input: s = "aydmda"
// Output: true

// Example 6:
// Input: s = "deeee"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0, right = s.length - 1, deletedCount = 0;

    while (left < right) {


        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            if (
                s[left + 1] === s[right] &&
                (
                    (left + 2 < right - 2 && s[left + 2] === s[right - 2]) ||
                    (left + 2 > right - 2)
                )
            ) {
                left++;
            } else {
                right--;
            }
            deletedCount++;
        }

        if (deletedCount === 2) return false;
    }

    return true;
};

var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
    }
    return true;
};

function isPalindrome(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}


let s = "deeee";
const result = validPalindrome(s);
console.log('result=', result);

