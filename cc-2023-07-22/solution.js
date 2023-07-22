// 812. Largest Triangle Area

// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.



// Example 1:


// Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest.
// Example 2:

// Input: points = [[1,0],[0,0],[0,1]]
// Output: 0.50000


// Constraints:

// 3 <= points.length <= 50
// -50 <= xi, yi <= 50
// All the given points are unique.

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let max = -Infinity

    // formula: ∣a[0](b[1]−c[1])+b[0](c[1]−a[1])+c[0](a[1]−b[1])∣/2
    const getArea = (a, b, c) => {
        return Math.abs(a[0] * (b[1] - c[1]) +
            b[0] * (c[1] - a[1]) +
            c[0] * (a[1] - b[1])) / 2
    }

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {

                let area = getArea(points[i], points[j], points[k])

                max = Math.max(max, area)
            }
        }
    }

    return max
};