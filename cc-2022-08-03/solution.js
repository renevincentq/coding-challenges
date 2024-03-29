// Task
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

// Examples
// input: [0, 1, 0, 2]
// paired: ^-----^
//     -> [0, 1,   2]
//   kept: ^

// input: [0, 1, 0, 0]
// paired: ^-----^
//     -> [0, 1,    0]
//   kept: ^        ^

// input: [1, 0, 7, 0, 1]
// paired:    ^-----^
//     -> [1, 0, 7,    1]
//   kept:    ^

// input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
// paired: ^--------^        ^--^
//     -> [0, 1, 7,    2, 2, 0,    1, 0]
//   kept: ^                 ^        ^
// Notes
// Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
// 0s generated by pairing can NOT be paired again
// ( void where not applicable: ) Don't modify the input array or you may fail to pass the tests

function pairZeros(arr) {
    let nums = [];
    let zero = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (zero) {
                zero = false
            }
            else {
                zero = true
                nums.push(arr[i])
            }
        }
        else {
            nums.push(arr[i])
        }
    }
    return nums
}

// with filter, performance basically same?

function pairZeros(arr) {
    let zero = false;
    return arr.filter(x => {
        if (x != 0) {
            return true
        } else {
            if (zero) {
                zero = false
                return false

            }
            else {
                zero = true
                return true
            }
        }
    });
}