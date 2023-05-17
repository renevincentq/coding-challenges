// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function pairSum(nums, sum) {
    let numbers = {}
    let pairs = []

    for (const num of nums) {
        const pair = sum - num
        if (numbers[pair]) {
            pairs.push([num, pair])
        }
        else {
            numbers[num] = 1
        }
    }

    return pairs
}

console.log(pairSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])