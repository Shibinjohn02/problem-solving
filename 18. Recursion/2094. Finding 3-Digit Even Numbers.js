
// Example 1:
// Input: digits = [2,1,3,0]
// Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array. 
// Notice that there are no odd integers or integers with leading zeros.

// Example 2:
// Input: digits = [2,2,8,8,2]
// Output: [222,228,282,288,822,828,882]
// Explanation: The same digit can be used as many times as it appears in digits. 
// In this example, the digit 8 is used twice each time in 288, 828, and 882. 

// Example 3:
// Input: digits = [3,7,5]
// Output: []
// Explanation: No even integers can be formed using the given digits.

/*
    Step 1: Recursive function ka responsibility define karta
    Step 2: Function kya information carry karega?
    Step 3: Base case

    "Kya mai is problem ka smaller version solve karke current problem solve kar sakta hoon?"

    Is solution mein answer hai:
    - solve("", digits) — original problem.
    - solve("2", [1,3,0]) — smaller problem.
    - solve("21", [3,0]) — aur smaller problem.
    - solve("210", []) — base case.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var findEvenNumbers = function (digits) {
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

    return result;
};
