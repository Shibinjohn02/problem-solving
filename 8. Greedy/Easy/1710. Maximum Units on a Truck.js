
// Example 1:
// Input: boxTypes = [[1, 3], [2, 2], [3, 1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

// Example 2:
// Input: boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize = 10
// Output: 91
// Explanation: Total boxes: 5 + 2 + 4 + 3 = 14
// You must choose any 10 boxes out of these 14.
// 5 boxes of 10 units → 50
// 3 boxes of 9 units  → 27
// 2 boxes of 7 units  → 14
// Total boxes = 5 + 3 + 2 = 10 
// Total units = 50 + 27 + 14 = 91

/*
Brute Force:

*/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {

    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnit = 0, count = 0;

    for (let box of boxTypes) {

        if (count === truckSize) return totalUnit;

        let needed = truckSize - count;
        let size = needed - box[0];

        if (size > 0) {
            totalUnit += box[0] * box[1];
            count += box[0];
        } else {
            totalUnit += needed * box[1];
            count += needed;
        }
    }

    return totalUnit;
};

// More Efficient Solution:
var maximumUnits = function (boxTypes, truckSize) {

    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;

    for (let [boxes, units] of boxTypes) {

        if (truckSize === 0) break;

        let take = Math.min(boxes, truckSize);

        totalUnits += take * units;
        truckSize -= take;
    }

    return totalUnits;
};

let boxTypes = [[1, 3], [2, 2], [3, 1]], truckSize = 4
const result = maximumUnits(boxTypes, truckSize);
console.log('result=', result);
