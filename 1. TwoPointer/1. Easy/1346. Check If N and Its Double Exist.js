

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

// Example 3:

// Input: arr = [0,-2,2]
// Output: false

// Example 4:

// Input: arr = [0,0]
// Output: true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i] === 0 ? 0 : arr[i] / 2;
        let index = arr.indexOf(val);
        if (arr.includes(val) && i !== index) return true;
    }
    return false;
};

// Clean Optimized Code (Use Set)
var checkIfExist = function (arr) {
    let set = new Set();

    for (let x of arr) {
        if (set.has(2 * x) || (x % 2 === 0 && set.has(x / 2))) {
            return true;
        }
        set.add(x);
    }

    return false;
};


let arr = [0, 0];
const result = checkIfExist(arr);
console.log('result=', result)



// Use a HashSet (or JS Set) to make lookups O(1).

// ### Steps:

// 1. Traverse the array.
// 2. For each number `x`:

//    * Check if `2*x` exists in the set.
//    * OR check if `x/2` exists (if `x` is even).
// 3. Add `x` to the set.

// This becomes O(n).


// # What You Should Remember (Short Notes)

// ### Pattern:

// * Hashing → Constant-time lookups.

// ### Key Observations:

// * For each number `x`, its match is either:

//   * `2 * x`
//   * `x / 2` (only if even)

// ### Special Case:

// * `0` must appear at least twice.

// ### Preferred DSA Tool:

// ✔ HashSet, not two pointers.