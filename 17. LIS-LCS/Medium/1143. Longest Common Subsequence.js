
// Example 1:
// Input: text1 = "abcde", text2 = "ace"
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

/*

solve(0,0)
(a,a)
   │
   ▼
1 + solve(1,1)
        (b,c)
        /    \
       /      \
 solve(2,1)  solve(1,2)
   (c,c)      (b,e)
      │        /   \
      │      ...   ...
      ▼
1 + solve(3,2)
       (d,e)
      /     \
     /       \
solve(4,2) solve(3,3)
   (e,e)      base
      │
      ▼
1 + base

*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

    const memo = Array.from(
        { length: text1.length },
        () => Array(text2.length).fill(-1)
    );

    function solve(i, j) {

        if (i === text1.length || j === text2.length) {
            return 0;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        if (text1[i] === text2[j]) {
            return memo[i][j] = 1 + solve(i + 1, j + 1);
        }

        const skipText1 = solve(i + 1, j);
        const skipText2 = solve(i, j + 1);

        return memo[i][j] = Math.max(skipText1, skipText2);
    }

    return solve(0, 0);
};