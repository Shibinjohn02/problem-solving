

// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const count = new Array(26).fill(0);
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value === 1) {
            return key;   // first key with value 1
        }
    }
    return null; // if not found

};

let s = "leetcode";
const result = firstUniqChar(s);
console.log('result=', result);