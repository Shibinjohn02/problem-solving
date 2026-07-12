
// Example 1:
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
/*
[ [ 1, 6 ], [ 2, 8 ], [ 7, 12 ], [ 10, 16 ] ]

1------6
  2--------8
       7--------12
          10--------16
*/

// Example 2:
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

// Example 3:
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

// Example 4:
// Input: points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]
// Output: 1

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);

    let count = 1;
    let previous = points[0];

    for (let i = 1; i < points.length; i++) {
        let current = points[i];

        if (current[0] <= previous[1]) {
            previous = [Math.max(previous[0], current[0]), Math.min(previous[1], current[1])];
        } else {
            count++;
            previous = current;
        }
    }

    return count;
};
let points = [[10, 16], [2, 8], [1, 6], [7, 12]]
const result = findMinArrowShots(points);
console.log('result=', result)