
// Example 1:
// Input: str1 = "abac", str2 = "cab"
// Output: "cabac"
// Explanation: 
// str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
// str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
// The answer provided is the shortest such string that satisfies these properties.

// Example 2:
// Input: str1 = "geek", str2 = "eke"
// Output: "geeke"

// Example 3:
// Input: str1 = "xyz", str2 = "yzx"
// Output: "xyzx"

// Example 4:
// Input: str1 = "ab", str2 = "bc"
// Output: "abc"

// Example 5:
// Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
// Output: "aaaaaaaa"

/*
                            solve(0,0)
                              a ≠ b
                         /              \
                   choose 'a'        choose 'b'
                       |                  |
                       ↓                  ↓
                  solve(1,0)          solve(0,1)
                    b = b                a ≠ c
                       |              /          \
                       |        choose 'a'     choose 'c'
                       |            |              |
                       ↓            ↓              ↓
                  "b" + solve(2,1) solve(1,1)   solve(0,2)
                       |              |              |
                       ↓              ↓              ↓
                       "b" + "c"    b ≠ c          "ab"
                       |          /      \
                       ↓     choose b    choose c
                      "bc"       |          |
                                 ↓          ↓
                            solve(2,1)   solve(1,2)
                                 |          |
                                 ↓          ↓
                                "c"        "b"
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    let memo = new Map();

    function solve(i, j) {

        if (i === str1.length) {
            return str2.slice(j);
        }

        if (j === str2.length) {
            return str1.slice(i);
        }

        const key = i + "," + j;

        if (memo.has(key)) {
            return memo.get(key);
        }

        if (str1[i] === str2[j]) {
            const answer = str1[i] + solve(i + 1, j + 1);

            memo.set(key, answer);

            return answer;
        }

        const takeStr1 = str1[i] + solve(i + 1, j);
        const takeStr2 = str2[j] + solve(i, j + 1);

        const answer = takeStr1.length <= takeStr2.length ? takeStr1 : takeStr2;

        memo.set(key, answer);

        return answer;
    }

    return solve(0, 0);
};