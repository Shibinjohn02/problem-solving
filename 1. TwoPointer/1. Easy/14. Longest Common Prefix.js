// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let firstWord = strs[0], output = "", notMatched = false;
    for (let i = 0; i < firstWord.length; i++) {
        for (let j = 1; j <= strs.length - 1; j++) {
            if (firstWord[i] != strs[j][i]) {
                notMatched = true;
                break;
            }
        }
        if (notMatched) break;
        else output += firstWord[i]
    }
    return output
};

let strs = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs)
console.log(result)

// Better Approach
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    let prefix = strs[0]; // flower

    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with prefix
        while (strs[i].indexOf(prefix) !== 0) { // "flow".indexOf(flower)
            // trim last character from prefix
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};
