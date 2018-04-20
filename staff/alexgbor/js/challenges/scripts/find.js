'use strict';

/**
 * find returns the first element of an array that matches with the handler's check.
 * @example 
 * find(["john", "mary", "jack"],function(v) { return v.indexOf("a") > -1 }) should return "mary"
 * @param {array} arr that will be scanned.
 * @param {function} handler that dictated what to look for.
 * 
 * @returns {*} Returns the first item of the arr that fits the match, otherwise returns undefined
 * 
 *  @throws Throws an error if the input types aren't correct.
 * 
 */

function find(arr,handler) {
    if (Array.isArray(arr)===false) {
        throw Error("The first parameter must be an array.")  
    }
    else if (typeof handler!=="function") {
        throw Error("The second parameter must be a function.")  
    }
    else {
        for (var i=0;i<arr.length;i++) {
            if (handler(arr[i])===true) {
                return arr[i];
            } 
        }
    }
}