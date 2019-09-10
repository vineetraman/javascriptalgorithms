function outerfunction() {
    console.log("outer function");
    function innerfunction() {
        console.log("inner function");
        console.log("this:  ");
        console.log(this);
    }
    innerfunction();
}

class ThisTest {
    constructor() { }
    method() {
        console.log("outer method");
        console.log("outer this:  ");
        console.log(this);
        var that = this;
        function innerfunction() {
            console.log("function in method");
            console.log("inner this:  ");
            console.log(this);
            console.log("inner that");
            console.log(that);
        }
        innerfunction();
        innerfunction.call(this);
    }
}

outerfunction();
var a = new ThisTest();
a.method();