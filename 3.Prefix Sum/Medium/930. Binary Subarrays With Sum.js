

// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1]
// [1,0,1,0]
// [0,1,0,1]
// [1,0,1]

// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// Questions:
// Q: Is the subarray contiguous? → Yes
// Q: Is the condition about a RANGE (l → r) or Is the property defined between two indices? →
// Q. Can I write the condition as an equation?

// sum(l → r) = goal
// prefix[r] − prefix[l−1] = goal
// prefix[l−1] = prefix[r] − goal

// prefixSum[i] = sum of elements from index 0 to i

// [1, 0, 1, 0, 1]
// [1, 1, 2, 2, 3]

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

var numSubarraysWithSum = function(nums, goal) {
    let prefixSum = 0;
    let count = 0;

    // Map to store how many times a prefixSum has occurred
    let map = new Map();
    map.set(0, 1); // very important

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (map.has(prefixSum - goal)) {
            count += map.get(prefixSum - goal);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};

// What is prefixSum REALLY?
// prefixSum[i] means: Sum of elements from index 0 to index i

// subarraySum(l → r) = prefixSum[r] - prefixSum[l - 1]
// prefixSum[r] - prefixSum[l - 1] = goal 
// In words: Total sum till r minus total sum till just before l equals goal.

// What does this line mean?
// prefixSum[l - 1] = prefixSum[r] - goal
// Before index l, the total sum must be (current total sum − goal).”


// At some point:

// Total money in box = ₹50

// You want to find a continuous run of coins worth ₹20

// Ask:

// How much money was already in the box
// before those ₹20 coins were added?

// Answer:

// ₹50 − ₹20 = ₹30
// Was there a moment when the total was (current total − goal)?

// Hum goal ko directly isliye nahi dhoondhte
// kyuki subarray ka start point hume pata hi nahi hota.
// Isliye hum woh moment dhoondhte hain
// jahan se goal banana possible ho.