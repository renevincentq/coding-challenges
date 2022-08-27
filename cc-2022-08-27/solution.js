// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.



// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.
// Accepted
// 2.1M
// Submissions
// 2.7M
// Acceptance Rate
// 76.9%

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0,
        right = s.length - 1

    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};