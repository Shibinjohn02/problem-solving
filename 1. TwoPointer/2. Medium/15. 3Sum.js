// Example 1:

// Input: nums = [-1,0,1,2,-1,-4] → 
// [-4, -1, -1,  0,  1,  2]
//   i   le             ri
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let i = 0, left = i + 1, right = nums.length - 1, result = [];

    nums.sort(function (a, b) { return a - b });

    while (left != (nums.length - 1)) {

        let sum = nums[i] + nums[left] + nums[right], target = 0;
        console.log('i=', i, 'left=', left, 'right=', right, 'sum=', sum)

        if (sum === target) {
            result.push([nums[i], nums[left], nums[right]]);
            left++;
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }

        if (left === right) {
            i++;
            left = i + 1;
            right = nums.length - 1;
        }
    }
    const unique = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
    return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);

// [-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2]
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate values for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // Skip duplicate values for left
                while (left < right && nums[left] === nums[left - 1]) left++;

                // Skip duplicate values for right
                while (left < right && nums[right] === nums[right + 1]) right--;

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};
