//creating a fibonacci function to return the nth number in the sequence, but using recursion with memoization
//(memoization: an optimization technique that works by storing computation results in cache, and retrieving it from the cache when its needed instead of computing it again)

const memo = {}
function fib(num) {
    if (num <= 1) {
        return num
    }
    else if (memo[num]) {
        return memo[num]
    }
    else {
        let result = fib(num - 1) + fib(num - 2)
        memo[num] = result
        return result
    }
}

console.log(fib(2))
console.log(fib(10))
console.log(fib(6))