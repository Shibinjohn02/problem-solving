// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
    let stack = [];
    let ans = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {

        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop();
            ans[idx] = (i - idx);
        }

        stack.push(i);
    }

    return ans;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log('result=', result);
