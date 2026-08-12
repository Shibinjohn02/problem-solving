// Example 1:
// Input: nums1 = [1,4,2], nums2 = [1,2,4]
// Output: 2
// Explanation: We can draw 2 uncrossed lines as in the diagram.
// We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.

// Example 2:
// Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
// Output: 3

// Example 3:
// Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
// Output: 2

/*
                         solve(0,0)
                         1 vs 1
                            |
                         MATCH
                            |
                       1 + solve(1,1)
                              |
                            4 vs 2
                           /      \
                      SKIP 4     SKIP 2
                         /          \
                  solve(2,1)      solve(1,2)
                     2 vs 2         4 vs 4
                       |               |
                     MATCH           MATCH
                       |               |
                       1               1

                   max(1,1) = 1

             1 + 1 = 2
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {

    const memo = new Map();

    function solve(i, j) {

        if (i === nums1.length || j === nums2.length) {
            return 0;
        }

        const key = i + "," + j;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // If values match, connect them
        if (nums1[i] === nums2[j]) {
            const answer = 1 + solve(i + 1, j + 1);

            memo.set(key, answer);

            return answer;
        }

        // Values don't match:
        // skip nums1[i] OR skip nums2[j]
        const skipNums1 = solve(i + 1, j);
        const skipNums2 = solve(i, j + 1);

        const answer = Math.max(skipNums1, skipNums2);

        memo.set(key, answer);

        return answer;
    }

    return solve(0, 0);
};