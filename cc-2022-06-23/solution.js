// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

// Explanation
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

const isConsecutive = (str) => {
    let arr = str.split('');
    let current;
    let last;
    let used = [];
    
    for (let i = 1; i <= arr.length; i++) {
      last = arr[i - 1]
      current = arr[i]
      if (current != last) {
        used.push(last)
      }
      if (used.includes(current)) {
        return false
      }
    }
    return true
}