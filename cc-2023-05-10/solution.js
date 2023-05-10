// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

function countJewels(jewels, stones) {
    return stones.split('').filter(x => jewels.split('').includes(x) ? x : '').length
}

console.log(countJewels('aaaAAAA', 'adawzxcAqw'))

// better solution with hashmap

function countJewels2(jewels, stones) {
    const map = {}
    let count = 0;

    for (const char of jewels) {
        map[char] = true
    }

    for (const char of stones) {
        if (map[char]) {
            count++
        }
    }
    return count
}

console.log(countJewels2('aaaAAAA', 'adawzxcAqw'))