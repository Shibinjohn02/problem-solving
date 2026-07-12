
// Example 1:
// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

// Example 2:
// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);

    let provinces = 0;

    function dfs(city) {
        visited[city] = true;

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    for (let city = 0; city < n; city++) {
        if (!visited[city]) {
            provinces++;
            dfs(city);
        }
    }

    return provinces;
};

let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
let result = findCircleNum(isConnected);
console.log('result=', result);