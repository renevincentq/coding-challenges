// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function removeDupes(arr) {
    return arr.map(x => x.split('').filter((a, b, c) => a !== c[b + 1]).join(''))
}

console.log(removeDupes(["abracadabra", "allottee", "assessee"]))
console.log(removeDupes(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]))
console.log(removeDupes(["abracadabra", "allottee", "assessee"]))