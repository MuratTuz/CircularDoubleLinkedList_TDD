
/* CircularDoublyLinkedList - expected beheviors/methods:
- addFirst(value), // returns added Node
- addLast(value), // returns added Node
- addAt(index, value), // returns added Node
- remove(value), // returns removed Node
- removeLast(), // returns removed Node
- removeFirst(),// returns removed Node
- removeAt(index), // returns removed Node
- first(),
- last(),
- find(value),
- get(index), 
- isEmpty(), 
- isFull()
- size(), 
- capacity(value),
- capacity,
- iterator implementation
*/


class CDLL{
    constructor() {
        this.head = new Node('_HEAD_');
        this.capacity = 12;
        this.count = 0;
    }

    addFirst(node) {
        let result = this.addLast(node);
        this.head.setNext(node);
        return result;
    }

    addLast(node) {
        return this.addAt(node, this.count); // Adds item at the next of the last-item whose index (this.count-1)
    }

    addAt(newNode, index) { 
        if (newNode instanceof Node) {
            let currentNode = this.get(index);
            this.addToList(currentNode, newNode);
            return newNode;
        } 
        return null;
    }

    /**
     * @param {Node} currentNode 
     * @param {Node} newNode 
     * If List is empty, currentNode points also the HEAD
     * Adds newNode next to currentNode
     */
    addToList(currentNode, newNode) {
        if (!this.isEmpty()) { // List is not empty
            if (currentNode.getNext() !== null) { // List contains more than one item
                if (this.isFull()) { // check the capacity, if full then remove first item in the list
                    this.removeFirst();
                }
                let nextNode = currentNode.getNext();
                currentNode.setNext(newNode);
                newNode.setPrevious(currentNode);
                nextNode.setPrevious(newNode);
                newNode.setNext(nextNode);
            } else { // List contains only one item so, connects each other
                currentNode.setNext(newNode);
                newNode.setPrevious(currentNode);
                currentNode.setPrevious(newNode);
                newNode.setNext(currentNode);
            }
        } else { // List is empty (currentNode points also the HEAD)
            this.head.setNext(newNode);  
        }
     this.count++;
    }

    /**
     * @param {Node} removingNode 
     * It must care of HEAD while removing an item
     */
    removeFromList(removingNode) {
        if (this.count > 2) { // List contains more than 2 items
            let interNode = removingNode;
            removingNode.getNext().setPrevious(removingNode.getPrevious());
            removingNode.getPrevious().setNext(removingNode.getNext());
            if (this.head.getNext() === interNode) {
                this.head.setNext(interNode.getNext());
            }
        } else if (this.count === 2) { // List contains 2 items
            let interNode = removingNode.getNext();
            this.head.setNext(interNode);
            interNode.setNext(null);
            interNode.setPrevious(null);
        } else { // List contains only one item
            this.head.setNext(null);
        }
        this.count--;
    }

    remove(value) {
        let node = this.find(value);
        if (node) {
            this.removeFromList(node);
            return node;
        }
        return null;
    }

    removeAt(index) {
        let node = this.get(index);
        if (node) {
            this.removeFromList(node);
            return node;
        }
        return null;
    }

    removeLast() {
        return this.removeAt(this.count - 1) // Removes an existed indexed item
    }

    removeFirst() {
        let result = this.removeAt(0) // Removes first item in the List
        this.head.setNext(result.getNext());
        return result;
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.capacity;
    }

    /**
     * @param {number} index 
     * Gets the Node object at the index of the CDL List
     */
    get(index) {
        let currentNode = this.head.getNext();
        if (index >= this.count) return this.last();        
        while (0 < index--) {
            currentNode = currentNode.getNext();
        }
        return currentNode;
    }

    /**
     * @param {number} value 
     * Gets the Node object regarding its value. While the List is circular, the count must be consider
     */
    find(value) {
        let currentNode = this.head;
        let index = 0;   
        while (index++ < this.count) {
            currentNode = currentNode.getNext();
            if (currentNode.getElement() === value) {
                return currentNode;
            }
        }
        return null; // The value is not found
    }

    first() {
        return this.head.getNext(); // If empty return null;
    }

    last() {
        let node = this.head.getNext();
        if (node) {
            if (node.getPrevious()) {
                return node.getPrevious();
            }
        }
        return node; // null or the only item
    }

    size() {
        return this.count;
    }

    /**
     * @param {number} value
     * It calls:
     *  with a parameter then sets the capacity of the list,
     *  without a parameter then gets the capacity of the list. 
     * In oreder to prevent data loss, it checks whether new capacity is greater than current size
     */
    ofCapacity(value) {
        if (value > this.count) {
            this.capacity = value;
        } else if (value) { // if not an empty parameter
            this.capacity = 12; // default
        }
        return this.capacity;
    }

    [Symbol.iterator]() {
        let current = this.head;
        let counter = this.count;
        return {
            next() {
                if (counter-- > 0) {
                    current = current.getNext();
                    return {value:current.getElement(), done:false}
                } else {
                    return{value:undefined, done:true}
                }
            }
        }
    }
}