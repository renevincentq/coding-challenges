// 137. Single Number II
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99


// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ones = twos = 0

    // & = bitwise AND returns 1 if both bits are 1
    // ^ = bitwise exclusive OR (XOR) returns 1 if both bits are different
    // ~ = bitwise NOT/complement flips bits to opposite number
    for (const num of nums) {

        // XOR current number with ones, toggling the bits that appear once
        // then AND with the complement of twos, removing bits that have appeared twice
        ones = (ones ^ num) & ~twos

        // XOR current number with twos, toggling the bits that appear twice
        // then AND with the complement of ones to remove bits that have appeared once
        twos = (twos ^ num) & ~ones
    }

    return ones
};