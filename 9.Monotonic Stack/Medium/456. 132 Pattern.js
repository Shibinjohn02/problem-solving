
// Example 1:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.

// Example 2:
// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

// Example 3:
// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

/*

nums[i] < nums[k] < nums[j]
Order: i < j < k
i → small
j → big
k → medium

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
    let middle = -Infinity; // represents nums[k]

    for (let i = nums.length - 1; i >= 0; i--) {
        // check if current can be nums[i]
        if (nums[i] < middle) {
            return true;
        }

        // update middle (nums[k])
        while (stack.length && nums[i] > stack[stack.length - 1]) {
            middle = stack.pop();
        }

        // push current as candidate for nums[j]
        stack.push(nums[i]);
    }

    return false;
};

// “Jab problem solve karne ke liye tumhe aage ke elements ki zaroorat ho,
// toh pehle unhe dekh lo (reverse traversal karke)”

// Case 1: Simple future (left → right works)
// “next greater element”

// 👉 Tum bas wait karte ho:

// future me bada mile → done
// Case 2: Complex future (132 pattern)
// i needs j AND k
// AND
// k < j

// 👉 Yeh simple scan se nahi milega

// Left → Right = “find something in future”
// Right → Left = “prepare future, then use it”