
// Example 1:
// Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
// Output: 4
// Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
// Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
// {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.

// Example 2:
// Input: strs = ["10","0","1"], m = 1, n = 1
// Output: 2
// Explanation: The largest subset is {"0", "1"}, so the answer is 2.

/*
                                      solve(0,1,1)
                                     ("0")

                           / Take                  \ Skip
                          /                          \
                 1 + solve(1,0,1)             solve(1,1,1)
                       ("1")                      ("1")

                  / Take      \ Skip          / Take      \ Skip
                 /             \             /             \
          1+solve(2,0,0)   solve(2,0,1) 1+solve(2,1,0) solve(2,1,1)
               |               |              |              |
               0               0              0              0

                \             /                \            /
                 max(1,0)=1                    max(1,0)=1

                        \                      /
                         \                    /

                   Take = 1+1 = 2      Skip = 1

                             \        /
                              max(2,1)

                                  |

                               return 2
*/

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {

    const memo = new Map();

    function solve(index, m, n) {

        if (index === strs.length) return 0;

        const key = `${index},${m},${n}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        const ones = strs[index].split("1").length - 1;
        const zeros = strs[index].split("0").length - 1;

        let canTake = 0;

        if (zeros <= m && ones <= n) {
            canTake = 1 + solve(index + 1, m - zeros, n - ones);
        }

        const canSkip = solve(index + 1, m, n);

        const answer = Math.max(canTake, canSkip);

        memo.set(key, answer);

        return answer;
    }

    return solve(0, m, n);
};