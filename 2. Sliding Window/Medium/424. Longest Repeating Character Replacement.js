
// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Example 1: Window = "AABA"
// Character counts:
// A → 3
// B → 1

// Now compute:
// Window length = 4
// Max frequency = 3
// Replacements needed = 4 − 3 = 1

// ❓ Is 1 ≤ k?
// ✔️ Yes → VALID window
// You can replace the single B with A → "AAAA"

/*
Q. Can I change any character?
Q. Suppose you already know:
    a. window length
    b. most frequent character count in that window

    Ask yourself:
    Do I really care which character it is?
    or
    Do I only care about how many are NOT that character?

Q. For a given substring, how many replacements are required to make all characters the same?
Q. Which is the most repeating characters before replacing?
Q. Which letter needs to be replaced?
Q. When is a window valid?

window length − max frequency ≤ k - expand
window length − max frequency > k - shrink



// 0 1 2 3 4 5 6
// A A B A B B A

// 0 1 2 3 4
// A A B A B
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// function maxFrequency(str) {
//     if (str.length === 1) return 1;

//     const map = new Map();
//     let maxCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!map.has(str[i])) {
//             map.set(str[i], 1);
//         }
//         else {
//             map.set(str[i], map.get(str[i]) + 1);
//         }
//         maxCount = Math.max(maxCount, map.get(str[i]));
//     }

//     return maxCount;
// }

// var characterReplacement = function (s, k) {
//     let i = 0, j = 0, windowSize = 0, maxFreq = 0, longestStrCount = 0;

//     while (j < s.length) {
//         let str = s.slice(i, j + 1);
//         windowSize = str.length;
//         maxFreq = maxFrequency(str);

//         if (((windowSize - maxFreq) <= k) || windowSize === maxFreq) {
//             longestStrCount = Math.max(longestStrCount, windowSize);
//         }

//         while ((windowSize - maxFreq) > k) {
//             i++;
//             str = s.slice(i, j + 1);
//             windowSize = str.length;
//             maxFreq = maxFrequency(str);
//             if (((windowSize - maxFreq) <= k) || windowSize === maxFreq) {
//                 longestStrCount = Math.max(longestStrCount, windowSize);
//             }
//         }
//         j++;
//     }

//     return longestStrCount;
// };


var characterReplacement = function (s, k) {
    let left = 0;
    let maxFreq = 0;
    let longest = 0;

    const freq = new Map();

    for (let right = 0; right < s.length; right++) {

        // expand window
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, freq.get(s[right]));

        // shrink window if invalid
        while ((right - left + 1) - maxFreq > k) {
            freq.set(s[left], freq.get(s[left]) - 1);
            left++;
        }

        // update answer
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};




let s = "AABABBA", k = 1
const result = characterReplacement(s, k);
console.log('result=', result);


// 🔑 One-Line Takeaway

// Expand greedily, shrink only when invalid, and track the most frequent character — everything else is replaceable.