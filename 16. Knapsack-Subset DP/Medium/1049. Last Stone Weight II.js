
// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We can combine 2 and 4 to get 2, so the array converts to [2,7,1,8,1] then,
// we can combine 7 and 8 to get 1, so the array converts to [2,1,1,1] then,
// we can combine 2 and 1 to get 1, so the array converts to [1,1,1] then,
// we can combine 1 and 1 to get 0, so the array converts to [1], then that's the optimal value.

// Example 2:
// Input: stones = [31,26,33,21,40]
// Output: 5

/*
Formula:
Difference = |GroupA - GroupB|
↓
GroupB = Total - GroupA
↓
Difference = |GroupA - (Total - GroupA)|
↓
Difference = |2 × GroupA - Total|
↓
Final Difference Formula = |Total - 2 × GroupA|

                               solve(0,4)
                              (stone = 2)

                     / Take                  \ Skip
                    /                         \
             solve(1,2)                  solve(1,4)
            (stone = 3)                 (stone = 3)

          / Take      \ Skip         / Take      \ Skip
         /             \            /             \
 solve(2,-1)      solve(2,2)   solve(2,1)    solve(2,4)
 (invalid)        (stone=4)    (stone=4)     (stone=4)

      |             /   \         /   \         /    \
      0        T     S      T     S      T      S
              /       \    /       \    /        \
        solve(3,-2) solve(3,2) ... ... solve(3,0) solve(3,4)
            0            2                 4          0


*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {

    const totalSum = stones.reduce((sum, stone) => sum + stone, 0);
    const target = Math.floor(totalSum / 2);

    function solve(index, remainingTarget) {

        if (index === stones.length || remainingTarget === 0) {
            return target - remainingTarget;
        }

        const skip = solve(index + 1, remainingTarget);

        let take = 0;

        if (stones[index] <= remainingTarget) {
            take = solve(index + 1, remainingTarget - stones[index]);
        }

        return Math.max(take, skip);
    }

    const groupASum = solve(0, target);

    return totalSum - (2 * groupASum);
};