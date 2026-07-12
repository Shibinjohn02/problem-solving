
// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Example 3:
// Input: s1 = "aabc", s2 = "xxcaabyy"
// Output: true
// Explanation: permutations = "abc", "acb", "bac", "bca", "cab", "cba"

// 0 1 2 3 4 5 6 7
// e i d b a o o o

// Questions:
// What am I tracking? → Whether any substring of s2 has the same frequency as s1. Not just “characters exist” — counts must match exactly
// Is the substring contiguous? → Yes
// What operation is allowed? → Reordering characters (permutation)
// Is it fixed or variable size sliding window example - Fixed-size sliding window
// What does a “valid window” mean? → Window length == s1.length AND frequency matches s1 exactly
// When is “invalid window” mean? → Character count mismatch (extra or missing characters)
// What breaks the window? → ✔ Adding a character causes frequency mismatch (But since window is fixed size, this is automatically handled)
// Do I track window or outside counts? → No
// ---------
// ---------
// How do I fix a broken window validity?  → 
// Do I ever need to recompute the window from scratch?  → No
// What is the cheapest way to make it uniform? - 
// Expand or shrink first? →  expand until all characters of s1 found in s2 then shrink to left until the length matches and s1's characters persist in s2
// Do I track window or outside counts? → No

// How do I check whether s2 substring is matching with s1 string?
// How do reuse window by adding one character and removing? → Only incremental add/remove

// Input: s1 = "ab", s2 = "eidbaooo", k = s1.length = 2
// Input: s1 = "aabc", s2 = "xxcaabyy"
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// Version 1
var checkInclusion = function (s1, s2) {
    let left = 0, right = s1.length - 1, isValid = false;
    const s1Freq = new Map(), s2Freq = new Map();

    // Precompute s1 chars freq
    for (let i = 0; i < s1.length; i++) {
        if (!s1Freq.has(s1[i])) {
            s1Freq.set(s1[i], 1);
        } else {
            s1Freq.set(s1[i], s1Freq.get(s1[i]) + 1);
        }
    }

    // Precompute s2 chars freq
    for (let j = 0; j < s1.length; j++) {
        if (!s2Freq.has(s2[j])) {
            s2Freq.set(s2[j], 1);
        } else {
            s2Freq.set(s2[j], s2Freq.get(s2[j]) + 1);
        }
    }

    while (right < s2.length) {

        for (let ch of s1) {

            if (freq.get(ch) === s2Freq.get(ch)) {

            }
        }

    }
};

// Version 2
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    // s1 frequency
    for (let ch of s1) {
        need[ch.charCodeAt(0) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        // add right char
        window[s2[right].charCodeAt(0) - 97]++;

        // keep window size fixed
        if (right - left + 1 > s1.length) {
            window[s2[left].charCodeAt(0) - 97]--;
            left++;
        }

        // compare when window size matches
        if (right - left + 1 === s1.length) {
            console.log('need=', need, 'window=', window)
            if (isSame(window, need)) return true;
        }
    }

    return false;
};

function isSame(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


let s1 = "ab", s2 = "eidbaooo"
const result = checkInclusion(s1, s2)
console.log('result=', result)