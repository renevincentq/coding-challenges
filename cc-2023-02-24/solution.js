// doubly linked list class

class Node {
    constructor(val, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(val) {
        if (!this.head) {
            this.head = this.tail = new Node(val)
        }
        else {
            let old = this.tail
            this.tail = new Node(val, old)
            old.next = this.tail
        }
    }

    prepend(val) {
        if (!this.tail) {
            this.head = this.tail = new Node(val)
        }
        else {
            let old = this.head
            this.head = new Node(val, null, old)
            old.prev = this.head
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
                this.head = removed.next
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
                this.tail = removed.prev
                this.tail.next = null
            }

            return removed
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
list.append(3214)
list.append('value')
list.prepend('test 123 321')
list.append('last')
console.log(list.search('value'))
console.log(list)
console.log(list.deleteHead())
console.log(list.deleteTail())
console.log(list)