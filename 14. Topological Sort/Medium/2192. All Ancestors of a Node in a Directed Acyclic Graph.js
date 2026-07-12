
// Example 1:
// Input: n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
// Output: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
// Explanation:
// The above diagram represents the input graph.
// - Nodes 0, 1, and 2 do not have any ancestors.
// - Node 3 has two ancestors 0 and 1.
// - Node 4 has two ancestors 0 and 2.
// - Node 5 has three ancestors 0, 1, and 3.
// - Node 6 has five ancestors 0, 1, 2, 3, and 4.
// - Node 7 has four ancestors 0, 1, 2, and 3.
/*
    Parent → Child Adjacency List:
    0 : [3,4]
    1 : [3]
    2 : [4,7]
    3 : [5,6,7]
    4 : [6]
    5 : []
    6 : []
    7 : []

    Child → Parent Adjacency List:
    0 : []
    1 : []
    2 : []
    3 : [0,1]
    4 : [0,2]
    5 : [3]
    6 : [3,4]
    7 : [2,3]
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {

    // Child → Parent
    const graph = Array.from({ length: n }, () => []);

    for (const [parent, child] of edges) {
        graph[child].push(parent);
    }

    // Cache: ancestors of each node
    const cache = Array(n).fill(null);

    function dfs(node) {

        // Already computed
        if (cache[node] !== null)
            return cache[node];

        const ancestors = new Set();

        for (const parent of graph[node]) {

            // Direct parent
            ancestors.add(parent);

            // Parent's ancestors
            const parentAncestors = dfs(parent);

            for (const ancestor of parentAncestors) {
                ancestors.add(ancestor);
            }
        }

        cache[node] = [...ancestors].sort((a, b) => a - b);

        return cache[node];
    }

    const answer = [];

    for (let node = 0; node < n; node++) {
        answer.push(dfs(node));
    }

    return answer;
};

let n = 8, edgeList = [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]];
const result = getAncestors(n, edgeList);
console.log('result', result)