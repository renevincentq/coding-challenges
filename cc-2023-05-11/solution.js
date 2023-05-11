// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function highestOccurence(string) {
    let strings = {}
    let max = 0;
    for (const char of string) {
        strings[char] = (strings[char] || 0) + 1
    }
    for (let key in strings) {
        max = (strings[key] > max ? key : max)
    }
    return max
}

console.log(highestOccurence('asdadsdaswqesasda!!hahaa'))