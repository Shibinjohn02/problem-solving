
// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:
// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

// Example 3:
// Input: ratings = [100, 90, 80] 
// Output: 5

// Example 4:
// Input: ratings = [90, 100, 80]
// Output: 1 + 2 + 1 = 4

// Example 5:
// Input:  ratings = [1,3,2,2,1]
// Output: 1 + 3 + 1 + 2 + 1 = 8  [1,2,1,2,1]

// Example 6:
// Input:  ratings = [1,2,87,87,87,2,1]
// Output: 13

// Requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.

// Notes:
// Sirf strictly greater ko hi extra candy milta hai.
// Not sorting involment
// Candy depends on relative neighbor value, not just +1 blindly

// left to right => ratings[i+1] > ratings[i]

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {

    let n = ratings.length;
    let child = new Array(n).fill(1);

    // Left → Right
    for (let i = 0; i < n - 1; i++) {
        if (ratings[i + 1] > ratings[i]) {
            child[i + 1] = child[i] + 1;
        }
    }

    // Right → Left
    for (let j = n - 1; j > 0; j--) {
        if (ratings[j - 1] > ratings[j]) {
            child[j - 1] = Math.max(child[j - 1], child[j] + 1);
        }
    }

    return child.reduce((acc, curr) => acc + curr, 0);
};

let ratings = [1, 2, 87, 87, 87, 2, 1]
const result = candy(ratings);
console.log('result=', result);