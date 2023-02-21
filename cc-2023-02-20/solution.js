// creating a queue class

class Queue {
    constructor() {
        this.storage = []
        this.head = this.tail = 0
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
queue.enqueue('test value')
queue.enqueue(2)
queue.enqueue('123123')
console.log(queue.dequeue())
console.log(queue)