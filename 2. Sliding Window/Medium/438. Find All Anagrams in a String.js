

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Questions:
// What am I tracking? → Whether in s string contains at any index any combination of p string exist
// Is the substring contiguous? → Yes
// What operation is allowed? → Reordering of characters
// Is it fixed or variable size sliding window example - Fixed size sliding window
// What does a “valid window” mean? → windown size == p.length and same frequence of characters
// When is “invalid window” mean? → missing or extra characters frequency
// What breaks the window? → adding more characters
// Do I track window or outside counts? → No oustide counts need

// 0 1 2 3 4 4 5 6 6 7
// c b a e b a b a c d

/** 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    let indices = [], left = 0

    // Precompute
    for (let ch of p) {
        need[ch.charCodeAt(0) - 97]++;
    }

    for (let right = 0; right < s.length; right++) {
        window[s[right].charCodeAt(0) - 97]++;

        if ((right - left + 1) > p.length) {
            window[s[left].charCodeAt(0) - 97]--;
            left++;
        }

        if ((right - left + 1) === p.length) {
            const res = isSame(window, need);
            if (res) indices.push(left);
        }
    }

    return indices;
};

function isSame(window, need) {
    for (let i = 0; i < window.length; i++) {
        if (window[i] != need[i]) return false;
    }
    return true;
}

let s = "cbaebabacd", p = "abc";
const result = findAnagrams(s, p);
console.log('result=', result);