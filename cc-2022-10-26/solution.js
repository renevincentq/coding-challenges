// creating a doubly linked list

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        else {
            let prevtail = this.tail
            this.tail = new Node(value)
            this.tail.prev = prevtail
            prevtail.next = this.tail
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }
        else {
            let prevhead = this.head
            this.head = new Node(value)
            this.head.next = prevhead
            prevhead.prev = this.head
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        }
        else {
            let removed = this.head
            if (this.head === this.null) {
                this.head = this.tail = null
            }
            else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removed
        }
    }

    deleteTail() {
        if (!this.tail) {
            return null
        }
        else {
            let removed = this.tail
            if (this.head === this.tail) {
                this.head = this.tail = null
            }
            else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removed
        }
    }

    search(value) {
        let curr = this.head

        while (curr) {
            if (curr.value === value) {
                return curr
            }
            else {
                curr = curr.next
            }
        }
        return null
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}

const list = new LinkedList()

list.append('test')
list.append('2')
list.prepend('yo')
console.log(list)
console.log(list.deleteHead())
console.log(list.search('test'))