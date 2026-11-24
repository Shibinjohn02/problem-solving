
// Example 1:
// Input: k = 5
// Output: "b"
// Explanation:
// Initially, word = "a". We need to do the operation three times:
// Generated string is "b", word becomes "ab".
// Generated string is "bc", word becomes "abbc".
// Generated string is "bccd", word becomes "abbcbccd".
/*
    Step-by-step example (k = 5)
    Initial
    a
    Length = 1

    Operation 1
    a
    b

    ab
    Original a + generated b

    Operation 2
    ab
    bc

    abbc
    Original ab + generated bc

    Operation 3
    abbc
    bccd

    abbcbccd
    Original abbc + generated bccd
*/

// Example 2:
// Input: k = 10
// Output: "c"

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    function solve(word) {
        if (word.length >= k) {
            return word[k - 1];
        }

        let ch = '';

        for (let i = 0; i < word.length; i++) {
            ch += String.fromCharCode(word.charCodeAt(i) + 1);
        }

        return solve(word + ch)
    }

    return solve('a');
};