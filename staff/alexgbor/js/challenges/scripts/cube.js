'use strict';

function cube(n) {
    if (typeof n==="number") {
        return n**3;
    }
    if (Array.isArray(n)) {
        for (var i=0;i<n.length;i++) {
            if (typeof n[i]!="number"){
                throw Error("All elements must be numbers");
            }
        }
        var newarr=n.map(function(ele) {
            return ele**3;
        });
        return newarr;
    }
    else {
        throw Error("Input number or array of numbers");
    }
}