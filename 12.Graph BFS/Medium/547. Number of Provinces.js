
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

    for (let city = 0; city < n; city++) {
        if (visited[city]) {
            continue;
        }

        provinces++;

        const queue = [city];
        visited[city] = true;

        while (queue.length > 0) {
            const currentCity = queue.shift();

            for (let neighbor = 0; neighbor < n; neighbor++) {
                if (isConnected[currentCity][neighbor] === 1 && !visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    return provinces;
};

let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
let result = findCircleNum(isConnected);
console.log('result=', result);