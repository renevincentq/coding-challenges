// 1002. Find Common Characters

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.



// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]


// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let chars = {}

    for (const char of words[0]) {
        chars[char] = chars[char] + 1 || 1
    }

    for (let i = 1; i < words.length; i++) {
        let curr = {}

        for (const char of words[i]) {
            curr[char] = curr[char] + 1 || 1
        }

        for (const char in chars) {
            if (curr[char]) {
                chars[char] = Math.min(curr[char], chars[char])
            }
            else {
                delete chars[char]
            }
        }
    }

    let arr = []
    for (const char in chars) {
        for (let i = 0; i < chars[char]; i++) {
            arr.push(char)
        }
    }
    return arr
};