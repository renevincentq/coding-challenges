// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

function secondSymbol(s, symbol) {
    if (s.split('').filter(x => x == symbol).length <= 1) {
      return -1
    }
    
    let word = s.split('')
    word.splice(word.indexOf(symbol), 1)
    return word.indexOf(symbol) + 1
}

// can just use indexOf, indexOf can have two parameters, the second tells the function which index to start searching