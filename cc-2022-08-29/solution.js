// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1


// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let chars = {}

    for (const char of s) {
        chars[char] = chars[char] + 1 || 1
    }

    for (const char in chars) {
        if (chars[char] === 1) {
            return s.indexOf(char)
        }
    }

    return -1
};