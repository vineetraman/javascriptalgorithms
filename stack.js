// 1
// 2 keeps pointer to 1
// 3 keeps pointer to 2
// 4 keeps pointer to 3
// 5 keeps pointer to 4
//when adding a new one, it will keep the reference to the first one in the stack and then that becomes the first
//when removing, the last pointer will simply become the one it is referring to, that the penultimate one: so LAST IN FIRST OUT

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newnode = new Node(val);
        if(!this.head){
            this.head = this.tail = newnode;
        }else{
            var temp = this.head;
            newnode.next = temp;
            this.head = newnode;
        }
        this.length++;
        return this.head;
    }
    pop() {
        if (!this.length) {
            return undefined;
        }
        var headnode = this.head;
        if (this.head === this.tail) {
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return headnode;
    }
}