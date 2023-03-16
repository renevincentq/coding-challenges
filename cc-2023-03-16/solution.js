// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxCharacter(str) {
    let chars = {}
    let max = 0
    let letter = null;

    for (const char of str) {
        chars[char] = chars[char] + 1 || 1
    }

    for (const char in chars) {
        if (chars[char] > max) {
            max = chars[char]
            letter = char
        }
    }

    return letter
}

console.log(maxCharacter('Hello World!'))
console.log(maxCharacter('testtest test '))