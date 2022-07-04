// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, d, n) {
    let count = 1;
    let nums = "";
    for (let i = a; count <= n; i += d) {
      count++
      nums += i +", "
    }
    return nums.substring(0, nums.length - 2)
}

// use join next time for commas