// making a doubly linked list again

class Node {
    constructor(val, prev, next) {
        this.val = val
        this.prev = prev || null
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
            this.head = this.tail = new Node(val)
        }
        else {
            this.tail.next = new Node(val, this.tail)
            this.tail = this.tail.next
        }
    }

    prepend(val) {
        if (!this.head) {
            this.head = this.tail = new Node(val)
        }
        else {
            this.head.prev = new Node(val, null, this.head)
            this.head = this.head.prev
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
        if (!this.head) {
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
}

const list = new LinkedList()

list.append('element')
list.append('val')
list.prepend('testing')
list.append('testing123')
console.log(list)
console.log(list.deleteHead())
console.log(list.search('val'))
console.log(list)