// creating a doubly linked list class again for practice

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        if (this.tail === null) {
            this.head = this.tail = new Node(value)
        }
        else {
            let tempHold = this.tail
            this.tail = new Node(value, tempHold)
            tempHold.next = this.tail
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = this.tail = new Node(value)
        }
        else {
            let tempHold = this.head
            this.head = new Node(value, null, tempHold)
            tempHold.prev = this.head
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        }
        else {
            let removed = this.head
            this.head = this.head.next
            this.head.prev = null
            return removed.value
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null
        }
        else {
            let removed = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            return removed.value
        }
    }

    search(value) {
        let current = this.head

        while (current.next) {
            if (current.value === value) {
                return current
            }
            current = current.next
        }

        return null
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
} 