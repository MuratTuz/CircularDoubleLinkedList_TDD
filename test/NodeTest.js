
/* 
CircularDoublyLinkedList bekledigimiz davranislar/metodlar:
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

describe('Node Test Section', () => {



    it('A Node object must be exist', () => {
        let newNode = new Node();
        should.exist(1);
    });

})