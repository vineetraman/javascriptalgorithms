////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Singly linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newnode = new Node(val);
        if (this.length === 0) {
            this.head = this.tail = newnode;
        } else {
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
        }
        this.length++;
        //this.display();
        return this;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        var node = this.tail;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        //this.display();
        return node;
    }
    insert(position, val) {
        if (position > this.length || position < 0) {
            return null;
        }
        var newnode = new Node(val);
        if (position === 0) {
            if (this.length === 0) {
                this.head = this.tail = newnode;
                this.length++;
                return this;
            }
            newnode.next = this.head;
            this.head.prev = newnode;
            this.head = newnode;
            this.length++;
        } else {
            var node = this.traverse(position - 2);
            if (node) {
                newnode.next = node.next;
                newnode.prev = node;
                node.next = newnode;
                this.length++;
            } else {
                return null;
            }
        }
        //this.display();
        return this;
    }
    remove(position) {
        if (position < 0 || position >= this.length) {
            return undefined;
        }
        if (this.length === 0) {
            return undefined;
        }
        var node;
        if (position === 0 && this.length === 1) {
            node = this.head;
            this.head = this.tail = null;
            this.length--;
            return node;
        }
        if (position === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        } else {
            node = this.traverse(position);
            if (node) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
                this.length--;
            }
        }
        //this.display();
        return node;
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
        if (this.length === 0) {
            return undefined;
        }
        var node = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        //this.display();
        return node;
    }
    unshift(val) {
        return this.insert(0, val);
    }
    get(position) {
        var node = this.traverse(position);
        if (node) {
            return node;
        }
        return undefined;
    }
    set(position, val) {
        if (position >= this.length) {
            return false;
        }
        var node = this.traverse(position);
        if (node) {
            node.val = val;
            return true;
        }
        else {
            return false;
        }
    }
    reverse() {
        if (this.length === 0 || this.length === 1) {
            return this;
        }
        var node = this.head;
        this.tail = this.head;
        var prevnode = null;
        var nextnode = null;
        while (node) {
            prevnode = node.prev;
            nextnode = node.next;
            if (node === this.head) {
                node.next = null;
                node.prev = nextnode;
                this.tail = node;
            } else {
                node.next = prevnode;
                node.prev = nextnode;
            }
            node = nextnode;
        }
        this.head = prevnode.prev;
        //this.display();
        return this;
    }
    traverse(position) {
        var node;
        var i;
        if(position <= this.length / 2){
            node = this.head;
            for (i = 0; i < position; i++) {
                node = node.next;
            }
        }else{
            node = this.tail;
            for (i = this.length - 1; i > position; i--) {
                node = node.prev;
            }
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
}