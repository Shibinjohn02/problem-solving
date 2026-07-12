
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
// If we had started at the first tree, we would only pick from trees [1,2]

// Example 4:
// Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5

// Example 5:
// Input: fruits = [1, 2, 1, 1, 2, 2, 3, 1, 3, 3, 1, 1, 1]
// Output: 7

// count = 4
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// 1 2 1 1 2 2 3 1 3 3  1  1  1
// i     j

/**
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function (fruits) {
    let map = new Map(), i = 0, j = 0, count = 0, maxFruits = 0;

    while (j < fruits.length) {

        if (!map.has(fruits[j])) {
            count++;
            map.set(fruits[j], 1);
        } else {
            count++;
            map.set(fruits[j], map.get(fruits[j]) + 1);
        }

        while (map.size > 2) {
            map.set(fruits[i], map.get(fruits[i]) - 1);

            if (map.get(fruits[i]) === 0) map.delete(fruits[i]);
            i++
            count--;
        }

        j++;
        maxFruits = Math.max(maxFruits, count);
    }

    return maxFruits;
};

const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
const result = totalFruit(fruits);
console.log('result=', result);


// Ask yourself every time:

// ❓ “Am I counting subarrays or finding the longest one?”

// Counting → (right - left + 1)
// Longest → max = Math.max(max, right - left + 1)