//getvalueoutofaset([1,5,10,20,50,100],299)
function getvalueoutofaset(setarray,value){
    var result = {};
    setarray.sort(function(a,b){
        return a - b;
    });
    var balance = value;
    var i = setarray.length - 1;
    while(balance > 0){
        if(Math.floor(balance / setarray[i]) > 0){
            result[setarray[i]] = Math.floor(balance/setarray[i]);
            balance = balance % setarray[i];
        }
        i--;
    }
    return result;
}
//getvalueoutofaset([{1:x},{5:x},{10:x},{20:x},{50:x},{100:x}],299) {currency, count}
function getvalueoutofadefiniteset(setarray,value){
    var result = {};
    setarray.sort(function(a,b){
        return a.currency - b.currency;
    });
    var balance = value;
    var i = setarray.length - 1;
    while(balance > 0){
        if(Math.floor(balance / setarray[i].currency) > 0 && Math.floor(balance/setarray[i].currency) <= setarray[i].count ){
            result[setarray[i].currency] = Math.floor(balance/setarray[i].currency);
            balance = balance % setarray[i].currency;
        }
        i--;
        if(i < 0){
            break;
        }
    }
    if(balance > 0){ 
        return "not possible!!";
    }
    return result;
}