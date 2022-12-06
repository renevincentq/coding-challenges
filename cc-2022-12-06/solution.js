// creating a doubly linked list class

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(element) {
        if (!this.tail) {
            this.head = this.tail = new Node(element)
        }
        else {
            let oldTail = this.tail
            this.tail = new Node(element)
            this.tail.prev = oldTail
            oldTail.next = this.tail
        }
    }

    prepend(element) {
        if (!this.head) {
            this.head = this.tail = new Node(element)
        }
        else {
            let oldHead = this.head
            this.head = new Node(element)
            this.head.next = oldHead
            oldHead.prev = this.head
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        }
        else {
            let removed = this.head

            if (this.head === this.tail) {
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

    search(element) {
        let curr = this.head

        while (curr) {
            if (curr.value === element) {
                return curr
            }

            curr = curr.next
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

list.append('first')
list.prepend(1)
list.append('last')
console.log(list.search('last'))
console.log(list)
console.log(list.deleteHead())
console.log(list.deleteTail())
console.log(list)