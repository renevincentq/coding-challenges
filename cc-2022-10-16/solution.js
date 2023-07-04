// 594. Longest Harmonious Subsequence
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.



// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0


// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = {}
    let length = 0

    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }

    for (const num in map) {
        if (map[num - 1]) {
            length = Math.max(length, map[num - 1] + map[num])
        }
    }

    return length
};