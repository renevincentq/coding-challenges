// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str) {
    let reverse = ''

    for (let i = str.length - 1; ~i; i--) {
        reverse = reverse + str[i]
    }

    return reverse
}

console.log(reverseString('test'))
console.log(reverseString('reverse word'))
console.log(reverseString('qweisdoQWEQW 3123sads'))