// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function returnReverse(string) {
    return string.split('').reverse().join('')
}
  
// can also use a for of loop and add each character to a variable