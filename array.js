function minsteptomakearraydivbyfour(arr) {
    //var modarray = Array.apply(null, { length: 4 }).map(function () { return []; });
    var modarray = Array.apply(null, { length: 4 }).map(function () { return 0; });
    var mod;
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        mod = arr[i] % 4;
        sum += mod;
        modarray[mod]++;
    }

    // If sum is not divisible by 4, not possible 
    if (sum % 4 != 0) {
        return -1;
    }
    else {

        // Find minimum of modarray[1] and modarray[3] 
        // and increment the count by the minimum 
        if (modarray[1] > modarray[3]) {
            count += modarray[3];
        }
        else {
            count += modarray[1];
        }
        // Update the values in modarray array. 
        modarray[1] -= count;
        modarray[3] -= count;

        // Use modarray[2] to pair remaining elements. 
        modarray[2] += modarray[1] / 2;
        modarray[2] += modarray[3] / 2;

        // incrememnt count to half of remaining 
        // modarray[1] or modarray of [3] elements. 
        count += modarray[1] / 2;
        count += modarray[3] / 2;

        // increment count by half of modarray[2] 
        count += modarray[2] / 2;

        return count;
    }
}

function findclosestknumbers(unsortedarr, num, k) {
    var arr = [];
    //var count = 0;
    for (var i = 0; i < k; i++) {
        arr.push(unsortedarr[i]);
    }
    for (i; i < unsortedarr.length; i++) {
        //count++;
        if (unsortedarr[i] !== num) {
            var j = 0;
            while (j < k) {
                if (Math.abs(unsortedarr[i] - num) < Math.abs(num - arr[j])) {
                    arr[j] = unsortedarr[i];
                    //count++;
                    break;
                }
                j++;
            }
        }
    }
    //console.log(count);
    return arr;
}
//works better with respect to result
function findclosestknumbersusingheap(unsortedarr, num, k) {
    var binaryHeap = new BinarymaxheapObject();
    for (var i = 0; i < k; i++) {
        binaryHeap.insert(new BinarymaxheapNode(unsortedarr[i], Math.abs(unsortedarr[i] - num)));
    }
    for (i; i < unsortedarr.length; i++) {
        var difference = Math.abs(unsortedarr[i] - num);
        if (difference < binaryHeap.getMax().value) {
            binaryHeap.extractmax();
            binaryHeap.insert(new BinarymaxheapNode(unsortedarr[i], difference));
        }
    }
    var result = [];
    for (i = 0; i < binaryHeap.binarymaxheaparray.length; i++) {
        result.push(binaryHeap.binarymaxheaparray[i].value);
    }
    return result;
}

function findclosestknumbersmain() {
    /* INTERESTING FACT:  
    FOR THE FIRST 2 EXECUTION, THE HEAP SOLUTION TAKES MORE TIME BUT THEN SUBSEQUENTLY IT BECOMES MUCH FASTER.
    BECAUSE THEN THE JAVASCRIPT ENGINE (V8 HERE) CONSIDER IT AS A HOT CODE AND THEN THE COMPILED VERSION IS WORKS WAY FASTER!!!!!!!*/
    var a = Array.apply(null, { length: 10000 }).map(Math.random);
    var num = a[5000];
    var t1 = performance.now();
    var r1 = findclosestknumbers(a, num, 100);
    var t2 = performance.now();
    console.log("first time is " + (t2 - t1));
    var t3 = performance.now();
    var r2 = findclosestknumbersusingheap(a, num, 100);
    var t4 = performance.now();
    console.log("second time is " + (t4 - t2));
}

function countZeroes(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0] === 0 ? 1 : 0;
    }
    // if(arr.length === 2){
    //     return (countZeroes([arr[0]]) + countZeroes([arr[1]]));
    // }
    var mid = Math.floor((arr.length - 1) / 2);
    return (countZeroes(arr.slice(0, mid + 1)) + countZeroes(arr.slice(mid + 1, arr.length)));
}

//4   5   6   1   2   3
function findindexofminvalueinrotatedarray(arr) {
    return _findindexofminvalueinrotatedarray(arr, 0, arr.length - 1);
}
function _findindexofminvalueinrotatedarray(arr, start, end) {
    if (arr[start] < arr[end]) {
        return start;
    }
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
        return mid;
    }
    if (arr[mid] <= arr[end]) {
        return _findindexofminvalueinrotatedarray(arr, start, mid - 1);
    }
    if (arr[mid] >= arr[start]) {
        return _findindexofminvalueinrotatedarray(arr, mid + 1, end);
    }
    return -1;
}

// 8    9   0   1   2   3   4   5   6   7  : find 9
function findRotatedIndex(arr, num) {
    return _findindexinrotatedarray(arr, 0, arr.length - 1, num);
}
function _findindexinrotatedarray(arr, start, end, num) {
    if (arr[start] === num) {
        return start;
    }
    if (arr[end] === num) {
        return end;
    }
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
        return mid;
    }
    if (arr[start] < arr[mid] && num < arr[mid]) {
        return _findindexinrotatedarray(arr, start + 1, mid - 1, num);
    }
    if (arr[start] > arr[mid] && (num > arr[start] || num < arr[mid])) {
        return _findindexinrotatedarray(arr, start + 1, mid - 1, num);
    }
    if (arr[mid] < arr[end] && num < arr[end]) {
        return _findindexinrotatedarray(arr, mid + 1, end - 1, num);
    }
    if (arr[mid] > arr[end] && (num > arr[mid] || num < arr[end])) {
        return _findindexinrotatedarray(arr, mid + 1, end - 1, num);
    }
    return -1;
}

function findduplicatesinarray(arr) {
    if (!arr || arr.length <= 1) {
        return null;
    }
    var duplicatevalue = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                duplicatevalue.push(arr[i]);
            }
        }
    }
    return duplicatevalue ? duplicatevalue : null;
}

//faster
function findduplicatesinarray2(arr) {
    if (!arr || arr.length <= 1) {
        return null;
    }
    var duplicatevalue = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            duplicatevalue.push(arr[i]);
        } else {
            obj[arr[i]] = true;
        }
    }
    return duplicatevalue ? duplicatevalue : null;
}




//Return the highest product possible by multiplying 3 numbers from the array.
function maxp3(A) {
    A.sort(function (a, b) {
        return a - b;
    });

    var bottom = A[0] * A[1] * A[A.length - 1];
    var top = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

    return Math.max(bottom, top);
}

/* function minhoppings(ArrSeat) {
    var arr = [];
    var prevarr = [];
    for (var i = 0; i < ArrSeat.length; i++) {
        if (ArrSeat[i]) {
            arr.push(i);
        } else {
            if (prevarr.length < arr.length) {
                prevarr = [].concat(arr);
            }
            arr = [];
        }
    }
    if (prevarr.length < arr.length) {
        prevarr = [].concat(arr);
    }
    var ostart, start;
    ostart = start = prevarr[0] - 1;
    var oend, end;
    oend = end = prevarr[prevarr.length - 1] + 1;
    var count = 0;
    while(start > -1 || end < ArrSeat.length - 1){
        if(ArrSeat[start]){
            count += ostart - start;
            prevarr.unshift(start);
            ostart--;
        }
        if(ArrSeat[end]){
            count += end - oend;
            prevarr.push(ArrSeat[start]);
            oend++;
        }
        start--;
        end++;
    }
    return count;
} */
/* function minhoppings(ArrSeat) {
    var arr = [];
    var prevarr = [];
    for (var i = 0; i < ArrSeat.length; i++) {
        if (ArrSeat[i] === "x") {
            arr.push(i);
        } else {
            if (prevarr.length < arr.length) {
                prevarr = [].concat(arr);
            }
            arr = [];
        }
    }
    if (prevarr.length < arr.length) {
        prevarr = [].concat(arr);
    }
    var ostart, start;
    ostart = start = prevarr[0] - 1;
    var oend, end;
    oend = end = prevarr[prevarr.length - 1] + 1;
    var count = 0;
    while(start > -1 || end < ArrSeat.length){
        if(ArrSeat[start] === "x"){
            count += ostart - start;
            prevarr.unshift(start);
            ostart--;
        }
        if(ArrSeat[end] === "x"){
            count += end - oend;
            prevarr.push(ArrSeat[start]);
            oend++;
        }
        start--;
        end++;
    }
    return count;
} */

function minhoppings(ArrSeat) {
    var arr = [];
    var prevarr = [];
    for (var i = 0; i < ArrSeat.length; i++) {
        if (ArrSeat[i] === "x") {
            arr.push(i);
        }
    }
    var median;
    var half = Math.floor(arr.length / 2);

    if (arr.length % 2) {
        median = arr[half];
    } else {
        median = Math.floor((arr[half - 1] + arr[half]) / 2.0);
    }
    var ostart, start;
    ostart = start = ArrSeat[median] === "x" ? median - 1 : median;
    var oend, end;
    oend = end = median + 1;
    var count = 0;
    while (start > -1 || end < ArrSeat.length) {
        if (ArrSeat[start] === "x") {
            count += ostart - start;
            //prevarr.unshift(start);
            ostart--;
        }
        if (ArrSeat[end] === "x") {
            count += end - oend;
            //prevarr.push(ArrSeat[start]);
            oend++;
        }
        start--;
        end++;
    }
    return count;
}

//https://www.interviewbit.com/problems/bulbs/

function bulbs(arr) {
    var count = 0;
    if (arr && arr.length > 0) {
        if (arr.length === 1) {
            count = arr[0] === 0 ? 1 : 0;
            return count;
        }
        var checkvalue = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === checkvalue) {
                arr[i] = 1;
                count++;
                checkvalue = checkvalue === 0 ? 1 : 0;
            }
        }
    }
    return count;
}

//unsorted array, continuous subarray
function findsubarrayforgivensum(arr, givensum){
    //var subarr = [];
    var sum = 0;
    var i = 0;
    var j = 0;
    while(i < arr.length){
        subarr.push(arr[i]);
        sum += arr[i];
        if(sum === givensum){
            return arr.slice(j,i + 1);//return subarr;
        }
        if(sum > givensum ){
            //sum -= subarr.shift();
            sum -= arr[j];
            j++;
        }
        i++;
    }
    return -1;
}

//Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
function counttriplets(arr){
    if(!arr || arr.length < 1){
        return -1;
    }
    arr.sort(function(a,b){
        return b - a;
    });
    var i = 0;
    var count = 0;
    var answer = [];
    for(i;i < arr.length;i++){
        var j = i + 1, k = arr.length - 1;
        var sum = 0;
        while(j < k){
            sum = arr[j] + arr[k];
            if(sum === arr[i]){
                answer.push([arr[i],arr[j],arr[k]]);
                count++;
                break;
            }
            if(sum > arr[i]){
                j++;
                //sum -= arr[j];
            }
            if(sum < arr[i]){
                k--;
                //sum -= arr[k];
            }
        }
    }
    console.log(answer);
    return count;
}

//kadane's algorithm
//Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
function maxsuminarray(arr){
    var localmax = 0;
    var globalmax = -Infinity;
    for(var i = 0; i < arr.length; i++){
        localmax = Math.max(arr[i], localmax + arr[i]);
        if(localmax > globalmax){
            globalmax = localmax;
        }
    }
    return globalmax;
}

function subarraywithmaxsum(arr){
    var localmax = -Infinity;
    var globalmax = -Infinity;
    var localstart = 0;
    var globalstart;
    var end = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > localmax + arr[i]){
            localmax = arr[i];
            localstart = i;
        }else{
            localmax += arr[i];
        }
        if(localmax > globalmax){
            globalstart = localstart;
            globalmax = localmax;
            end = i;
        }
    }
    console.log(arr.slice(globalstart, end + 1));
}

(function () {
    var a = Array.apply(null, { length: 10000 }).map(Math.random);
    var t1 = performance.now();
    findduplicatesinarray(a);
    var t2 = performance.now();
    console.log(t2 - t1);
    var t3 = performance.now();
    findduplicatesinarray2(a);
    var t4 = performance.now();
    console.log(t4 - t3);
})();