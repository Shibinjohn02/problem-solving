

// [1, 8, 6, 2, 5, 4, 8, 3, 7] 49
//  i                       j 
// [1, 2, 3, 4, 5, 6, 7, 8, 8] 49


// [1, 1]
// [4, 3, 2, 1, 4]
// [1, 6, 8, 2, 5, 4, 8, 3, 7]  // 42
//        i                 j
// [1, 6, 7, 8, 2, 5, 4, 8, 3, 7] // 49  -> 7 * 7
//        i                    j
// [1, 6, 7, 8, 2, 5, 4, 8, 3, 7, 5] // 49 -> 7 * 7
//        i                    j
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, maxWater = 0;

    while (left < right) {
        let w = right - left;
        let h = Math.min(height[left], height[right])
        let area = w * h;
        maxWater = Math.max(maxWater, area);
        if (height[left] < height[right]) left++
        else right--;
    }

    return maxWater;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height))