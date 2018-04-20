'use strict';

if (Array.prototype.wrap!=="function") {
    Array.prototype.wrap= function(a,b){
        var newArr=[];
        for (var i=0;i<this.length;i++) {
            newArr.push(a.toString()+this[i].toString()+b.toString());
        }
        return newArr;
    }
}