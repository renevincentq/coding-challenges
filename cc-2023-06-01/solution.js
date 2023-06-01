// 1091. Shortest Path in Binary Matrix
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.



// Example 1:


// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:


// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1


// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length

    //check if start and end is clear
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return -1
    }

    //initializing the queue
    const queue = [[0, 0, 1]]

    // //Use array to keep track of visited for small grid inputs
    // //initialize array to track visited cells
    // const visited = Array(n).fill().map(() => Array(n).fill(false))
    // visited[0][0] = true

    //define the different directions
    const directions = [
        [-1, 0], //up
        [1, 0], //down
        [0, -1], //left
        [0, 1], //right
        [-1, -1], //up left
        [-1, 1], //up right
        [1, -1], //down left
        [1, 1] //down right
    ]

    //going through the queue
    while (queue.length) {
        //dequeue first item in queue
        const [row, column, length] = queue.shift()

        //check if at the end of the grid
        if (row === n - 1 && column === n - 1) {
            return length
        }

        //check all directions from current position
        for (const [dx, dy] of directions) {
            const newRow = row + dx
            const newColumn = column + dy

            //check if new position is empty, within bounds, and not visited
            if (newRow >= 0 && newRow < n &&
                newColumn >= 0 && newColumn < n &&
                // //if using visited array
                //!visited[newRow][newColumn] &&
                grid[newRow][newColumn] === 0
            ) {
                //enqueue new position if valid
                queue.push([newRow, newColumn, length + 1])

                //queued position is set to visited
                grid[newRow][newColumn] = 1

                // //when using visited array
                //visited[newRow, newColumn] = true
            }
        }
    }

    //no clear path was found
    return -1

};