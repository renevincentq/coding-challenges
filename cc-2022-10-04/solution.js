// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(str) {
    const chars = {}

    for (const char of str) {
        chars[char] = chars[char] + 1 || 1
    }

    return chars
}

console.log(countChars('eqwdsdwewesa'))
console.log(countChars('test test test'))
console.log(countChars('kekwa asdawe 12wow'))