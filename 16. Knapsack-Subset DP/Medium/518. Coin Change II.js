
// Example 1:
// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Example 2:
// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.

// Example 3:
// Input: amount = 10, coins = [10]
// Output: 1

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

    const memo = new Map();

    function solve(index, remainingAmount) {

        if (remainingAmount === 0) return 1;

        if (remainingAmount < 0) return 0;

        if (index === coins.length) return 0;

        let memoKey = index + ',' + remainingAmount;
        
        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }

        const canTake = solve(index, remainingAmount - coins[index]);

        const canSkip = solve(index + 1, remainingAmount);

        const ways = canTake + canSkip;

        memo.set(memoKey, ways);

        return ways;
    }

    return solve(0, amount);
};


let amount = 5, coins = [1, 2, 5];
const result = change(amount, coins);
console.log('result=', result);