
// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:
// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Example 3:
// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

// Example 4:
// Input: fruits = [0]
// Output: 1

// Example 5:
// Input: fruits = [1, 2, 1, 1, 3, 4, 2, 2, 2, 2, 4]
// Output: 1

/* Observations:
    1, collect as much fruit as possible
    2. only have two baskets
    3. each basket can only hold a single type of fruit.
    4. no limit on the amount of fruit each basket can hold.
    5. you must pick exactly one fruit from every tree (including the start tree)
*/

/**
 * @param {number[]} fruits
 * @return {number}
 */

// Brute Force Approach
var totalFruit = function (fruits) {
    let maxFruits = 1, uniqueType = [];

    for (let i = 0; i < fruits.length - 1; i++) {
        let j = i, maxFruitsPerTree = 0;

        while (j < fruits.length) {

            if (uniqueType.length === 2 && !uniqueType.includes(fruits[j])) {
                break;
            }

            if (uniqueType.length <= 2 && !uniqueType.includes(fruits[j])) {
                uniqueType.push(fruits[j])
            }

            j++;
            maxFruitsPerTree++;
        }

        maxFruits = Math.max(maxFruits, maxFruitsPerTree);
        uniqueType = [];
    }

    return maxFruits;
};

const fruits = [1, 2, 1, 1, 3, 4, 2, 2, 2, 2, 4];
const result = totalFruit(fruits);
console.log('result=', result)