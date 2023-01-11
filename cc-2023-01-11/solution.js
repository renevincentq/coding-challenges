// making a queue class

class Queue {
    constructor() {
        this.head = 0
        this.tail = 0
        this.storage = {}
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        this.head++
        delete this.storage[this.head]
        return removed
    }
}

const queue = new Queue()

queue.enqueue('a')
queue.enqueue('ab')
queue.enqueue('acb')
console.log(queue.dequeue())
queue.enqueue('a')
console.log(queue)