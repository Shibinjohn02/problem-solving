

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);
    let n = Math.floor(arr.length / 2);
    let res;

    if (arr.length % 2 === 0) {
        res = (arr[n - 1] + arr[n]) / 2;
    } else {
        res = arr[n];
    }

    return res.toFixed(5);
};

let nums1 = [1, 2], nums2 = [3, 4];
const result = findMedianSortedArrays(nums1, nums2);
console.log('result=', result);