// making a stack class

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

    peek() {
        return this.storage[this.size]
    }
}

const stack = new Stack()

console.log(stack.peek())
stack.push('one')
stack.push('2')
stack.push(3)
stack.push('element')
console.log(stack.pop())
console.log(stack)