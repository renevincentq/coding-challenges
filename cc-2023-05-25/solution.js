// Exploring stacks (LIFO)
// Yesterday's challenge but with a stack instead, also using class syntax

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
    }

    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }

    check() {
        return this.storage[this.size]
    }
}

const test = new Stack()

test.push('word')
test.push('word2')
test.push('twenty four')
console.log(test.check())
console.log(test.pop())
console.log(test.check())