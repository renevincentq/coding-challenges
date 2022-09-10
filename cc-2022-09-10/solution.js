// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// create a function that calculates the factorial of a given number, but use recursion

function factorial(num) {
    if (num <= 2) {
        return num
    }

    return num * factorial(num - 1)
}

console.log(factorial(6))
console.log(factorial(20))
console.log(factorial(1))