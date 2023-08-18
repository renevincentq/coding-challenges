// 1287. Element Appearing More Than 25% In Sorted Array

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.



// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1


// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let n = arr.length * 0.25
    // its sorted so we can use sliding window
    for (let left = right = 0; right < arr.length; right++) {
        if (arr[left] === arr[right] && right - left + 1 > n) {
            return arr[right]
        }
        if (arr[left] !== arr[right]) {
            left = right
        }
    }
};