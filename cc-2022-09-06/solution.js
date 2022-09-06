//creating a fibonacci function to return the nth number in the sequence, but using recursion

function fib(num) {
    if (num <= 1) {
        return num
    }

    return fib(num - 1) + fib(num - 2)
}

console.log(fib(2))
console.log(fib(10))
console.log(fib(6))