// 1 keeps pointer to 2
// 2 keeps pointer to 3
// 3 keeps pointer to 4
// 4 keeps pointer to 5
// 5 
//when adding a new one, the last one will keep the reference to the newly added one in the queue
//when removing, the first pointer will simply become the one it is referring to, that the second one: so FIRST IN FIRST OUT

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        var newnode = new Node(val);
        if(!this.first){
            this.first = this.last = newnode;
        }else{
            this.last.next = newnode;
            this.last = newnode;
        }
        this.length++;
        return this.first;
    }
    pop() {
        if (!this.length) {
            return undefined;
        }
        var firstnode = this.first;
        if (this.first === this.last) {
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return firstnode;
    }
}