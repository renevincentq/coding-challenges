// 119. Pascal's Triangle II
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


// Constraints:

// 0 <= rowIndex <= 33


// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let rows = [[1]]

    for (let i = 1; i <= rowIndex; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                row.push(rows[i - 1][j] + rows[i - 1][j - 1])
            }
            else {
                row.push(1)
            }
        }
        rows.push(row)
    }

    return rows[rowIndex]
};

// without needing to build the whole triangle

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let row = new Array(rowIndex + 1).fill(1)

    for (let i = 0; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1]
        }
    }

    return row
};