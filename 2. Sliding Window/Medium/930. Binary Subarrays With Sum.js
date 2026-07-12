

// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]

// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// 0 1 2 3 4
// 1 0 1 0 1
//     l   r
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

// var numSubarraysWithSum = function (nums, goal) {
//     let left = 0, count = 0, sum = 0;

//     for (let right = 0; right < nums.length; right++) {
//         sum += nums[right];

//         if (sum === goal) count++;

//         while (sum > goal || (sum >= goal && (right === nums.length - 1))) {
//             sum -= nums[left];
//             left++;
//             if (sum === goal) count++;
//         }
//     }

//     return count;
// };


var numSubarraysWithSum = function (nums, goal) {
    if (goal < 0) return 0;

    let left = 0, right = 0, count = 0, sum = 0;

    while (right < nums.length) {

        sum = sum + nums[right];

        while (sum > goal) {
            sum = sum - nums[left];
            left++;
        }

        count = count + (right - left + 1) // number of valid subarrays that end at index right
        right++;
    }

    return count;
};


let nums = [1, 0, 1, 0, 1], goal = 2;
const result1 = numSubarraysWithSum(nums, goal);
const result2 = numSubarraysWithSum(nums, goal - 1);
const answer = result1 - result2;
console.log('result1=', result1, 'result2=', result2, 'answer=', answer);


// ONE PROPER TAKEAWAY (memorize this)

// 🔑 Ask this question when using sliding window:

// “For a fixed right, how many valid subarrays end here?”
//   a. If the answer is at most one → normal sliding window
//   b. If the answer is many → use (right - left + 1) or prefix sum

// One-line memory version

// Future endings guaranteed → s.length - right
// Current endings guaranteed → (right - left + 1)


