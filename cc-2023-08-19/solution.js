// 1128. Number of Equivalent Domino Pairs

// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].



// Example 1:

// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1
// Example 2:

// Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
// Output: 3


// Constraints:

// 1 <= dominoes.length <= 4 * 104
// dominoes[i].length == 2
// 1 <= dominoes[i][j] <= 9

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let count = 0
    let seen = {}

    for (const domino of dominoes) {
        if (domino[0] > domino[1]) {
            [domino[0], domino[1]] = [domino[1], domino[0]]
        }

        let key = domino.toString()

        seen[key] = seen[key] + 1 || 1
    }

    for (const domino in seen) {
        let n = seen[domino]
        // (n * (n - 1)) / 2
        // formula to calculate number of pairs from a set of n distinct elements
        count += (n * (n - 1)) / 2
    }

    return count
};