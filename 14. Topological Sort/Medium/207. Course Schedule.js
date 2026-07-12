
// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
    }

    // 0 = Unvisited
    // 1 = Visiting
    // 2 = Visited
    const state = Array(numCourses).fill(0);

    function dfs(course) {
        if (state[course] === 1)
            return false;

        if (state[course] === 2)
            return true;

        state[course] = 1;

        for (const nextCourse of graph[course]) {

            if (!dfs(nextCourse))
                return false;
        }

        state[course] = 2;

        return true;
    }

    for (let course = 0; course < numCourses; course++) {

        if (state[course] === 0) {

            if (!dfs(course))
                return false;
        }
    }

    return true;
};