// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
    let strings = s.map(x => x.split(''))
    let result = []
    
    for (let i = 0; i < strings.length; i++) {
      result[i] = strings[i].filter((a, b, c) => a == c[b - 1] ? '' : a).join('')
    }
  
    return result
};