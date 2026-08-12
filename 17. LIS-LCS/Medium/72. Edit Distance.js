
// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/*
                              solve(0,0)
                               a == a
                                  |
                                  | 0 cost
                                  ↓
                              solve(1,1)
                               b != c
                    ┌─────────────┼─────────────┐
                    │             │             │
                 Replace        Delete        Insert
                    │             │             │
                    ↓             ↓             ↓
              solve(2,2)     solve(2,1)     solve(1,2)
                    │             │             │
                 Base case      word1         word2
                    │           finished      finished
                    ↓             │             │
                    0             1             1
                    │             │             │
              Replace cost    Delete cost   Insert cost
                    │             │             │
                  1 + 0        1 + 1         1 + 1
                    │             │             │
                    ↓             ↓             ↓
                    1             2             2
                    └─────────────┼─────────────┘
                                  │
                             min(1,2,2)
                                  │
                                  ↓
                                1
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

    const memo = new Map();

    function solve(i, j) {

        // word1 exhausted
        if (i === word1.length) {
            return word2.length - j;
        }

        // word2 exhausted
        if (j === word2.length) {
            return word1.length - i;
        }

        const key = i + "," + j;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // Characters already match
        if (word1[i] === word2[j]) {
            const answer = solve(i + 1, j + 1);

            memo.set(key, answer);

            return answer;
        }

        // Replace
        const replace = solve(i + 1, j + 1);

        // Delete word1[i]
        const deleteChar = solve(i + 1, j);

        // Insert word2[j]
        const insert = solve(i, j + 1);

        const answer = 1 + Math.min(replace, deleteChar, insert);

        memo.set(key, answer);

        return answer;
    }

    return solve(0, 0);
};