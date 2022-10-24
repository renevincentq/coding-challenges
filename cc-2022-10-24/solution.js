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

    dequene() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const queue = new Queue()

queue.enqueue('thing')
queue.enqueue('things2')
queue.enqueue('stuff')
console.log(queue)
console.log(queue.dequene())
console.log(queue)