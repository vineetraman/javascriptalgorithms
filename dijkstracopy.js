class EdgeCopy {
    constructor(tovertex, distance) {
        this.tovertex = tovertex;
        this.distance = distance;
    }
}

class Node {
    constructor(vertex, distance) {
        this.vertex = vertex;
        this.distance = distance;
    }
}

class PriorityQueueCopy {
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
        if (this.priorityqueue.length > 1) {
            var newmaxpriorityelement = this.priorityqueue.pop();
            this.priorityqueue[0] = newmaxpriorityelement;
            this._sinkdown(0, newmaxpriorityelement);
        }else{
            this.priorityqueue.shift();
        }
        return dequeueelement;
    }

    _sinkdown(index, node) {
        var leftchildindex = (2 * index) + 1;
        var rightchildindex = (2 * index) + 2;
        var leftchildpriority = leftchildindex < this.priorityqueue.length ? this.priorityqueue[leftchildindex].priority : Infinity;
        var rightchildpriority = rightchildindex < this.priorityqueue.length ? this.priorityqueue[rightchildindex].priority : Infinity;
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

    isEmpty() {
        return this.priorityqueue.length < 1 ? true : false;
    }
}

class GraphCopy {
    constructor() {
        this.adjacencylist = {};
    }

    addvertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = [];
        }
    }

    removevertex(vertex) {

    }

    addedge(fromvertex, tovertex, distance) {
        if (!this.adjacencylist[fromvertex]) {
            this.addvertex(fromvertex);
        }
        if (!this.adjacencylist[tovertex]) {
            this.addvertex(tovertex);
        }
        var way1edge = new EdgeCopy(tovertex, distance);
        this.adjacencylist[fromvertex].push(way1edge);
        var way2edge = new EdgeCopy(fromvertex, distance);
        this.adjacencylist[tovertex].push(way2edge);
    }

    removeedge(fromvertex, tovertex) {

    }

    findmindistance(fromvertex, tovertex) {
        if (!this.adjacencylist[fromvertex] || !this.adjacencylist[tovertex]) {
            return Infinity;
        }
        var priorityqueue = new PriorityQueueCopy();
        priorityqueue.enqueue(fromvertex, 0);
        var distances = {};
        Object.keys(this.adjacencylist).forEach(key => {
            distances[key] = key === fromvertex ? 0 : Infinity;
        });
        var backtrace = {};
        while (!priorityqueue.isEmpty()) {
            let currentnode = priorityqueue.dequeue().vertex;
            this.adjacencylist[currentnode].forEach(neighbor => {
                let distance = distances[currentnode] + neighbor.distance;
                if (distance < distances[neighbor.tovertex]) {
                    distances[neighbor.tovertex] = distance;
                    backtrace[neighbor.tovertex] = currentnode;
                    priorityqueue.enqueue(neighbor.tovertex, neighbor.distance);
                }
            });
        }
        let path = [tovertex];
        let lastvertex = tovertex;
        while (lastvertex !== fromvertex) {
            path.unshift(backtrace[lastvertex]);
            lastvertex = backtrace[lastvertex];
        }
        return "path is " + path + " and time minumum distance is " + distances[tovertex];
    }
}


(function () {
    var a = new GraphCopy();
    a.addvertex("A");
    a.addvertex("B");
    a.addvertex("C");
    a.addvertex("D");
    a.addvertex("E");
    a.addvertex("F");
    a.addedge("A", "B", 4);
    a.addedge("A", "C", 2);
    a.addedge("C", "D", 2);
    a.addedge("D", "E", 3);
    a.addedge("D", "F", 1);
    a.addedge("E", "F", 1);
    a.addedge("B", "E", 3);
    console.log(a.adjacencylist);
    console.log(a.findmindistance("A", "E"));
})();