class BinarymaxheapNode {
    constructor(value, difference){
        this.value = value;
        this.difference = difference;
    }
}
class BinarymaxheapObject {
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
        if (parent && parent.difference < data.difference) {
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
        var maxvalue;
        if(leftchildindex >= this.binarymaxheaparray.length && rightchildindex >= this.binarymaxheaparray.length){
            return data;
        }else if(leftchildindex >= this.binarymaxheaparray.length){
            maxvalue = Math.max(data.difference,this.binarymaxheaparray[rightchildindex].difference);
        }
        else if(rightchildindex >= this.binarymaxheaparray.length){
            maxvalue = Math.max(data.difference,this.binarymaxheaparray[leftchildindex].difference);
        }
        else{
            maxvalue = Math.max(this.binarymaxheaparray[rightchildindex].difference, Math.max(data.difference,this.binarymaxheaparray[leftchildindex].difference));
        }
        if(data.difference === maxvalue){
            return data;
        }
        if (this.binarymaxheaparray[leftchildindex].difference === maxvalue) {
            this._swapdata(index,leftchildindex);
            this._sinkdown(leftchildindex,data);
        } else if (this.binarymaxheaparray[rightchildindex].difference === maxvalue) {
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

    getMax(){
        return this.binarymaxheaparray[0];
    }

}

(function () {
    var a = new BinarymaxheapObject();
    a.insert(new BinarymaxheapNode("a",50));
    console.log(a.binarymaxheaparray);
    a.insert(new BinarymaxheapNode("b",51));
    console.log(a.binarymaxheaparray);
    a.insert(new BinarymaxheapNode("c",24));
    console.log(a.binarymaxheaparray);
    a.insert(new BinarymaxheapNode("d",100));
    console.log(a.binarymaxheaparray);
    a.insert(new BinarymaxheapNode("e",200));
    console.log(a.binarymaxheaparray);
    a.insert(new BinarymaxheapNode("f",20));
    console.log(a.binarymaxheaparray);
    a.insert(new BinarymaxheapNode("g",4));
    console.log(a.binarymaxheaparray);
    a.extractmax();
    console.log(a.binarymaxheaparray);
})();