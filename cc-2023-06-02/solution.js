// 2101. Detonate the Maximum Bombs
// You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb.

// The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range.

// You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges.

// Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.



// Example 1:


// Input: bombs = [[2,1,3],[6,1,4]]
// Output: 2
// Explanation:
// The above figure shows the positions and ranges of the 2 bombs.
// If we detonate the left bomb, the right bomb will not be affected.
// But if we detonate the right bomb, both bombs will be detonated.
// So the maximum bombs that can be detonated is max(1, 2) = 2.
// Example 2:


// Input: bombs = [[1,1,5],[10,10,5]]
// Output: 1
// Explanation:
// Detonating either bomb will not detonate the other bomb, so the maximum number of bombs that can be detonated is 1.
// Example 3:


// Input: bombs = [[1,2,3],[2,3,1],[3,4,2],[4,5,3],[5,6,4]]
// Output: 5
// Explanation:
// The best bomb to detonate is bomb 0 because:
// - Bomb 0 detonates bombs 1 and 2. The red circle denotes the range of bomb 0.
// - Bomb 2 detonates bomb 3. The blue circle denotes the range of bomb 2.
// - Bomb 3 detonates bomb 4. The green circle denotes the range of bomb 3.
// Thus all 5 bombs are detonated.


// Constraints:

// 1 <= bombs.length <= 100
// bombs[i].length == 3
// 1 <= xi, yi, ri <= 105

/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
    const n = bombs.length

    //initialize array to hold which bombs can hit another
    //(adjacency matrix)
    let inRange = new Array(n).fill(0).map(x => [])

    //function to check if two bombs can detonate each other
    function checkRange([x1, y1, r1], [x2, y2, r2]) {
        //uses euclidean distance formula (finds distance between two points on a plane)
        //however we dont need the distance itself, so take out the square root part
        const distance = (x1 - x2) ** 2 + (y1 - y2) ** 2

        //now we have the squared distance, which we can use with pythagorean theorem
        //if the radius of a bomb squared is greater than or equal to the hypotenuse
        //(the squared distance) then that means the other bomb is within range
        //returns an array containing if each bomb is in range with the other
        return [r1 ** 2 >= distance, r2 ** 2 >= distance]
    }

    //iterate over every bomb pair and build the inRange array of each bomb
    //iterate over all bombs
    for (let i = 0; i < n; i++) {

        //iterate over every other bomb
        for (let j = i + 1; j < n; j++) {

            //check if the two bombs are in range of each other
            const [hitsJ, hitsI] = checkRange(bombs[i], bombs[j])

            //if a bomb can hit another, add that bomb to their range in the inRange array
            if (hitsJ) {
                inRange[i].push(j)
            }
            if (hitsI) {
                inRange[j].push(i)
            }
        }
    }

    //initialize variable for maximum bomb detonations
    let max = 0

    //recursive approach to depth first search algorithm checking the number
    //of bombs that can be detonated starting from a given node (or bomb)
    //takes in a node or the current bomb being detonated, and a visited set 
    //keeping track of visited nodes, visited is empty by default
    function dfs(node, visited = new Set()) {
        //current node is visited
        visited.add(node)

        //initialize how many detonations can occur, set to 1 representing
        //the current bomb being detonated
        let bomb = 1

        //iterate through the adjacent bombs or bombs within range by using
        //the adjacency matrix
        for (let adjBombs of inRange[node]) {

            //if a bomb has not been visited recursively call this function again
            //using the new bomb and send the visited bombs list
            if (!visited.has(adjBombs)) {
                bomb += dfs(adjBombs, visited)
            }
        }
        //update the max variable between current max and the calculated max of
        //the current bomb detonated
        max = Math.max(max, bomb)

        //return the total number of bombs detonated
        return bomb
    }

    //apply the depth first search to each bomb in the bombs input
    for (let i = 0; i < n; i++) {
        dfs(i)
    }

    //return max number of bomb detonations
    return max
};