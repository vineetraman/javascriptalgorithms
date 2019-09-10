class Binarymaxheap {
    constructor() {
        this.binarymaxheaparray = [];
    }

    insert(data) {
        this.binarymaxheaparray.push(data);
        this.bubbleup(this.binarymaxheaparray.length - 1, data);
    }

    bubbleup(index, data) {
        var parentindex = Math.floor((index - 1) / 2);
        var parent = this.binarymaxheaparray[parentindex];
        if (parent && parent < data) {
            // var temp = this.binarymaxheaparray[parentindex];
            // this.binarymaxheaparray[parentindex] = data;
            // this.binarymaxheaparray[index] = temp;
            this._swapdata(index, parentindex);
            this.bubbleup(parentindex, data);
        }
    }

    extractmax() {
        var length = this.binarymaxheaparray.length;
        if(length <= 0){
            return;
        }
        var last = this.binarymaxheaparray[length - 1];
        this.binarymaxheaparray.pop();
        var max = this.binarymaxheaparray[0];
        this.binarymaxheaparray[0] = last;
        this._sinkdown(0, last);
        return max;
    }

    _sinkdown(index, data) {
        var leftchildindex = 2 * index + 1;
        var rightchildindex = 2 * index + 2;
        if(leftchildindex >= this.binarymaxheaparray && rightchildindex >= this.binarymaxheaparray.length){
            return data;
        }
        var maxvalue = Math.max(this.binarymaxheaparray[rightchildindex], Math.max(data,this.binarymaxheaparray[leftchildindex]));
        if (this.binarymaxheaparray[leftchildindex] === maxvalue) {
            this._swapdata(index,leftchildindex);
            this._sinkdown(leftchildindex,data);
        } else if (this.binarymaxheaparray[rightchildindex] === maxvalue) {
            this._swapdata(index,rightchildindex);
            this._sinkdown(rightchildindex,data);
        } else {
            return data;
        }
    }

    _swapdata(fromindex, toindex) {
        var temp = this.binarymaxheaparray[fromindex];
        this.binarymaxheaparray[fromindex] = this.binarymaxheaparray[toindex];
        this.binarymaxheaparray[toindex] = temp;
    }

}

(function () {
    var a = new Binarymaxheap();
    a.insert(50);
    console.log(a.binarymaxheaparray);
    a.insert(51);
    console.log(a.binarymaxheaparray);
    a.insert(24);
    console.log(a.binarymaxheaparray);
    a.insert(100);
    console.log(a.binarymaxheaparray);
    a.insert(200);
    console.log(a.binarymaxheaparray);
    a.insert(20);
    console.log(a.binarymaxheaparray);
    a.insert(4);
    console.log(a.binarymaxheaparray);
    a.extractmax();
    console.log(a.binarymaxheaparray);
})();