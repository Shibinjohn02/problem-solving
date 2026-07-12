


// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

// Hint 1:
// Try to greedily choose the smallest partition that includes the first letter. If you have something like "abaccbdeffed", then you might need to add b. You can use an map like "last['b'] = 5" to help you expand the width of your partition.

/**
 * @param {string} s
 * @return {number[]}
 */

var partitionLabels = function (s) {
    let i = 0, lastIndex = s.lastIndexOf(s[i]), parts = [], startIndex = 0;

    while (i < s.length) {

        while (i <= lastIndex) {
            let charIndex = s.lastIndexOf(s[i]);

            if (charIndex <= lastIndex) {
                i++;
            } else {
                lastIndex = charIndex;
            }
        }

        let charLength = i - startIndex;
        startIndex = i;
        parts.push(charLength);
        lastIndex = s.lastIndexOf(s[i]);
    }

    return parts;
};

let s = 'ababcbacadefegdehijhklij';
const result = partitionLabels(s);
console.log('result=', result);