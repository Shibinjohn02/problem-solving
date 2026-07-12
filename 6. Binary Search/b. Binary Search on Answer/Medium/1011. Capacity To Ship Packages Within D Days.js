
// Example 1:
// Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
// Output: 15
// Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10
// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.

// Example 2:
// Input: weights = [3,2,2,4,1,4], days = 3
// Output: 6
// Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
// 1st day: 3, 2
// 2nd day: 2, 4
// 3rd day: 1, 4

// Example 3:
// Input: weights = [1,2,3,1,1], days = 4
// Output: 3
// Explanation:
// 1st day: 1
// 2nd day: 2
// 3rd day: 3
// 4th day: 1, 1

// Example 4:
// Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 10
// Output: 10

// Example 5:
// Input: weights = [3,3,3,3,3,3], days = 2
// Output: 9

// Key Insight:
// If capacity < maximum weight package, shipping is impossible.
// Because that package cannot fit on the ship even alone.

// low = maxWeight, high = totalWeightSum, target = days

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function checkDaysToShip(weights, mid) {
    let days = 1, sum = 0;

    for (let i = 0; i < weights.length; i++) {
        if (sum + weights[i] > mid) {
            days++;
            sum = 0;
        }
        sum += weights[i];
    }

    return days;
}

var shipWithinDays = function (weights, days) {
    let low = weights[0];
    let high = weights[0];

    for (let i = 1; i < weights.length; i++) {
        if (weights[i] > low) {
            low = weights[i];
        }
    }

    for (let i = 1; i < weights.length; i++) {
        high += weights[i];
    }

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        let ans = checkDaysToShip(weights, mid);

        if (ans > days) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};

let weights = [3, 3, 3, 3, 3, 3], days = 2
const result = shipWithinDays(weights, days);
console.log('result=', result);