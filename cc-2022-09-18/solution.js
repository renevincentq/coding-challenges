// creating a doubly linked list class

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    // add to the tail
    append(value) {

        // if list is empty value becomes the head
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        }

        // if not empty, new value added to tail
        else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    // add to head
    prepend(value) {

        // if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        }

        // if not empty new value becomes head
        else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead

        }
    }

    // delete head and return its value
    deleteHead() {

        // if list is empty
        if (!this.head) {
            return null
        }

        else {
            let removedHead = this.head

            // if head is the only node
            if (this.head === this.tail) {
                this.head = this.tail = null
            }

            // if list has >1 node
            else {
                this.head = this.head.next
                this.head.prev = null
            }

            return removedHead.value
        }
    }

    // delete tail and return its value
    deleteTail() {

        // if list is empty
        if (!this.tail) {
            return null
        }

        else {
            let removedTail = this.tail

            // if list has only one node
            if (this.head === this.tail) {
                this.tail = this.head = null
            }

            // if list has >1 node
            else {
                this.tail = this.tail.prev
                this.tail.next = null
            }

            return removedTail.value
        }
    }

    // search list for a value
    search(value) {
        let currentNode = this.head

        // iterate through list
        while (currentNode) {

            // return the current node if value is found
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }

        // did not find value in list
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

const list = new LinkedList()

list.append(123)
list.append(2)
list.append(321)
console.log(list)
list.prepend(18)
console.log(list)
console.log(list.search(2))
list.deleteHead()
list.deleteTail()
console.log(list)