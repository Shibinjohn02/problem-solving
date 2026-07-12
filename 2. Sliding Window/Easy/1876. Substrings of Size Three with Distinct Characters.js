

// Example 1:
// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// Example 2:
// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

/**
 * @param {string} s
 * @return {number}
 */

// Version 1
var countGoodSubstrings = function (s) {
    let goodStrCount = 0;

    for (let i = 0; i < s.length; i++) {
        let substr = s.slice(i, i + 3)
        if (new Set(substr).size === 3) goodStrCount++;
    }

    return goodStrCount;
};


// Version 2
var countGoodSubstrings = function (s) {
    let count = 0;

    for (let i = 0; i <= s.length - 3; i++) {
        if (
            s[i] !== s[i + 1] &&
            s[i] !== s[i + 2] &&
            s[i + 1] !== s[i + 2]
        ) {
            count++;
        }
    }

    return count;
};

let s = "xyzzaz";
const result = countGoodSubstrings(s);
console.log('result=', result);