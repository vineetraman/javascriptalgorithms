class Edge {
    constructor(tovertex, distance) {
        this.tovertex = tovertex;
        this.distance = distance;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(node) {
        this.queue.push(node);
        this.queue.sort(function (a, b) {
            // if (a.distance < b.distance) {
            //     return -1;
            // }
            // if (a.distance > b.distance) {
            //     return 1;
            // }
            // return 0;
            return a.distance - b.distance;
        });
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return (this.queue.length === 0);
    }
}

class Graph {
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
        var way1edge = new Edge(tovertex, distance);
        this.adjacencylist[fromvertex].push(way1edge);
        var way2edge = new Edge(fromvertex, distance);
        this.adjacencylist[tovertex].push(way2edge);
    }

    removeedge(fromvertex, tovertex) {

    }

    findmindistance(fromvertex, tovertex) {
        if (!this.adjacencylist[fromvertex] || !this.adjacencylist[tovertex]) {
            return Infinity;
        }
        var priorityqueue = new PriorityQueue();
        priorityqueue.enqueue({ vertex: fromvertex, distance: 0 });
        var distances = {};
        Object.keys(this.adjacencylist).forEach(key => {
            distances[key] = key === fromvertex ? 0 : Infinity;
        });
        var backtrace = {};
        while (!priorityqueue.isEmpty()) {
            let currentnode = priorityqueue.dequeue().vertex;
            this.adjacencylist[currentnode].forEach(neighbor => {
                let distance = distances[currentnode] + neighbor.distance;
                if(distance < distances[neighbor.tovertex]){
                    distances[neighbor.tovertex] = distance;
                    backtrace[neighbor.tovertex] = currentnode;
                    priorityqueue.enqueue({vertex : neighbor.tovertex, distance: neighbor.distance});
                }
            });
        }
        let path =[tovertex];
        let lastvertex = tovertex;
        while(lastvertex !== fromvertex){
            path.unshift(backtrace[lastvertex]);
            lastvertex = backtrace[lastvertex];
        }
        return "path is " + path + " and time minumum distance is " + distances[tovertex];
    }
}


(function () {
    var a = new Graph();
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