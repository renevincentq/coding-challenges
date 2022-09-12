// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// euclidean algorithm efficiently finds gcd of two numbers

function gcd(num1, num2) {
    return num2 === 0 ? num1 : gcd(num2, num1 % num2)
}

console.log(gcd(30, 12))
console.log(gcd(8, 9))
console.log(gcd(1, 1))