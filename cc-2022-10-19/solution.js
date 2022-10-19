// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr) {
    return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length)
}

console.log(getAverage([2, 2, 2, 2]))
console.log(getAverage([1, 2, 3, 4, 5,]))
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))