

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
 */

describe('Circular Double Linked List - Test Section', function() {

    let newCDLL;
    let fullCDLL;

    before(function() {
        newCDLL = new CDLL();
        fullCDLL = new CDLL();
        for (let index = 0; index < 12; index++) { // Adds elements to [0,..,11] indexes
            const element = new Node(index);
            fullCDLL.addAt(element, index);           
        }
    });

    it('A Circular Double Linked List object must exist', function() {
        should.exist(newCDLL);
    });

    describe('Checking object values of the CDL List', function() {
    
        let node;

        beforeEach(function() {
            node = new Node('sample');
        });

        it('An object can be added at the head of CDL List', function() {
            newCDLL.addFirst(node).should.equal(node);
        });

        it('An object can be added at the tail of CDL List', function() {
            newCDLL.addLast(node).should.equal(node);
        });

        it("An object can be added at any index less then the number of CDLL's elements otherwise it is added at the end", function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 5; index++) { // Adds elements to [0,1,2,3,4] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            let extraNode = new Node('sample');
            anotherCDLL.addAt(extraNode, 8).should.be.an.instanceOf(Node); // Adds at the end of the List which is index of 5
            (anotherCDLL.get(8) === null).should.be.true(); 
            anotherCDLL.find('sample').should.be.an.instanceOf(Node);
            anotherCDLL.size().should.equal(6);
            anotherCDLL.get(5).getElement().should.equal('sample');
        })

        it('An object in the CDL List must be find regarding its value', function() {
            newCDLL.find('sample').should.be.an.instanceOf(Node); 
            (newCDLL.find('sample') !== null).should.be.true();
            (newCDLL.find('not_in_the_List') === null).should.eql(true);
        });

        it('An object in the CDL List must be find regarding its index of the List', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.get(7).getElement().should.equal(7);
        });

        it('Removes objects in the list regarding its VALUE', function() {
            fullCDLL.size().should.equal(12);
            fullCDLL.find(5).getElement().should.equal(5);
            fullCDLL.remove(5).getElement().should.equal(5);
            (fullCDLL.find(5) === null).should.be.true();
            fullCDLL.size().should.equal(11);
        })

        it('Removes objects in the list regarding its INDEX', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.size().should.equal(8);
            anotherCDLL.removeAt(3).getElement().should.equal(3);
            anotherCDLL.size().should.equal(7);
            (anotherCDLL.find(3) === null).should.be.true();
        })

        it('Removes FIRST item in the list', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.size().should.equal(8);
            anotherCDLL.removeFirst().getElement().should.equal(0);
            anotherCDLL.size().should.equal(7);
            (anotherCDLL.find(0) === null).should.be.true();
        })

        it('Removes LAST item in the list', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.size().should.equal(8);
            anotherCDLL.removeLast().getElement().should.equal(7);
            anotherCDLL.size().should.equal(7);
            (anotherCDLL.find(7) === null).should.be.true();
        })

        it('Finds FIRST item in the list', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.first().getElement().should.equal(0);
        })

        it('Finds LAST item in the list', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.size().should.equal(8);
            anotherCDLL.last().getElement().should.equal(7);
        })

        it('Finds items regarding its VALUE', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.size().should.equal(8);
            anotherCDLL.find(3).getElement().should.equal(3);
        })

        it('Finds items regarding its INDEX', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.size().should.equal(8);
            anotherCDLL.get(0).getElement().should.equal(0);
        })

        it('Gets the EMPTY status of the List', function() {
            let anotherCDLL = new CDLL();
            anotherCDLL.isEmpty().should.be.true();
            anotherCDLL.size().should.equal(0);
        })

        it('Gets the FULL status of the List', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 12; index++) { // Adds elements to [0,...,11] indexes, capacity of CDLL is 12
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            anotherCDLL.isFull().should.be.true();
            anotherCDLL.size().should.equal(12);
        })

        it('Gets the capacity of the List by default 12', function() {
            let anotherCDLL = new CDLL();
            anotherCDLL.ofCapacity().should.equal(12); // default capacity is 12
        })

        it('Sets the capacity of the List bby dynamically', function() {
            let anotherCDLL = new CDLL();
            anotherCDLL.ofCapacity(15).should.equal(15); 
        })

        it('Apply iterator loop over the List', function() {
            let anotherCDLL = new CDLL();
            for (let index = 0; index < 8; index++) { // Adds elements to [0,...,7] indexes
                const element = new Node(index);
                anotherCDLL.addAt(element, index);           
            }
            let param = 0;
            for (const item of anotherCDLL) {
                item.should.equal(param);
                param++;
            }
        })
    })

})