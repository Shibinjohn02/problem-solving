
// Example 1:
// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.

// Sum is 17.
// Example 2:
// Input: arr = [11,81,94,43,3]
// Output: 444

/*
final_answer % (1000000007)

“Har subarray ka minimum mat dhoondo”
“Har element kitni subarrays me minimum ban raha hai, yeh dhoondo”

Left side → kitne elements tak wo smallest hai
Right side → kitne elements tak wo smallest hai

Count me hum “khud ko bhi include karte hain”

Total subarrays jaha wo minimum hai = left_count * right_count
Formula: arr[i] * left_count * right_count 
         value × frequency -> arr[i] × number_of_subarrays

PASS 1 → LEFT COUNTS
We find:
Previous Smaller Element

PASS 2 → RIGHT COUNTS
We find:
Next Smaller Element

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let n = arr.length;
    let mod = 1000000007;

    let left = new Array(n);
    let right = new Array(n);

    let stack = [];

    // Previous Smaller Element
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        left[i] = stack.length === 0
            ? i + 1
            : i - stack[stack.length - 1];

        stack.push(i);
    }

    // clear stack
    stack = [];

    // Next Smaller Element
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        right[i] = stack.length === 0
            ? n - i
            : stack[stack.length - 1] - i;

        stack.push(i);
    }

    let result = 0;

    for (let i = 0; i < n; i++) {
        result = (
            result + (arr[i] * left[i] * right[i])
        ) % mod;
    }

    return result;
};