// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let expected = [...heights], indices = 0;
    expected.sort(function (a, b) { return a - b });

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) indices++;
    }

    return indices;
};

let heights = [1, 1, 4, 2, 1, 3];
const result = heightChecker(heights);
console.log(result);