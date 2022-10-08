// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxCharacter(str) {
    let chars = {}
    let max = null
    let count = 0

    for (const char of str) {
        chars[char] = chars[char] + 1 || 1
    }

    for (const char in chars) {
        if (chars[char] > count) {
            count = chars[char]
            max = char
        }
    }

    return max
}

console.log(maxCharacter("Hello World!"))
console.log(maxCharacter('qehwqdsaduqweasdsdqwe'))
console.log(maxCharacter('test test test asdsawqt'))