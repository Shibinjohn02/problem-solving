
// Example 1:

// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Example 3:

// Input: s = "aA"
// Output: "Aa"


/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
    let left = 0, right = s.length - 1, vowels = ['a', 'e', 'i', 'o', 'u'];
    s = s.split('');

    while (left < right) {
        if (!vowels.includes(s[left].toLowerCase())) { left++; continue; }
        if (!vowels.includes(s[right].toLowerCase())) { right--; continue; }

        if (s[left] === s[right]) {
            left++;
            right--;
            continue;
        }

        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

    return s.join("");
};

let s = "aA";
const result = reverseVowels(s);
console.log('result=', result);