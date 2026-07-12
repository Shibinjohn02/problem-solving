
// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
/*
    0
   / \
  v   v
  1   2
   \ /
    v
    3
Adjacency List:
    prerequisite: [course]
    graph = [
        0: [1,2]
        1: [3],
        2: [3],
        3: []
    ]
*/

// Example 3:
// Input: numCourses = 1, prerequisites = []
// Output: [0]

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function (numCourses, prerequisites) {

    const graph = Array.from({ length: numCourses }, () => []);

    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
    }

    // 0 = Unvisited, 1 = Visiting, 2 = Visited
    const state = Array(numCourses).fill(0);

    const stack = [];

    function dfs(course) {

        // Cycle found
        if (state[course] === 1)
            return false;

        // Already processed
        if (state[course] === 2)
            return true;

        state[course] = 1;

        for (const nextCourse of graph[course]) {

            if (!dfs(nextCourse))
                return false;
        }

        state[course] = 2;

        stack.push(course);

        return true;
    }

    for (let course = 0; course < numCourses; course++) {

        if (state[course] === 0) {

            if (!dfs(course))
                return [];
        }
    }

    return stack.reverse();
};