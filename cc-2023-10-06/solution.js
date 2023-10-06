// TopSWE 100 #3
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    let letters = {}

    for (const char of s) {
        letters[char] = letters[char] + 1 || 1
    }

    for (const char of t) {
        if (!letters[char]) {
            return false
        }
        else {
            letters[char]--
        }
    }

    return true
};