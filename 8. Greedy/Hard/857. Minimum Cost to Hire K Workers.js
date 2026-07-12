
// Example 1:
// Input: quality = [10, 20, 5], wage = [70, 50, 30], k = 2
// Output: 105.00000
// Explanation: We pay 70 to 0th worker and 35 to 2nd worker.
// Calculate rate (wage / quality):
// Worker 0 → 7  
// Worker 1 → 2.5  
// Worker 2 → 6  

// Case: [0, 1]
// max rate = 7
// total quality = 10 + 20 = 30
// cost = 30 × 7 = 210 ❌

// Case: [0, 2]
// max rate = 7
// total quality = 15
// cost = 105 ✅

// Case: [1, 2]
// max rate = 6
// total quality = 20 + 5 = 25
// cost = 25 × 6 = 150 ❌

// Example 2:
// Input: quality = [3, 1, 10, 10, 1], wage = [4, 8, 2, 2, 7], k = 3
// Output: 30.66667
// Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.
// Calculate rate (wage / quality):
// Worker 0 → 4/3 ≈ 1.33
// Worker 1 → 8
// Worker 2 → 0.2
// Worker 3 → 0.2
// Worker 4 → 7

// Rate fix karo
// Us rate ke under jitne workers available hain, Unme se k lowest quality wale choose karo
/*

Calculate rate (wage / quality):

pay = quality × rate
rate = pay / quality

Cost = (sum of qualities) × (max rate in group)

Best group:
- low max rate
- manageable total quality

Q. Brute force kya hai?
Ans. Yeh hain ki hume har pair try hoga like 0,1 then 0,2 then 1,2 once we tried all pairs hum ek cost variable mai minCost store karenge. Har pair check karne k baad
aggr cost current cost se kam hain toh hum variable ki value update kar denge. ✔️

Q. Kya sab try karna zaroori hai?
Ans. Han mujhe lagta hain hume sab try karna zaroori, otherwise hume pata nahi chalega.

Q. Kya main kuch skip kar sakta hoon?
Ans. No I don't think so.

*/

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {

    let workers = [];

    // Step 1: store [rate, quality]
    for (let i = 0; i < quality.length; i++) {
        workers.push([wage[i] / quality[i], quality[i]]);
    }

    // Step 2: sort by rate (low → high)
    workers.sort((a, b) => a[0] - b[0]);

    let maxHeap = []; // store qualities
    let totalQuality = 0;
    let minCost = Infinity;

    for (let [rate, q] of workers) {

        // add current worker
        maxHeap.push(q);
        totalQuality += q;

        // if more than k workers → remove largest quality
        if (maxHeap.length > k) {
            maxHeap.sort((a, b) => b - a); // max heap simulation
            totalQuality -= maxHeap.shift();
        }

        // if we have exactly k workers → calculate cost
        if (maxHeap.length === k) {
            minCost = Math.min(minCost, totalQuality * rate);
        }
    }

    return minCost;
};