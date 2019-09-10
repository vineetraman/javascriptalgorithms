// function Circle() {
//     this.a = 2;
//     this.b = 3;
//     console.log(this);
// }
// var x = Circle();
// var y = new Circle();
// console.log(y);
// Circle.prototype.c = 4;
// console.log(Circle);
// console.log(y.c);
// var z = new Circle();
// Circle.d = 5;
// console.log(Circle);
// console.log(z.d);


// // output:
// // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// // Circle {a: 2, b: 3}
// // Circle {a: 2, b: 3}
// // ƒ Circle() {
// //     this.a = 2;
// //     this.b = 3;
// //     console.log(this);
// // }
// // 4
// // Circle {a: 2, b: 3}
// // ƒ Circle() {
// //     this.a = 2;
// //     this.b = 3;
// //     console.log(this);
// // }
// // undefined



// function a(){this.b = "b"};
// var c = new a();
// c.c = "c";
// console.log(c);
// console.log(c.hasOwnProperty("c"));   //true

//inheritence
// var a = {b: "b"};
// var c = Object.create(a, {x:{c:"c"}});
// console.log(c);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//frequency counter pattern: exercise
//try1: not so good
// function frequencypattern(arr1, arr2){
//     var indexvisited = [];
//     var match;
//     var index;
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(var i = 0; i < arr1.length; i++){
//         index = arr2.indexOf(arr1[i]*arr1[i]); //bad: bcoz indexof implementation is searching of a value in index and that has O(n) complexity. so eventually its O(n)*O(n)
//         if(index > -1 && indexvisited.indexOf(index) < 0){
//             indexvisited.push(index);
//             match = true;
//         } else{
//             match = false;
//         }
//     } 
//     return match;
// };

// //try2: the better one
// function frequencypattern(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     var arr1frequency = {};
//     var arr2frequency = {};
//     for(var i = 0; i < arr1.length; i++){
//         arr1frequency[arr1[i]] = ( arr1frequency[arr1[i]] || 0) + 1;
//     }
//     for(i = 0; i < arr2.length; i++){
//         arr2frequency[arr2[i]] = ( arr2frequency[arr2[i]] || 0) + 1;
//     }
//     for( var obj in arr1frequency){
//         var obj2 = obj * obj;
//         if(!(obj2 in arr2frequency)){   //if(!arr2frequency[obj2]){}
//             return false;
//         }
//         if(arr1frequency[obj] !== arr2frequency[obj2]){
//             return false;
//         }
//     }
//     console.log(arr1frequency);
//     console.log(arr2frequency);
//     return true;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ANAGRAMS: ICEMAN = CINEMA 
//assumptions:
//same letter type, caps or small
//no spaces
//no special chars
// function anagramcheck(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     var str1frequency = {};
//     var str2frequency = {};
//     for(var i = 0; i < str1.length; i++){
//         str1frequency[str1[i]] = ( str1frequency[str1[i]] || 0) + 1;
//     }
//     for(i = 0; i < str2.length; i++){
//         str2frequency[str2[i]] = ( str2frequency[str2[i]] || 0) + 1;
//     }
//     for(var obj in str1frequency){
//         if(!(obj in str2frequency)){   //if(!str2frequency[obj]){}
//             return false;
//         }
//         if(str1frequency[obj] !== str2frequency[obj]){
//             return false;
//         }
//     }
//     console.log(str1frequency);
//     console.log(str2frequency);
//     return true;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////object creation
////here d is created via a constructor function ( a function that creates properties on the object being created). so the function is there as part of its constructor
////a and b are objects that are created first and then function is used to create properties for them. hence their constructor is native object one
// var a = {};
// var b = new Object();
// function c(){
//     this.prop1 = "prop1";
//     this.prop2 = "prop2";
// };
// var d = new c();        // d.constructor = ƒ c(){
//                         //     this.prop1 = "prop1";
//                         //     this.prop2 = "prop2";
//                         // }
// console.log(d);         // c {prop1: "prop1", prop2: "prop2"}
// c.apply(a);             // a.constructor = ƒ Object() { [native code] }
// console.log(a);         // {prop1: "prop1", prop2: "prop2"}
// c.apply(b);             // b.constructor = ƒ Object() { [native code] }
// console.log(b);         //{prop1: "prop1", prop2: "prop2"}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////prototyping
////example1
// function func(){
//     this.prop1 = "prop1";
//     this.prop2 = "prop2";
// }
// var obj1 = new func();
// console.log(obj1);
// func.prototype.prop3 = "prop3";
// var obj2 = new func();
// console.log(obj2);
//
////example2
// function Animal(name) {
//     this.name = name;
//   }
//   Animal.prototype.age=1;

//   function Cat(name, color) {
//     Animal.call(this, name);
//     this.color = color;
//   }
//   Cat.prototype = new Animal(null);

//   var catC = new Cat("Fluffy", "White");
//   console.log(catC);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////constructor function with additional property
// function consfunc(prop1, prop2){
// 	this.prop1 = prop1;
// 	this.prop2 = prop2;
// }
// consfunc.copy = function(obj){      // adding a property to the function, just like any other existing properties of it like arguments etc
//     return new consfunc(obj.prop1, obj.prop2);
// }
// var a = new consfunc("a","b");      // {prop1: "a", prop2: "b"}
// var b = consfunc.copy(a);           // {prop1: "a", prop2: "b"}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////array methods
////1. array.from
//console.log(Array.from([1,2,3], function(x){return x * x}));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////Multiple pointer pattern: input is a sorted array
// function check0pair(arr) {
//     if(arr[0] > -1){
//         console.log("positive elements");
//         return;
//     }
//     var i = 0;
//     var j = arr.length - 1;
//     var sum;
//     while (i < j) {
//         sum = arr[i] + arr[j];
//         if (sum === 0) {
//             return [arr[i], arr[j]];
//         } else if (sum < 0) {
//             i++;
//         } else {
//             j--;
//         }
//     }
// };
// console.log(check0pair([-4, -3, -2, -1,0,1,2,3,4]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////use above patter to find unique numbers from a sorted array
// function findunique(arr) {
//     var result = [];
//     var i = 0,
//         j = 1;
//     while (i < arr.length) {
//         if (arr[j] !== arr[i]) {
//             result.push(arr[i]);
//             i = j;
//         }
//         j++;
//     }
//     return result.length;
// }
// console.log(findunique([-1,-1,-2,1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6,7]));

// //better one: 100:98
// function findunique(arr) {
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i]!== arr[j]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1;
// }
// console.log(findunique([-1,-1,-2,1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6,7]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////find max sum of n number of elements in an array
// function findmaxsum(arr,n){
//     var sum = 0;
//     for(var i = 0; i < n; i++){
//         sum = sum + arr[i];
//     }
//     var tempsum = sum;
//     for(i, j = 0; i < arr.length; i++, j++){
//         tempsum = tempsum - arr[j] + arr[i];
//         console.log(tempsum, sum);
//         if(tempsum > sum ){
//             sum = tempsum;
//         }
//     }
//     return sum;
// };
// console.log(findmaxsum([2,6,9,2,1,8,5,6,3],3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Binary search
// function binaryearch(sortedarr, num){
//     if(!sortedarr || sortedarr.length === 0){
//         return "array with elements not found";
//     }
//     var start = 0;
//     var end = sortedarr.length - 1;
//     var mid;
//     if(sortedarr[start] === num){
//         return "position 0";
//     }
//     if(sortedarr[end] === num){
//         return ("position " + end);
//     }
//     while(start < end){
//         mid = Math.floor((end + start)/2);
//         if(sortedarr[mid] === num){
//             return ("position " + mid);
//         }else if(sortedarr[mid] < num){
//             start = mid;
//         }else{
//             end = mid;
//         }
//     }
//     return "not found";
// }
// console.log(binaryearch([1,2,3,4,5,6,7,8,9], 3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////substr search, element in same order
// function isSubsequence(substr, mainstr) {
//     if(substr.length > mainstr.length){
//         return false;
//     }
//     var j = 0;
//     var matchcount = 0;
//     for(var i = 0; i < substr.length; i++, j++){
//         for(j; j < mainstr.length; j++){
//             if(substr[i] === mainstr[j]){
//                 matchcount++;
//                 break;
//             }
//         }
//     }
//     if(substr.length === matchcount){
//         return true;
//     }
//     return false;
//   }
//   console.log(isSubsequence("abc","abcd"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Implement promise.all
// function promiseall(n) {
//     for (var i = 1; i <= n; i++) {
//         new Promise(function (resolve, reject) {
//             var j = i;
//             setTimeout(function () {
//                 resolve(j);
//             }, (j * 1000));
//         })
//         .then(function(count){
//             if(count === n){
//                 console.log("promises finished");
//             }
//         })
//         .catch(function(){});
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////find min subarray with sum >= a given value
// function minSubArrayLen(arr, num){
//     var sum;
//     var j;
//     var m = arr.length;
//     if(m <= 0){
//         return -1;
//     }
//     var found = false;
//     for(var i= 0; i < arr.length; i++){
//         sum = 0;
//         for(j = i; j< arr.length; j++){
//            sum += arr[j];
//            if((j - i + 1) < m ){
//             if(sum >= num) {
//                 m = j - i + 1;
//                 found = true;
//                 break;
//             }
//            }else{
//                break;
//            }
//         }
//     }
//     return found ? m : -1;
// }

//better one with complexity O(n)
// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;

//     while (start < nums.length) {
//       // if current window doesn't add up to the given sum then 
//           // move the window to right
//       if(total < sum && end < nums.length){
//         total += nums[end];
//               end++;
//       }
//       // if current window adds up to at least the sum given then
//           // we can shrink the window 
//       else if(total >= sum){
//         minLen = Math.min(minLen, end-start);
//               total -= nums[start];
//               start++;
//       } 
//       // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//       else {
//         break;
//       }
//     }

//     return minLen === Infinity ? 0 : minLen;
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////find longest substring with unique characters
// function findLongestSubstring(mainstr){
//     var substrlength = -Infinity;
//     var start = 0;
//     var charseen = {};
//     for(var i = 0; i < mainstr.length; i++){
//         if(charseen[mainstr[i]]){
//             start = Math.max(start, charseen[mainstr[i]]);
//         }   
//         substrlength = Math.max(substrlength, i - start + 1);

//         charseen[mainstr[i]] = i + 1;
//     }
//     return substrlength;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//factorial
// function factorial(num){
// if(num === 1 || num === 0){
//     return 1;
// }else{
//     return num * factorial(num - 1);
// }
// }

////power
// function power(n,p){
//     if(p === 0){
//         return 1;
//     }
//     return n*power(n, p - 1);
// }

////array elements product
// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

////fibonacci
// function fib(n){
//     if( n === 1 || n === 2){
//         return 1;
//     }
//     return (fib(n-1) + fib(n-2));
//   }

////singleton
// var printer = (function () {
//     var printerInstance;

//     function create() {
//         function print() {
//             // underlying printer mechanics
//         }

//         function turnOn() {
//             // warm up
//             // check for paper
//         }
//         return {
//             // public + private states and behaviors
//             print: print,
//             turnOn: turnOn
//         };
//     }
//     return {
//         getInstance: function () {
//             if (!printerInstance) {
//                 printerInstance = create();
//             }
//             return printerInstance;
//         }
//     };

//     function Singleton() {  //why this method??
//         if (!printerInstance) {
//             printerInstance = intialize();
//         }
//     };
// })();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////binary search
// function binarySearch(arr, num){
//     var start = 0;
//     var end = arr.length - 1;
//     var mid;
//     while(start < end){
//         mid = Math.floor((end + start) / 2)
//         if(arr[mid] === num){
//             return mid;
//         }else if(arr[mid] > num){
//             end = mid - 1;
//         }else{
//             start = mid + 1;
//         }
//     }
//     return -1;
//   }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////naive string search
// function searchsubstring(mainstr, substr) {
//     var count = 0;
//     var j = 0;
//     var substrlength = substr.length;
//     for (var i = 0; i < mainstr.length; i++) {
//         if (mainstr[i] === substr[j]) {
//             j++;
//             if (j === substrlength) {
//                 count++;
//             }
//         } else {
//             if (j > 0) {
//                 j = 0;
//                 i--;
//             }
//         }
//     }
//     return count;
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Bubble sort: push the greater ones to the end
// function bubblesort(arr) {
//     var noswap;                     
//     var count = 0;                        //to optimize the loop if array gets sorted before reaching the end iteration
//     for (var i = 0; i < arr.length; i++) {
//         noswap = true;
//         for (var j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 count++;
//                 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//                 noswap = false;
//             }
//         }
//         if(noswap){
//             break;
//         }
//     }
//     console.log(count);
//     return arr;
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Selection sort, less number of swaps than bubblesort (random set of data): start from the beginning anf find the lowest till from the remainging array and swap 
// function selectionsort(arr) {
//     var lowest;
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         lowest = arr[i];
//         for(var j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[i] && arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(lowest !== Infinity){
//             count++;
//             [arr[i],arr[lowest]] = [arr[lowest], arr[i]];
//         }
//     }
//     console.log(count);
//     return arr;
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////insertion sort: pick the number and insert it as the right sorted place (by pushing the array content to right)
// function insertionsort(arr){
//     for(var i = 1; i < arr.length; i++){
//         var num = arr[i];
//         for(var j = i - 1; j > -1 && arr[j] > num; j--){
//             arr[j + 1 ] = arr[j];
//         }
//         arr[j + 1] = num;
//         console.log(arr);
//     }
//     return arr;
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*var funccount = 0;
var loopcount = 0;

var funccount2 = 0;
var loopcount2 = 0;
//better one
function mergesort(arr) {
    funccount++;
    //console.log(arr);
    if (arr.length === 1 || arr.length === 0) {
        return arr;
    } else {
        var mid = Math.floor(arr.length / 2);
        var arr1 = mergesort(arr.slice(0, mid));
        var arr2 = mergesort(arr.slice(mid, arr.length));
        var i = 0;
        var j = 0;
        var newarray = [];
        while (i < arr1.length || j < arr2.length) {
            loopcount++;
            if (i === arr1.length) {
                newarray = newarray.concat(arr2.slice(j, arr2.length));
                break;
            } else if (j === arr2.length) {
                newarray = newarray.concat(arr1.slice(i, arr1.length));
                break;
            } else if (arr1[i] <= arr2[j]) {
                newarray.push(arr1[i]);
                i++;
            } else {
                newarray.push(arr2[j]);
                j++;
            }
        }
        return newarray;
    }

}
var mainfunction = function (arr) {
    var t0 = performance.now();
    mergesort(arr);
    var t1 = performance.now();
    console.log("mergesort took " + (t1 - t0) + " milliseconds.");
    console.log(funccount);
    console.log(loopcount);
    var t3 = performance.now();
    mergesort2(arr);
    var t4 = performance.now();
    console.log("mergesort took " + (t4 - t3) + " milliseconds.");
    console.log(funccount2);
    console.log(loopcount2);
}

function merge(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        loopcount2++;
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length){
        sortedArr.push(leftArr.shift());
        loopcount2++;
    }
    while (rightArr.length){
        sortedArr.push(rightArr.shift());
        loopcount2++;
    }
    return sortedArr;
}

function mergesort2(arr) {
    funccount2++;
    if (arr.length < 2) {
        return arr;
    } else {
        var midpoint = parseInt(arr.length / 2);
        var leftArr = arr.slice(0, midpoint);
        var rightArr = arr.slice(midpoint, arr.length);
        return merge(mergesort2(leftArr), mergesort2(rightArr));
    }
}*/

// //output ( remember: log2(100000) = 16.609640474437) )
// var a = Array.apply(null, {length : 100000}).map(Math.random)
// mainfunction(a)
// index.js:637 mergesort took 80.38499999747728 milliseconds.
// index.js:638 199999
// index.js:639 1636423
// index.js:643 mergesort took 15124.569999999949 milliseconds.
// index.js:644 199999
// index.js:645 1668928

/* Note: ( IMPORTANT)
The time complexity and running time are two different things altogether.
Time complexity is a complete theoretical concept related to algorithms, while running time is the time a code would take to run, not at all theoretical.
Two algorithms may have the same time complexity, say O(n^2), but one may take twice as much running time as the other one. */



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////quick sort: my code, main array is not getting changed but new arrays are created. hence not that much efficient
// var count = 0;
// var count2 = 0;
// function quicksort(arr) {
//     count++;
//     if (arr.length <= 1) {
//         return arr;
//     }
//     var pivot = arr[0];
//     var leftarray = [];
//     var rightarray = [];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {//left array
//             leftarray.push(arr[i]);
//         } else { //right array
//             rightarray.push(arr[i]);
//         }
//     }
//     /* leftarray = quicksort(leftarray).concat([pivot]);
//     leftarray = leftarray.concat(quicksort(rightarray));
//     return leftarray; */
//     return quicksort(leftarray).concat([pivot]).concat(quicksort(rightarray));
// }
// var mainfunction = function (arr) {
//     var arra = Array.from(arr);
//     var arrb = Array.from(arr);
//     var arrc = Array.from(arr);
//     var t0 = performance.now();
//     quicksort(arra);
//     var t1 = performance.now();
//     console.log("quicksort took " + (t1 - t0) + " milliseconds.");
//     console.log(count);
//     var t3 = performance.now();
//     quickSort(arrb, 0, arrb.length - 1)
//     var t4 = performance.now();
//     console.log("quicksort took " + (t4 - t3) + " milliseconds.");
//     console.log(count2);
//     var t5 = performance.now();
//     quicksortnew(arrc, 0, arrb.length - 1)
//     var t6 = performance.now();
//     console.log("quicksort took " + (t6 - t5) + " milliseconds.");
// }
// //best one
// const quickSort = (arr, start, end) => {
//     count2++;
//     if (start < end) {

//         // You can learn about how the pivot value is derived in the comments below
//         let pivot = partition(arr, start, end)

//         // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
//         // These are the recursive calls to quickSort
//         quickSort(arr, start, pivot - 1)
//         quickSort(arr, pivot + 1, end)
//     }

// }

// const partition = (arr, start, end) => {
//     let pivot = end
//     // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
//     // Succeeding comments will expound upon the above comment
//     let i = start - 1
//     let j = start

//     // Increment j up to the index preceding the pivot
//     while (j < pivot) {

//         // If the value is greater than the pivot increment j
//         if (arr[j] > arr[pivot]) {
//             j++
//         }

//         // When the value at arr[j] is less than the pivot:
//         // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
//         else {
//             i++
//             swap(arr, j, i)
//             j++
//         }

//     }

//     //The value at arr[i + 1] will be greater than the value of arr[pivot]
//     swap(arr, i + 1, pivot)

//     //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
//     // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
//     return i + 1
// }

// const swap = (arr, firstIndex, secondIndex) => {
//     let temp = arr[firstIndex]
//     arr[firstIndex] = arr[secondIndex]
//     arr[secondIndex] = temp
// }
// //better one
// var quicksortnew = function (arr, start, end) {
//     if (start < end) {
//         var i = start;
//         var j = start + 1;
//         var pivotal;
//         while (j <= end) {
//             if (arr[j] < arr[i]) {
//                 pivotal = arr[j];
//                 arr[j] = arr[i + 1];
//                 arr[i + 1] = arr[i];
//                 arr[i] = pivotal;
//                 i++;
//             } else {
//                 j++;
//             }
//         }
//         quicksortnew(arr, start, i - 1);
//         quicksortnew(arr, i + 1, end);
//     }
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Radix sort
// function radixsort(arr) {
//     var t1 = performance.now();
//     if (arr.length > 0) {
//         var maxdigitcount = 0;
//         for (var i = 0; i < arr.length; i++) {
//             maxdigitcount = Math.max(maxdigitcount, getDigit(arr[i])); // maxdigitcount > getDigit(arr[i]) ? maxdigitcount : getDigit(arr[i]);
//         }
//         var collectorarray = [];
//         for (var i = 0; i < maxdigitcount; i++) {
//             collectorarray = Array.apply(null, { length: 10 }).map(function () { return new Array() });
//             for (var j = 0; j < arr.length; j++) {
//                 if(arr[j]){
//                 var num = getnumberatpositioni(arr[j], i);
//                 collectorarray[num].push(arr[j]);
//                 }
//             }
//             var count = 0;
//             for (var k = 0; k < 10; k++) {
//                 if (collectorarray[k]) { }
//                 for (var j = 0; j < collectorarray[k].length; j++) {
//                     arr[count] = collectorarray[k][j];
//                     count++
//                 }
//             }
//             //arr = [].concat(...collectorarray); count approach is better
//         }
//     }
//     var t2 = performance.now();
//     console.log("it took " + (t2 - t1 ) + "milliseconds");
// }

// function getDigit(num) {
//     if (num === 0) {
//         return 1;
//     }
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function getnumberatpositioni(num, pos) {
//     return Math.floor(num / Math.pow(10, pos) % 10);
// }