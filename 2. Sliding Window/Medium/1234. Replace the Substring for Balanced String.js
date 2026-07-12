

// Example 1:
// Input: s = "QWER"
// Output: 0
// Explanation: s is already balanced.

// Example 2:
// Input: s = "QQWE"
// Output: 1
// Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.

// Example 3:
// Input: s = "QQQW"
// Output: 2
// Explanation: We can replace the first "QQ" to "ER".

// Example 4:
// Input: s = "QWWWEERR"
// Output: 2

// Example 4:
// Input: s = "WWQQRRRRQRQQ"
// Output: 4

// Observation:
// 1. Each characters appears n / 4 times where n is the length of the string.
// 2. Return the minimum length of the substring that can be replaced with any other string of the same length.
// 3. If s is already balanced, return 0.

// Questions:
// What am I tracking? → Minimum length of the substring that can be replaced
// Is the substring contiguous? → Yes
// What operation is allowed? → Replacing with any other string of the same length.
// Is it fixed or variable size sliding window example - Variable size
// What does a “valid window” mean? → A window is valid if the remaining string (outside the window) is already balanced.
// When is “invalid window” mean? → A window is invalid if outside the window, any character count is still > n / 4
// What breaks the window? → Any character frequency outside the window > n / 4 breaks validity
// ---------
// How do I fix a broken window validity?  → 
// Do I ever need to recompute the window from scratch?  → No
// What is the cheapest way to make it uniform? - Replace all excess characters together in one substring
// Expand or shrink first? → Expand until valid → shrink to minimize
// Do I track window or outside counts? → Outside counts

// left = 0, right = 0
// outside = Q1 W3 E2 R2 ❌ (W > 1)

// 0 1 2 3 4 5 6 7
// Q W W W E E R R
//   r l

// 0 1 2 3
// Q Q Q W

/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
    const freq = new Map();

    freq.set('Q', 0);
    freq.set('W', 0);
    freq.set('E', 0);
    freq.set('R', 0);

    // Precompute total frequency
    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], freq.get(s[i]) + 1);
    }

    const n = s.length / 4;
    let left = 0, minLen = Infinity;

    if (freq.get('Q') === n && freq.get('W') === n && freq.get('E') === n && freq.get('R') === n) {
        return 0;
    }

    for (let right = 0; right < s.length; right++) {

        freq.set(s[right], freq.get(s[right]) - 1);

        while (left <= right && freq.get('Q') <= n && freq.get('W') <= n && freq.get('E') <= n && freq.get('R') <= n) {
            minLen = Math.min(minLen, right - left + 1);

            freq.set(s[left], freq.get(s[left]) + 1);
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};


let s = "WWQQRRRRQRQQ"
const result = balancedString(s);
console.log('result=', result);