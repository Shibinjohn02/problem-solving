
// Example 1:
// Input: digits = [1,2,3,4]
// Output: 12
// Explanation: The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.

// Example 2:
// Input: digits = [0,2,2]
// Output: 2
// Explanation: The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.

// Example 3:
// Input: digits = [6,6,6]
// Output: 1
// Explanation: Only 666 can be formed.

// Example 4:
// Input: digits = [1,3,5]
// Output: 0
// Explanation: No even 3-digit numbers can be formed.

/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    let result = [];
    let count = Array(10).fill(0);

    for (let digit of digits) {
        count[digit]++;
    }

    function solve(current) {
        if (current.length === 3) {
            result.push(Number(current));
            return;
        }

        for (let digit = 0; digit <= 9; digit++) {
            if (count[digit] === 0) continue;

            if (current.length === 0 && digit === 0) continue;

            if (current.length === 2 && digit % 2 !== 0) continue;

            // Choose
            count[digit]--;

            // Explore
            solve(current + digit);

            // Undo choice
            count[digit]++;
        }
    }

    solve("");

    return result.size;
};