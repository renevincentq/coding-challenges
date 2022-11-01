// making a doubly linked list class
class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    prepend(element) {
        if (!this.head) {
            this.head = this.tail = new Node(element)
        }
        else {
            let prevHead = this.head
            this.head = new Node(element)
            prevHead.prev = this.head
            this.head.next = prevHead
        }
    }

    append(element) {
        if (!this.tail) {
            this.head = this.tail = new Node(element)
        }
        else {
            let prevTail = this.tail
            this.tail = new Node(element)
            prevTail.next = this.tail
            this.tail.prev = prevTail
        }
    }

    deleteHead() {
        if (!this.head) {
            return null
        }
        let removed = this.head
        if (this.head === this.tail) {
            this.head = this.tail = null
        }
        else {
            this.head = removed.next
            this.head.prev = null
        }
        return removed.val
    }

    deleteTail() {
        if (!this.tail) {
            return null
        }
        let removed = this.tail
        if (this.tail === this.head) {
            this.tail = this.head = null
        }
        else {
            this.tail = removed.prev
            this.tail.next = null
        }
        return removed.val
    }

    search(val) {
        let curr = this.head

        while (curr.next) {
            if (curr.val === val) {
                return curr
            }
            curr = curr.next
        }

        return null
    }


}
class Node {
    constructor(val, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

const list = new LinkedList()

list.append('hi')
list.append('huh')
list.append('supercalifragilistic')
console.log(list)
list.prepend('test')
console.log(list.deleteHead())
console.log(list.search('huh'))
console.log(list)