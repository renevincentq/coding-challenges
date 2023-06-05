// 1232. Check If It Is a Straight Line
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.





// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false


// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {

    //checks collinearity of 3 points with determinants
    function checkSlope([x1, y1], [x2, y2], [x3, y3]) {
        let determinant = x1 * (y2 - y3) - y1 * (x2 - x3) + (x2 * y3 - y2 * x3)
        return determinant === 0 ? true : false
    }

    for (let i = 2; i < coordinates.length; i++) {
        if (checkSlope(coordinates[0], coordinates[1], coordinates[i]) === false) {
            return false
        }
    }

    return true
};