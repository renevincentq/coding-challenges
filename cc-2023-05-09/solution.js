// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(string) {
    let chars = {}
    for (let char of string) {
      chars[char] = (chars[char] || 0) + 1
    }
    return chars
}