// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.

function binaryToString(binary) {
    let string = [];
    
    for (let i = 0; i < binary.length; i += 8) {
      string.push(binary.slice(i, i + 8));
    }
    
    return string.map(x => String.fromCharCode(parseInt(x, 2))).join('')
}