
// Example 1:
// Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
// Output: [5,5,2,5,4,5,6,7]
// Explanation: 
// answer[0] = 5.
// Person 5 has more money than 3, which has more money than 1, which has more money than 0.
// The only person who is quieter (has lower quiet[x]) is person 7, but it is not clear if they have more money than person 0.
// answer[7] = 7.
// Among all people that definitely have equal to or more money than person 7 (which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x]) is person 7.
// The other answers can be filled out with similar reasoning.
/*

2
 \
  \
   > 1 → 0

4
 \
  \
   > 3 → 1

5-
 /
6
 \
  \
   > 3

3 → 7

Richer → Poorer
0 : []
1 : [0]
2 : [1]
3 : [1,7]
4 : [3]
5 : [3]
6 : [3]
7 : []

Poorer → Richer
0 : [1]
1 : [2,3]
2 : []
3 : [4,5,6]
4 : []
5 : []
6 : []
7 : [3]

Person : Quiet
0 : 3
1 : 2
2 : 5
3 : 4
4 : 6
5 : 1
6 : 7
7 : 0

Note:
For every person x:
Collect all people who are richer than x (including x), then return the one with the smallest quiet value.
*/

// Example 2:
// Input: richer = [], quiet = [0]
// Output: [0]

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {

    const n = quiet.length;

    // poorer -> richer
    const graph = Array.from({ length: n }, () => []);

    for (const [rich, poor] of richer) {
        graph[poor].push(rich);
    }

    // answer[i] = quietest richer/equal person for i
    const answer = Array(n).fill(-1);

    function dfs(person) {

        // Already computed
        if (answer[person] !== -1)
            return answer[person];

        // Initially, assume the person is the quietest.
        answer[person] = person;

        for (const richerPerson of graph[person]) {

            const candidate = dfs(richerPerson);

            if (quiet[candidate] < quiet[answer[person]])
                answer[person] = candidate;
        }

        return answer[person];
    }

    for (let person = 0; person < n; person++) {
        dfs(person);
    }

    return answer;
};

// Example 2:
// Input: n = 5, edgeList = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Output: [[],[0],[0,1],[0,1,2],[0,1,2,3]]
// Explanation:
// The above diagram represents the input graph.
// - Node 0 does not have any ancestor.
// - Node 1 has one ancestor 0.
// - Node 2 has two ancestors 0 and 1.
// - Node 3 has three ancestors 0, 1, and 2.
// - Node 4 has four ancestors 0, 1, 2, and 3.
/*
    Parent → Child Adjacency List:
    0 : [1,2,3,4]
    1 : [2,3,4]
    2 : [3,4]
    3 : [4]
    4 : []

    Child → Parent Adjacency List:
    0 : []
    1 : [0]
    2 : [0,1]
    3 : [0,1,2]
    4 : [0,1,2,3]
*/