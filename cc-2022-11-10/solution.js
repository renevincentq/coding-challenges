// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed
}

console.log(reverseString('test'))
console.log(reverseString('racecar'))
console.log(reverseString('asdasdwe123 we'))