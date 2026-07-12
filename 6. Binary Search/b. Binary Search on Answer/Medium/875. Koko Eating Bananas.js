
// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// k = number of bananas she can eat per hour (her eating speed). ?
// low = 1, high = 11

// Step 1: Set search range -> low = 1, high = max(piles)
// Step 2: Calculate mid speed
// Step 3: Calculate total hours using ceil(pile / mid)
// Step 4: If hours > h → increase speed (low = mid + 1)
// Step 5: Else try smaller speed (high = mid)
// Step 6: Repeat until minimum valid speed is found

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function checkHourToFinishPiles(piles, mid) {
    let hours = 0;

    for (let i = 0; i < piles.length; i++) {
        hours += Math.ceil(piles[i] / mid);
    }

    return hours;
}

function minEatingSpeed(piles, h) {
    let low = 1;
    let high = piles[0]; // max_value in piles

    for (let i = 1; i < piles.length; i++) {
        if (piles[i] > high) {
            high = piles[i];
        }
    }

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        let ans = checkHourToFinishPiles(piles, mid);
        if (ans > h) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

let piles = [3, 6, 7, 11], h = 8
const result = minEatingSpeed(piles, h);
console.log('result=', result);