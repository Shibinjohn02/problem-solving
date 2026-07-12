

// Example 1:
// Input: s = "abcb bcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let i = 0, j = 0;
    let uniqueChar = new Set();

    while (j < s.length) {
        if (!uniqueChar.has(s[j])) {
            uniqueChar.add(s[j]);
            j++;
            maxLen = Math.max(maxLen, uniqueChar.size);
        } else {
            uniqueChar.delete(s[i]);
            i++;
        }
    }

    return maxLen;
};


let s = "pwwkew";
const result = lengthOfLongestSubstring(s);
console.log('result=', result);