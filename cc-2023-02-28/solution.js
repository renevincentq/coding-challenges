// doubly linked list again

class Node {
    constructor(val, prev, next) {
        this.val = val
        this.prev = prev || null
        this.next = next || null
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
        if (!this.head) {
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
        if (!this.head) {
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
list.append(1)
list.append('2')
list.append(3)
list.prepend('0')
console.log(list)
console.log(list.deleteHead())
console.log(list.deleteTail())
console.log(list.search(1))
console.log(list)