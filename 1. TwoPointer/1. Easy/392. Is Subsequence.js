
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Example 3:

// Input: s = "acx", t = "ahbgdc"
// Output: false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let left = 0, right = 0, str = '';

    while (left < s.length) {
        if (s[left] === t[right]) {
            str += s[left];
            left++;
        }

        right++;

        if (right > t.length && s !== str) return false;
    }

    return true;
};

let s = "abc", t = "ahbgdc";
const result = isSubsequence(s, t);
console.log(result);


// More Optimised solutuon
var isSubsequence = function (s, t) {
    let sp = 0;
    let tp = 0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }

    return sp === s.length;
};