// creating a doubly linked list again

class Node {
    constructor(prev, val, next) {
        this.prev = prev || null
        this.val = val
        this.next = next || null
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    // add to tail
    append(val) {
        if (!this.tail) {
            this.head = this.tail = new Node(null, val)
        }
        else {
            this.tail.next = new Node(this.tail, val)
            this.tail = this.tail.next
        }
    }

    // add to head
    prepend(val) {
        if (!this.head) {
            this.head = this.tail = new Node(null, val)
        }
        else {
            this.head.prev = new Node(null, val, this.head)
            this.head = this.head.prev
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

let list = new LinkedList()

list.append('hi')
list.append(2)
list.append('3hree')
list.prepend(99)
console.log(list)
console.log(list.deleteHead())
console.log(list.deleteTail())
console.log(list.search(99))
console.log(list.search('hi'))
console.log(list)