
// Example 1:
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

// Example 2:
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

// Example 3:
// Input: s = "abc"
// Output: 1

// 0 1 2 3 4 5
// a b c a b c

// 0 1 2 3 4
// a a a c b

/**
 * @param {string} s
 * @return {number}
 */

// My solution
// var numberOfSubstrings = function (s) {
//     let left = 0, right = 0, count = 0, str = '';

//     while (right < s.length) {
//         str = str + s[right];

//         while (str.indexOf("abc") === -1) {
//             left++;
//             count--;
//         }

//         count = right - left + 1
//         right++;
//     }
// };

// Optimal Solution
var numberOfSubstrings = function (s) {
    let left = 0;
    let count = { a: 0, b: 0, c: 0 };
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;

        while (count.a > 0 && count.b > 0 && count.c > 0) {
            result += s.length - right;
            count[s[left]]--;
            left++;
        }
    }

    return result;
};


// One-line memory rule ⭐

// If a window becomes valid and adding more characters can’t break it,
// count all future endings → s.length - right

// 🔑 One-line rule:

// If adding elements can only help the condition and never break it → monotonic

// Ultra-short checklist 🧠

// Ask these 3 yes/no questions:
// Am I counting subarrays?
// Is the condition at most / less than / presence-based?
// Does adding elements never break validity?

// ✔✔✔ → use (right - left + 1)
// Anything else → normal sliding window