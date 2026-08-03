
// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    if (wordDict.length === 0) return false;

    const maxLen = wordDict.reduce((max, word) => Math.max(max, word.length), 0);
    const wordSet = new Set(wordDict);

    // State:
    // dp[i] = Can first i characters be segmented using dictionary words?
    const dp = new Array(s.length + 1).fill(false);

    // Base Case
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {

        for (let j = i - 1; j >= Math.max(0, i - maxLen); j--) {

            const searchWord = s.slice(j, i);

            if (dp[j] && wordSet.has(searchWord)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

let s = "leetcode", wordDict = ["leet", "code"]
let result = wordBreak(s, wordDict);
console.log('result', result);