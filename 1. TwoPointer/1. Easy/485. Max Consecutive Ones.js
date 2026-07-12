
// This is asked by:

// Amazon
// Google
// Meta (Facebook)
// Microsoft
// Uber
// Lyft
// Qualcomm
// Cisco
// VMware
// Goldman Sachs

// Reason:
// It tests sliding window basics + clean coding

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxSeqCount = 0, counter = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 1) {
            counter = 0;
            continue
        };

        counter++;
        if (counter > maxSeqCount) maxSeqCount = counter;
    }

    return maxSeqCount;
};

const nums = [1, 1, 0, 1, 1, 1];
const result = findMaxConsecutiveOnes(nums);
console.log('result=', result)