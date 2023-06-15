// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function convertString(str) {
    return str.toLowerCase().split('')
        .map((a, b, c) => c.indexOf(a) === c.lastIndexOf(a) ? ')' : '(')
        .join('')
}

console.log(convertString('eqiewqeuqwe'))
console.log(convertString('testingtesting123'))