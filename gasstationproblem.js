function canCompleteCircuit(A, B) {
    var Node = function (value, priority) {
        this.value = value;
        this.priority = priority;
    };

    var PriorityQueue = function () {

        this.priorityqueue = [];


        this.enqueue = function (value, priority) {
            var node = new Node(value, priority);
            this.priorityqueue.push(node);
            var index = this.priorityqueue.length - 1;
            this._bubbleup(index, node);
        };

        this._bubbleup = function (index, node) {
            var parentindex = Math.floor((index - 1) / 2);
            if (parentindex > -1 && this.priorityqueue[parentindex].priority < node.priority) {
                this._swap(index, parentindex);
                this._bubbleup(parentindex, node);
            }
        };

        this._swap = function (fromindex, toindex) {
            var temp = this.priorityqueue[fromindex];
            this.priorityqueue[fromindex] = this.priorityqueue[toindex];
            this.priorityqueue[toindex] = temp;
        };
        this.dequeue = function () {
            var dequeueelement = this.priorityqueue[0];
            var newmaxpriorityelement = this.priorityqueue.pop();
            this.priorityqueue[0] = newmaxpriorityelement;
            this._sinkdown(0, newmaxpriorityelement);
            return dequeueelement;
        };

        this._sinkdown = function (index, node) {
            var leftchildindex = (2 * index) + 1;
            var rightchildindex = (2 * index) + 2;
            var leftchildpriority = leftchildindex < this.priorityqueue.length ? this.priorityqueue[leftchildindex].priority : -Infinity;
            var rightchildpriority = rightchildindex < this.priorityqueue.length ? this.priorityqueue[rightchildindex].priority : -Infinity;
            var maxpriority = Math.max(node.priority, Math.max(leftchildpriority, rightchildpriority));
            if (maxpriority === leftchildpriority) {
                this._swap(leftchildindex, index);
                return this._sinkdown(leftchildindex, node);
            } else if (maxpriority === rightchildpriority) {
                this._swap(rightchildindex, index);
                return this._sinkdown(rightchildindex, node);
            } else {
                return node;
            }
        };
    };
    var pq = new PriorityQueue();
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        var diff = A[i] - B[i];
        pq.enqueue(i, diff);
        sum += diff;
    }
    if (sum >= 0) {
        return pq.dequeue().value;//pq.priorityqueue[0].value;
    } else {
        return -1;
    }

}
console.log(canCompleteCircuit([ 204, 918, 18, 17, 35, 739, 913, 14, 76, 555, 333, 535, 653, 667, 52, 987, 422, 553, 599, 765, 494, 298, 16, 285, 272, 485, 989, 627, 422, 399, 258, 959, 475, 983, 535, 699, 663, 152, 606, 406, 173, 671, 559, 594, 531, 824, 898, 884, 491, 193, 315, 652, 799, 979, 890, 916, 331, 77, 650, 996, 367, 86, 767, 542, 858, 796, 264, 64, 513, 955, 669, 694, 382, 711, 710, 962, 854, 784, 299, 606, 655, 517, 376, 764, 998, 244, 896, 725, 218, 663, 965, 660, 803, 881, 482, 505, 336, 279 ],
    [ 273, 790, 131, 367, 914, 140, 727, 41, 628, 594, 725, 289, 205, 496, 290, 743, 363, 412, 644, 232, 173, 8, 787, 673, 798, 938, 510, 832, 495, 866, 628, 184, 654, 296, 734, 587, 142, 350, 870, 583, 825, 511, 184, 770, 173, 486, 41, 681, 82, 532, 570, 71, 934, 56, 524, 432, 307, 796, 622, 640, 705, 498, 109, 519, 616, 875, 895, 244, 688, 283, 49, 946, 313, 717, 819, 427, 845, 514, 809, 422, 233, 753, 176, 35, 76, 968, 836, 876, 551, 398, 12, 151, 910, 606, 932, 580, 795, 187 ]));