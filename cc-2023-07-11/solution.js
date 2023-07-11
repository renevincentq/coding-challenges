// 863. All Nodes Distance K in Binary Tree
// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.



// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
// Example 2:

// Input: root = [1], target = 1, k = 3
// Output: []


// Constraints:

// The number of nodes in the tree is in the range [1, 500].
// 0 <= Node.val <= 500
// All the values Node.val are unique.
// target is the value of one of the nodes in the tree.
// 0 <= k <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    // storage for nodes with distance k
    const arr = []

    // recursively add reference to parent node starting from root node
    const addParents = (node, parent = null) => {
        if (!node) {
            return
        }
        node.parent = parent

        addParents(node.left, node)
        addParents(node.right, node)
    }

    // recursively get distance of node from the target node,
    // starting from the target node
    const getDistance = (node, dist = 0) => {
        // return if node doesnt exist, distance > k, or node has been visited
        if (!node || dist > k || node.val === -1) {
            return
        }

        // add node to array if distance = k
        if (dist === k) {
            arr.push(node.val)
        }

        // mark node as visited
        node.val = -1

        // traverse through other nodes, accumulating +1 to distance each time
        getDistance(node.parent, dist + 1)
        getDistance(node.left, dist + 1)
        getDistance(node.right, dist + 1)
    }

    // dfs twice
    addParents(root)
    getDistance(target)

    return arr
};