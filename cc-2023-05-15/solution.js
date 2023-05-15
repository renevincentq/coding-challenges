// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majority(array) {
    let nums = {},
        majority = array[0],
        count = 0

    for (const num of array) {
        nums[num] = (nums[num] || 0) + 1
    }

    for (const num in nums) {
        if (nums[num] > count) {
            count = nums[num]
            majority = num
        }
    }

    return majority
}

console.log(majority([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9]))
console.log(majority([1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8,]))