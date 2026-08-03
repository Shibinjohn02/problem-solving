
// Example 1:
// Input: s = "12"
// Output: 2
// Explanation:
// "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation:
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
/*
decode("226")
│
├── Take 2
│   │
│   └── decode("26")
│       │
│       ├── Take 2
│       │   │
│       │   └── decode("6")
│       │       │
│       │       └── Take 6
│       │           │
│       │           └── decode("") ✅
│       │
│       └── Take 26
│           │
│           └── decode("") ✅
│
└── Take 22
    │
    └── decode("6")
        │
        └── Take 6
            │
            └── decode("") ✅
*/

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation:
// "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

// Example 4:
// Input: s = "122016"
// Output: 4

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    if (s[0] === '0') return 0;

    // State:
    // dp[i] = Number of ways to decode first i characters.
    const dp = new Array(s.length + 1).fill(0);

    // Base Cases
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {

        const currentDigit = s[i - 1];
        const lastTwoDigit = parseInt(s.slice(i - 2, i), 10);

        if (currentDigit !== '0') {
            dp[i] += dp[i - 1];
        }

        if (lastTwoDigit >= 10 && lastTwoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
};

let s = "226";
let result = numDecodings(s);
console.log('result', result);
