'use strict';

/**
 * map returns gets two inputs,an array and a function and returns a modified version of the array 
 * where the function affects every item in the array.
 * @example 
 * map(['john', 'mary', 'jack'],function(v) { return v.toUpperCase(); }) should return ['JOHN', 'MARY', 'JACK']
 * @param {array} arr that will be modified.
 * @param {function} handler that will modify every arr item.
 * 
 * @returns {array} Returns a modified array where the handler is applied to every item.
 * 
 * @throws Throws an error if the input types aren't correct.
 */


function map(arr,handler) {
    if (Array.isArray(arr)===false) {
        throw Error("The first parameter must be an array.")  
    }
    else if (typeof handler!=="function") {
        throw Error("The second parameter must be a function.")  
    }
    else {
        var newArr=[];
        for (var i=0;i<arr.length;i++) {
            newArr.push(handler(arr[i]));
        }
        return newArr;  
    }
}