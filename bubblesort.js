//Bubble sort: push the greater ones to the end
function bubblesort(arr) {
    var noswap;                     
    var count = 0;                        //to optimize the loop if array gets sorted before reaching the end iteration
    for (var i = 0; i < arr.length; i++) {
        noswap = true;
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                count++;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noswap = false;
            }
        }
        if(noswap){
            break;
        }
    }
    console.log(count);
    return arr;
}

function custombubblesort(arr, compatator) {
    var ocomparator = compatator ? compatator : function(a,b){ return a -b; };
    var noswap;                     
    var count = 0;                        //to optimize the loop if array gets sorted before reaching the end iteration
    for (var i = 0; i < arr.length; i++) {
        noswap = true;
        for (var j = 0; j < arr.length - i && j < arr.length - 1; j++) {
            if (ocomparator(arr[j], arr[j + 1]) > 0) {
                count++;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noswap = false;
            }
        }
        if(noswap){
            break;
        }
    }
    console.log(count);
    return arr;
}