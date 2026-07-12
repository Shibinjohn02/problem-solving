// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
    let left = 0, right = s.length - 1;

    while (left < right) {

        if (s[left] === s[right]) {
            left++;
            right--;
            continue;
        }

        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};

let s = ["h", "e", "l", "l", "o"];
const result = reverseString(s);