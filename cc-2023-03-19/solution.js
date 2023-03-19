// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


function reverseString(str) {
    str = str.split('')

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        [str[i], str[j]] = [str[j], str[i]]
    }

    return str.join('')
}

console.log(reverseString('bob'))
console.log(reverseString('hello'))
console.log(reverseString('testing test 123 test'))