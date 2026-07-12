// # 922. Sort Array By Parity II

// ### What the problem wants

// * Every even index must contain an even number.
// * Every odd index must contain an odd number.
// * The array always has equal evens and odds, so this is always possible.

// # Key Idea

// Use two pointers, one scanning even positions and one scanning odd positions, and fix mismatches by swapping.

// # Algorithm 

// 1. Start one pointer at the first even index, another at the first odd index.
// 2. Move the even-pointer forward until you find an even index holding a wrong value (an odd number).
// 3. Move the odd-pointer forward until you find an odd index holding a wrong value (an even number).
// 4. Swap these two mismatched values.
// 5. Continue until both pointers reach the end.

// # Why this works

// * Every wrong even index must match with a wrong odd index (because counts of evens and odds are equal).
// * So every mismatch can be paired and fixed by one swap.


// # What to Remember

// * This is a parallel two-pointer problem scanning fixed index types (even/odd).
// * The moment you see “index position must match element type,” this technique applies.

// Asked by:
// Amazon
// Microsoft
// Oracle
// Spotify
// IBM

// Reason:
// It’s a slightly advanced version of partitioning with index constraints.

// ==================================================================================================================

// Example 1:

// Input: nums = [4,2,5,7]
//                  l r
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

// Example 3:

// Input: nums = [3,4]
// Output: [4,3]

// Example 4:

// Input: nums = [4,1,1,0,1,0]
// Output:     [4,1,0,1,0,1]

// Example 5:

// Input: nums = [3, 0, 4, 0, 2, 1, 3, 1, 3, 4]
// Output: [0, 3, 4, 3, 2, 3, 0, 1, 1, 4]
// Expected: [0, 3, 4, 3, 2, 1, 0, 1, 4, 3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArrayByParityII = function (nums) {
//     let left = 0, right = 1;

//     while (right < nums.length) {

//         if (((nums[left] % 2 === 0 && left % 2 !== 0) || nums[left] % 2 !== 0 && left % 2 === 0) &&
//             (nums[right] % 2 === 0 && right % 2 !== 0) || (nums[right] % 2 !== 0 && right % 2 === 0)) {
//             let temp = nums[left];
//             nums[left] = nums[right];
//             nums[right] = temp;
//             left++;
//         } else if (nums[left] % 2 === 0 && left % 2 === 0 || nums[left] % 2 !== 0 && left % 2 !== 0) {
//             left++;
//         }

//         right++;
//     }

//     return nums;
// };


var sortArrayByParityII = function (nums) {
    let even = 0;
    let odd = 1;
    const n = nums.length;

    while (even < n && odd < n) {
        // if even index has odd number
        if (nums[even] % 2 !== 0) {

            // odd index must have even number to swap with
            while (odd < n && nums[odd] % 2 !== 0) {
                odd += 2;
            }

            // Now nums[odd] is even → swap
            [nums[even], nums[odd]] = [nums[odd], nums[even]];
        }

        even += 2; // move to next even index
    }

    return nums;
};


let nums = [4, 2, 5, 7];
const result = sortArrayByParityII(nums);
console.log(result)
