////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Singly linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newnode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newnode;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++;
        //this.display();
        return this;
    }
    pop() {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node.next !== this.tail) {
            node = node.next;
        }
        var delnode = node.next;
        node.next = null;
        this.tail = node;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        //this.display();
        return delnode;
    }
    insert(position, val) {
        if (position > this.length || position < 0) {
            return false;
        }
        var newnode = new Node(val);
        if (position === 0) {
            newnode.next = this.head;
            this.head = newnode;
        } else {
            var node = this.traverse(position - 1);
            newnode.next = node.next;
            node.next = newnode;
        }
        if(position === this.length){
            this.tail = newnode;
        }
        this.length++;
        //this.display();
        return true;
    }
    delete(position) {
        if (position > this.length || position < 0) {
            return;
        }
        var delnode;
        if (position === 0) {
            delnode = this.head = this.head.next;
        } else {
            var node = this.traverse(position - 1);
            delnode = node.next;
            node.next = delnode.next;
        }
        //delete delnode;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        //this.display();
        return delnode;
    }
    search(val) {
        var node = this.head;
        var count = 1;
        while (node && node.val !== val) {
            node = node.next;
            count++;
        }
        if (node) {
            console.log("found at position " + count);
            return node;
        } else {
            console.log("not found!!");
            return null;
        }
    }
    sort() {

    }
    shift() {
        if (!this.head) {
            return null;
        }
        if (this.length === 0) {
            this.head = this.tail = null;
            //this.display();
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }
    unshift(val) {
        this.insert(0, val);
    }
    get(position) {
        return this.traverse(position).val;
    }
    set(position, val) {
        var node = this.traverse(position);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }
    reverse(fromnode) {
        if (this.length <= 1) {
            return this;
        }
        var node = fromnode ? fromnode : this.head;
        this.tail = node;
        var nextnode = node.next;
        var prevnode = null;
        //for(var i = 0; i < this.length; i++){
        while (node) {
            nextnode = node.next;
            if (node === this.head) {
                node.next = null;
                this.tail = node;
            } else {
                node.next = prevnode;
            }
            prevnode = node;
            node = nextnode;
        }
        this.head = prevnode;
        //this.display();
        return this;
    }
    traverse(position) {
        if(position < 0 || position > this.length){
            return null;
        }
        var node = this.head;
        for (var i = 0; i < position; i++) {
            node = node.next;
        }
        if (node) {
            return node;
        }
        return null;
    }
    display() {
        console.log("length : " + this.length);
        console.log(this);
        var node = this.head;
        for (var i = 1; i <= this.length; i++) {
            console.log(node.val);
            node = node.next;
        }
    }
    reverserfrom(fromindex){
        var headnode = this.head;
        var node = this.traverse(fromindex - 1);
        this.reverse(node.next);
        node.next = null;
        this.tail.next = headnode;
        this.tail = node;
        return this;
    }
    rotatebyindex(fromindex){
        if(fromindex < 0 || fromindex > this.length){
            return null;
        }
        if(fromindex === 0){
            return this;
        }
        var headnode = this.head;
        var node = this.traverse(fromindex - 1);
        this.head = node.next;
        node.next = null;
        this.tail.next = headnode;
        this.tail = node;
        return this;
    }
    rotate(num){
        return this.rotatebyindex(num - 1);
    }
}
