

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Anagram:
// 1. Same frequency of each characters
// 2. Same length

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Ok: 16 ms Beats 74.61%
var isAnagram = function (s, t) {

    if (s.length != t.length) return false;

    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {

        if (!map.get(t[i])) return false;

        map.set(t[i], map.get(t[i]) - 1);
    }

    for (const [, value] of map) {
        if (value !== 0) return false;
    }

    return true;
};


// Better Solution: 3 ms Beats 98.88%

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }

    return true;
};

let s = "anagram", t = "nagaram";
const result = isAnagram(s, t);
console.log('result=', result);
