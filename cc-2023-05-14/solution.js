// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'],
        count = 0
    for (const char of str) {
        if (!vowels.includes(char.toLowerCase()) && char.match(/[a-z]/i)) {
            count++
        }
    }

    return count
}