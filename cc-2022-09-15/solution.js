//creating a queue class

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }
    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const queue = new Queue()

queue.enqueue('hi')
queue.enqueue('hello')
queue.enqueue('ayo')
console.log(queue)
queue.dequeue('hello')
queue.enqueue('bob')
console.log(queue)