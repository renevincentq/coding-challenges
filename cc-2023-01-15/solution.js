// making a doubly linked list class

class Node {
    constructor(prev, val, next) {
        this.prev = prev || null
        this.val = val
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(val) {
        if (!this.head) {
            this.head = this.tail = new Node(null, val)
        }
        else {
            let oldTail = this.tail
            oldTail.next = new Node(oldTail, val)
            this.tail = oldTail.next
        }
    }

    prepend(val) {
        if (!this.head) {
            this.head = this.tail = new Node(null, val)
        }
        else {
            let oldHead = this.head
            oldHead.prev = new Node(null, val, oldHead)
            this.head = oldHead.prev
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

            return removed.val
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

            return removed.val
        }
    }

    search(val) {
        let curr = this.head

        while (curr) {
            if (curr.val === val) {
                return curr
            }

            curr = curr.next
        }

        return null
    }
}

const list = new LinkedList()

list.append(3)
list.append('test')
list.append('testing 2')
list.prepend('one')
list.prepend(1)
console.log(list)
console.log(list.deleteTail())
console.log(list.search('test'))
console.log(list)
