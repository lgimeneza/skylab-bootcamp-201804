var firstNum = 0;

function cube(n){
    firstNum = n;
    var arr = [];
    if (typeof n === "number") return Math.pow(n, 3);
    if (Array.isArray(n)){
        for (var i = 0; i < n.length; i++){
            var idxN = n[i];
            if (typeof idxN !== "number") throw Error("Array can only include numbers.");
            arr.push(parseFloat((Math.pow(idxN, 3)).toFixed(4)));
        }
        return arr;
    }
    throw Error(n," is not a valid value.");
}

"use strict"