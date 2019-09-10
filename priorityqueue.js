class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.priorityqueue = [];
    }

    enqueue(value, priority) {
        var node = new Node(value, priority);
        this.priorityqueue.push(node);
        var index = this.priorityqueue.length - 1;
        this._bubbleup(index, node);
    }

    _bubbleup(index, node) {
        var parentindex = Math.floor((index - 1) / 2);
        if (parentindex > -1 && this.priorityqueue[parentindex].priority > node.priority) {
            this._swap(index, parentindex);
            this._bubbleup(parentindex, node);
        }
    }

    _swap(fromindex, toindex) {
        var temp = this.priorityqueue[fromindex];
        this.priorityqueue[fromindex] = this.priorityqueue[toindex];
        this.priorityqueue[toindex] = temp;
    }

    dequeue() {
        var dequeueelement = this.priorityqueue[0];
        var newmaxpriorityelement = this.priorityqueue.pop();
        this.priorityqueue[0] = newmaxpriorityelement;
        this._sinkdown(0, newmaxpriorityelement);
        return dequeueelement;
    }

    _sinkdown(index, node) {
        var leftchildindex = (2 * index) + 1;
        var rightchildindex = (2 * index) + 2;
        var leftchildpriority = leftchildindex < this.priorityqueue.length ? this.priorityqueue[leftchildindex].priority :Infinity;
        var rightchildpriority = rightchildindex < this.priorityqueue.length ? this.priorityqueue[rightchildindex].priority :Infinity;
        var maxpriority = Math.min(node.priority, Math.min(leftchildpriority, rightchildpriority));
        if (maxpriority === leftchildpriority) {
            this._swap(leftchildindex, index);
            return this._sinkdown(leftchildindex, node);
        } else if (maxpriority === rightchildpriority) {
            this._swap(rightchildindex, index);
            return this._sinkdown(rightchildindex, node);
        } else {
            return node;
        }
    }
}

(function priorityqueue() {
    var a = new PriorityQueue();
    a.enqueue(1, 2);
    console.log(a.priorityqueue);
    a.enqueue(2, 2);
    console.log(a.priorityqueue);
    a.enqueue(3, 1);
    console.log(a.priorityqueue);
    a.enqueue(4, 0);
    console.log(a.priorityqueue);
    a.dequeue();
    console.log(a.priorityqueue);
})();