// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
function ransomNote(note, magazine) {
    const words = {}

    magazine = magazine.split(' ')
    for (const word of magazine) {
        words[word] = words[word] + 1 || 1
    }

    note = note.split(' ')
    for (const word of note) {
        if (words[word]) {
            words[word]--
        }
        else {
            return false
        }
    }

    return true
}

console.log(ransomNote("sit ad est sint", magazine))
console.log(ransomNote("sit ad est love", magazine))
console.log(ransomNote("sit ad est sint in in", magazine))
console.log(ransomNote("sit ad est sint in in in in", magazine))