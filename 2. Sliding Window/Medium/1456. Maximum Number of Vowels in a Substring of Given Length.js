
// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Example 4:
// Input: s = "weallloveyou", k = 7
// Output: 4

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// TLE ERROR
var maxVowels = function (s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u'], maxVowels = 0, vowelsCnt = 0, j = 0;

    for (let i = 0; i <= s.length - k; i++) {
        let arr = s.slice(i, (i + k));
        while (j < arr.length) {
            if (vowels.includes(arr[j].toLocaleLowerCase())) vowelsCnt++;
            j++;
        }
        maxVowels = Math.max(maxVowels, vowelsCnt);
        vowelsCnt = j = 0;
    }

    return maxVowels;
};

// Better Version
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0, max = 0;

    // first window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }

    max = count;


    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i - k])) count--;
        max = Math.max(max, count);
    }

    return max;
};

// 0 1 2 3 4 5 6 7 8
// a b c i i i d e f

let s = "abciiidef", k = 7
const result = maxVowels(s, k);
console.log('result=', result);