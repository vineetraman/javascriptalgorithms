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
        var overtex = this.adjacencylist[vertex];
        if (overtex) {
            for (var i = 0; i < overtex.length; i++) {
                this.removeedge(vertex, overtex[i])
            }
            delete this.adjacencylist[vertex];
        }
    }

    addedge(fromvertex, tovertex) {
        if (!this.adjacencylist[fromvertex]) {
            this.addvertex(fromvertex);
        }
        if (!this.adjacencylist[tovertex]) {
            this.addvertex(tovertex);
        }
        this.adjacencylist[fromvertex].push(tovertex);
        this.adjacencylist[tovertex].push(fromvertex);
    }

    removeedge(fromvertex, tovertex) {
        if (!this.adjacencylist[fromvertex] || !this.adjacencylist[tovertex]) {
            return;
        }
        this.adjacencylist[fromvertex] = this.adjacencylist[fromvertex].filter(function (vertex) { return vertex !== tovertex; });
        this.adjacencylist[tovertex] = this.adjacencylist[tovertex].filter(function (vertex) { return vertex !== fromvertex; });
    }

    dfstraverse(start) {
        this.visitedvertex = {};
        this._dfstraverse(start);
    }

    _dfstraverse(startvertex) {
        console.log(startvertex);
        this.visitedvertex[startvertex] = true;
        var nextvertices = this.adjacencylist[startvertex];
        for (var i = 0; i < nextvertices.length; i++) {
            if (!this.visitedvertex[nextvertices[i]]) {
                this._dfstraverse(nextvertices[i]);
            }
        }
    }

    bfstraverser(start) {
        this.knownvertices = {};
        this.vertices = [start];
        this.knownvertices[start] = true;
        this._bfstraverse();
    }

    _bfstraverse() {
        if (this.vertices.length > 0) {
            var vertex = this.vertices.shift();
            console.log(vertex);
            var nextvertices = this.adjacencylist[vertex];
            for (var i = 0; i < nextvertices.length; i++) {
                if (!this.knownvertices[nextvertices[i]]) {
                    this.knownvertices[nextvertices[i]] = true;
                    this.vertices.push(nextvertices[i]);
                }
            }
            this._bfstraverse();
        }
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
    a.addedge("A", "B");
    a.addedge("A", "C");
    a.addedge("B", "D");
    a.addedge("D", "E");
    a.addedge("D", "F");
    a.addedge("E", "F");
    a.addedge("C", "E");
    console.log(a.adjacencylist);
    console.log("DFS");
    a.dfstraverse("A");
    console.log("BFS");
    a.bfstraverser("A");
    a.removevertex("F");
    console.log(a.adjacencylist);
})();