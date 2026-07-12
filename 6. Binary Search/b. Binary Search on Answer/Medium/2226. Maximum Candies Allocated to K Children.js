
// Example 1:
// Input: candies = [5,8,6], k = 3
// Output: 5
// Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.
// 5 → [5]         → 1 pile of 5
// 8 → [5,3]       → 1 pile of 5
// 6 → [5,1]       → 1 pile of 5

// Example 2:
// Input: candies = [2,5], k = 11
// Output: 0
// Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.

// Example 3:
// Input: candies = [4,7,5], k = 4
// Output: 3

// 1 2 3 4 5 6 7 8
// t t t t t f f f

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
function canProvide(candies, size, k) {
    let totalPile = 0;

    for (let i = 0; i < candies.length; i++) {
        totalPile += Math.floor(candies[i] / size);

        if (totalPile >= k) return true; // early exit
    }

    return false;
}

var maximumCandies = function (candies, k) {
    let totalCandies = 0;

    for (let i = 0; i < candies.length; i++) {
        totalCandies += candies[i];
    }

    if (k > totalCandies) return 0;

    let low = 1;
    let high = Math.floor(totalCandies / k); // candies = [4,7,5] → total = 16; 16 / 4 = 4 (So no child can get more than 4 candies)
    let result = 0;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (canProvide(candies, mid, k)) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
};

let candies = [4, 7, 5], k = 4
const result = maximumCandies(candies, k);
console.log('result=', result);