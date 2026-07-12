
// Example 1:
// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

// Example 2:
// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.

// Example 3:
// Input: g = [10,9,8,7], s = [5,6,7,8]
// Output: 2

// Note:
// One cookie can go to only one child

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let child = 0;
    let cookie = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while (child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            child++;
        }
        cookie++;
    }

    return child;
};

let g = [10, 9, 8, 7], s = [5, 6, 7, 8]
const result = findContentChildren(g, s);
console.log('result=', result)