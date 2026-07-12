
// Example 1:
// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. 
// The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
// |4 - 1| = 3
// |7 - 4| = 3
// |7 - 1| = 6

// Example 2:
// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.

// Example 3:
// Input: position = [79,74,57,22], m = 4
// Output: 5

// Example 4:
// Input: positions = [1, 3, 6, 10], m = 3
// Output: 4, 
// Explanation
// [1, 6, 10]
// 6 - 1 = 5
// 10 - 6 = 4

// [1, 3, 10]
// 3 - 1 = 2
// 10 - 3 = 7
// Minimum = 2 ❌ worse

// Try to make that smallest distance as big as possible
// Place balls so that even the closest two balls are as far apart as possible
// maximize the minimum distance


/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function placeBalls(position, m, mid) {
    let ballsPlaced = 1; // place first ball
    let last = position[0];

    for (let i = 1; i < position.length; i++) {
        if (position[i] - last >= mid) {
            ballsPlaced++;
            last = position[i];
        }

        if (ballsPlaced === m) return true;
    }

    return false;
}

var maxDistance = function (position, m) {

    position.sort((a, b) => a - b);

    let low = 1;
    let high = position[position.length - 1] - position[0];
    let minForce = 0;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (placeBalls(position, m, mid)) {
            minForce = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return minForce;
};

let position = [1, 2, 3, 4, 7], m = 3
const result = maxDistance(position, m);
console.log('result=', result);