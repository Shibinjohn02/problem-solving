
// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {

    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {

        let currentHeight = (i === heights.length) ? 0 : heights[i];

        while (
            stack.length &&
            currentHeight < heights[stack[stack.length - 1]]
        ) {

            let height = heights[stack.pop()];

            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
};