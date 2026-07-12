

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let row = Math.floor(mid / n);
        let col = mid % n;

        if (matrix[row][col] < target) {
            left = mid + 1;
        } else if (matrix[row][col] > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }

    return false;
};

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
const result = searchMatrix(matrix, target);
console.log('result=', result)