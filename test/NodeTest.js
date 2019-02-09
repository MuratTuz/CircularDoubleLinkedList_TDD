
/* 
Icerdeki kullancaginiz Node tipi icin bekeldiklerimiz:
- getElement/setElement(value)
- getNext()/setNext(pNode)
- getPrevious()/setPrevious(pNode) 
*/

describe('Node - Test Section', function() {

    let newNode;

    before(function () {
        newNode = new Node();
    });

    it('A Node object must exist', function() {      
        should.exist(newNode);
    });

    describe('Checking values of Node object', function() {

        it("Node object's default value is null", function() { 
            (newNode.getElement() === null).should.equal(true);
        });

        it("Value of Node object can be set after its creation", function() {
            newNode.setElement(4);
            newNode.getElement().should.equal(4);
        });

        it("Value of Node object can be read", function() {
            let anotherNode = new Node(5);
            anotherNode.getElement().should.equal(5);
        });

    });

    describe('Checking next/previous object of the Node', function() {

        let currentNode;
        let nextNode;
        let previousNode;

        before(function () {
            currentNode = new Node();
            nextNode = new Node();
            previousNode = new Node();
        });

        it("Node object's default next object and previous object are null", function() {                           
            (currentNode.getNext() === null).should.be.true();
            (currentNode.getPrevious() === null).should.be.ok();         
        });

        it("A Node object can reach next Node", function() {
            (currentNode.getNext() === null).should.be.true();
            currentNode.setNext(nextNode);
            (currentNode.getNext() === null).should.not.be.true();
            currentNode.getNext().should.be.an.instanceOf(Node); 
        });

        it("A Node object can reach previous Node", function() {
            (currentNode.getPrevious() === null).should.be.true();
            currentNode.setPrevious(previousNode);
            (currentNode.getPrevious() === null).should.not.be.true();
            currentNode.getPrevious().should.be.an.instanceOf(Node); 
        });

    });




})