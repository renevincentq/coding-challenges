// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

function smaller(nums) {
    let arr = []

    for (let x = 0; x < nums.length; x++) {
        let smaller = 0

        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] > nums[y]) {
                smaller++
            }
        }

        arr.push(smaller)
    }

    return arr
}

// can also do some map > slice > filter but
// same time complexity doesnt really matter