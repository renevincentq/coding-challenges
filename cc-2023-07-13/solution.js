// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.



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


// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adjacency = {},
        visited = {}

    // building adjacency list
    for (const [c1, c2] of prerequisites) {
        if (adjacency[c1] === undefined) {
            adjacency[c1] = [c2]
        }
        else {
            adjacency[c1].push(c2)
        }
    }

    // depth first search to check if we can take a course
    const dfs = (node) => {
        // check if we need to have taken any course being visited already
        // to take the next course passed through
        if (visited[node]) {
            return false
        }

        // check if course has prerequisites
        if (adjacency[node] !== undefined) {

            // mark current course as being visited
            visited[node] = true

            // check if we can take the prerequisite courses
            for (const course of adjacency[node]) {
                if (!dfs(course)) {
                    return false
                }
            }

            // course is no longer being visited
            visited[node] = false

            // remove prerequisites of course, marking it as being valid
            adjacency[node] = undefined
        }
        // course is able to be taken 
        return true
    }

    for (const course in adjacency) {
        if (!dfs(course)) {
            return false
        }
    }
    return true
};