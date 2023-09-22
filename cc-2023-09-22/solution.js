// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"


// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = [...s]

    for (let i = s.length - 1, j = 0; j < i; i--, j++) {
        while (!vowels.includes(arr[i]) && j < i) {
            i--
        }

        while (!vowels.includes(arr[j]) && j < i) {
            j++
        }

        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr.join('')
};