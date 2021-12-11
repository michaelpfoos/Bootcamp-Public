class SLLNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert methods here.
    //Accept a value and create a new node.  Assign it to the list head and return a pointer to the new head node.
    addFront(value) {
        //insert code here.
        if (this.head === null) {
            this.head = new SLLNode(value);            
        }
        //apparently this else is redundent and not really needed.  This is already in the program.  Learned this reading the solution code.
        else {
            let lastHead = this.head; //store the current head which is the current entry point in memory.
            this.head = new SLLNode(value); //create a new node with the new head.
            this.head.next = lastHead; //assign the previous head to the next node of the new head.  
        }
        this.size++ //keeps track of the size of the choo choo train.
    }

    //remove the head node and return the new list head node.  If the list is empty return null
    removeFront() {
        //insert code here     
        if (this.head.next === null) { //if next is null then there it doesn't matter if there is a value in the head, just return null.
            this.head = null;
            this.size = 0; //In this case size would be reduced to 0.  
            return this.head;
        }
        else {            
            let newHead = this.head.next;
            console.log(this.head.next);            
            this.head = newHead;
            this.next = newHead.next;
        }
        
    }

    //return the value at the head of hte list.  If empty return null
    front() {
        //insert code here.
        if (this.head === null) {            
            return null;
        }
        else {
            console.log(this.head.val);
            return this.head.val;
        }
    }

    displayValues() {
        //code here
        console.log('All the values!!!');
        let currNode = this.head;        
        while(currNode !== null) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }
}

var x = new SLL;
x.addFront(15);
x.addFront(20);
x.addFront(25);
//console.log(x);
//x.displayValues();
x.removeFront();
x.displayValues();
x.front();

