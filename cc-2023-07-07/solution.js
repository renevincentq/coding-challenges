// 598. Range Addition II
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.



// Example 1:


// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
// Example 2:

// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4
// Example 3:

// Input: m = 3, n = 3, ops = []
// Output: 9


// Constraints:

// 1 <= m, n <= 4 * 104
// 0 <= ops.length <= 104
// ops[i].length == 2
// 1 <= ai <= m
// 1 <= bi <= n

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let num = [m, n]

    // we want to know the minimum x and y in the operations array
    // because its area will have the greatest numbers
    for (const [x, y] of ops) {
        num = [Math.min(x, num[0]), Math.min(y, num[1])]
    }

    return num[0] * num[1]
};