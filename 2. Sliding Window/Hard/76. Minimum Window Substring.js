

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Questions:
// What am I tracking? → Minimum length substring that covers t (with duplicates)
// Is the substring contiguous? → Yes
// What operation is allowed? → Expand and shrink a window to minimize length while staying valid
// Is it fixed or variable size sliding window example - Variable size sliding window
// What does a “valid window” mean? → All chars of t are present with required frequency
// When is “invalid window” mean? → Invalid if any required character count is less than needed
// What breaks the window? → Removing a required char below needed count
// Do I track window or outside counts? → Track window counts, not outside counts

// 0 1 2 3 4 5 6 6 7 8 9 10 11
// A D O B E C O D E B A  N  C

// ABC -> ABBC ->ABbC

// Algorithm:
// 1. pehle t string ko precompute karna hain counting every character frequency in array
// 2. run a main loop and remember if window is invalid move right++
// 3. jab valid window mil jaye then store length and start shrinking from left to find the minimum length, shrink until the window becomes invalid
// 4. Valid = windowFreq[ch] >= tFreq[ch] for every ch in t

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// var minWindow = function (s, t) {
//     const freq = new Array(52).fill(0);
//     const windowFreq = new Array(52).fill(0);
//     let left = 0, minWindow = Infinity;

//     // Precompute the t characters frequency
//     for (let ch of t) {
//         if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90)
//             freq[ch.charCodeAt(0) - 65]++;
//         else
//             freq[ch.charCodeAt(0) - 97 + 26]++;
//     }

//     for (let right = 0; right < s.length; right++) {
//         if (s[right].charCodeAt(0) >= 65 && s[right].charCodeAt(0) <= 90)
//             windowFreq[s[right].charCodeAt(0) - 65]++;
//         else
//             windowFreq[s[right].charCodeAt(0) - 97 + 26]++;

//         while (isSame(windowFreq, freq)) {
//             windowFreq[s[left]]--;
//             left++;
//         }
//         minWindow = Math.min(minWindow, right - left + 1);
//     }

//     return minWindow;
// };

// function isSame(window, need) {
//     for (let i = 0; i < window.length; i++) {
//         if (window[i] != need[i]) return false;
//     }
//     return true;
// }

var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    // Frequency map for t
    const need = new Array(128).fill(0);
    for (let ch of t) {
        need[ch.charCodeAt(0)]++;
    }

    let left = 0;
    let required = t.length;   // total characters still needed
    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let rChar = s.charCodeAt(right);

        // include current character
        if (need[rChar] > 0) {
            required--;
        }
        need[rChar]--;

        // when window is valid
        while (required === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let lChar = s.charCodeAt(left);
            need[lChar]++;

            // removing this breaks validity
            if (need[lChar] > 0) {
                required++;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};


let s = "ADOBECODEBANC", t = "ABC";
const result = minWindow(s, t);
console.log('result=', result);