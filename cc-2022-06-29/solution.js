// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string){
    let hashes = {};
    if (string.length == 0) {
      return null
    }
    string.replace(/[^a-z0-9]/gi, '').split('')
      .filter((a, b, c) => c.indexOf(a) == b)
      .forEach(a => hashes[a] = a.charCodeAt(0));
    return hashes
}