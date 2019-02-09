
/* 
Expected beheviors/methods:
- getElement/setElement(value)
- getNext()/setNext(pNode)
- getPrevious()/setPrevious(pNode) 
*/


class Node{
    constructor(value){
        this.value = value === undefined ? null : value;
        this.next = null;
        this.previous = null;
    }

    getElement() {
        return this.value;
    }

    setElement(value) {
        this.value = value;
    }

    getNext() {
        return this.next;
    }

    setNext(nextNode) {
        if (nextNode instanceof Node) {
            this.next = nextNode;
            return true;
        } 
        return false;
    }

    getPrevious() {
        return this.previous;
    }

    setPrevious(previousNode) {
        if (previousNode instanceof Node) {
            this.previous = previousNode;
            return true;
        } 
        return false;
    }
}