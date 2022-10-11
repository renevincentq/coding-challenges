// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str) {
    let reverse = ''

    for (let i = str.length; i >= 0; i--) {
        reverse += str.charAt(i)
    }

    return reverse
}

console.log(reverseString('bob'))
console.log(reverseString('john'))
console.log(reverseString('sarah'))