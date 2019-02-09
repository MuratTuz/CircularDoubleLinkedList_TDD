
/* CircularDoublyLinkedList bekledigimiz davranislar/metodlar:
- addFirst(value), //eklenen node geri döndürülsün
- addLast(value), //eklenen node geri döndürülsün
- addAt(index, value), //eklenen node geri döndürülsün
- remove(value), // silinen node geri döndürülsün
- removeLast(), // silinen node geri döndürülsün
- removeFirst(),// silinen node geri döndürülsün
- removeAt(index), // silinen node geri döndürülsün
- first(),
- last(),
- find(value),
- get(index), 
- isEmpty(), 
- isFull()
- size(), 
- capacity(value),
- capacity,
- iterator implementasyonu

Icerdeki kullancaginiz Node tipi icin bekeldiklerimiz:
- getElement/setElement(value)
- getNext()/setNext(pNode)
- getPrevious()/setPrevious(pNode) */


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