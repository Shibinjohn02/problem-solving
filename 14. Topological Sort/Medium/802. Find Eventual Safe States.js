
// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]
// Explanation: The given graph is shown above.
// Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
// Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.

// Example 2:
// Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// Output: [4]
// Explanation:
// Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.

/*
If node has no neighbors
    → Safe ✅

Else
    → Follow every possible path.
       If even one path reaches a cycle
           → Not Safe ❌
       Otherwise
           → Safe ✅
*/

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {

    let n = graph.length;
    let safeNode = [];
    const state = Array(n).fill(0);

    function dfs(node) {

        // Cycle found
        if (state[node] === 1) return false;

        // Already processed
        if (state[node] === 2) return true;

        state[node] = 1

        for (const neighbor of graph[node]) {

            if (!dfs(neighbor)) return false;
        }

        state[node] = 2;

        return true;
    }

    for (let node = 0; node < n; node++) {

        if (!dfs(node)) continue;

        safeNode.push(node);
    }

    return safeNode;
};

let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
const result = eventualSafeNodes(graph);
console.log('result=', result);