
// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Example 2:
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited = new Array(n).fill(false);

    function dfs(node) {
        if (node === destination) {
            return true;
        }

        visited[node] = true;

        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }

        return false;
    }

    return dfs(source);
};

let n = 3, edges = [[0, 1], [1, 2], [2, 0]], source = 0, destination = 2;
const result = validPath(n, edges, source, destination);
console.log('result=',result)