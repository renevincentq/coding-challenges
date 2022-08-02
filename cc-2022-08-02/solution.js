// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!

function convertHashToArray(hash) {
    let arr = []
    for (const obj in hash) {
        arr.push([obj, hash[obj]])
    }
    return arr.sort((a, b) => a[0].localeCompare(b[0]))
}

// use Object.entries()

function convertHashToArray(hash) {
    return Object.entries(hash).sort()
}