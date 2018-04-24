'use strict';


/**
 * Find returns the first elemetn from an input array that satisfies a given condition
 *
 * @example
 * 
 * var input = [1,2,3];
 * 
 * find(input, function(element){return element>1;}); // -> 2
 * 
 * @param {Array} - The input array to find elments from.
 * @param {Function} condition - The condition to match when seeking for elements int the array. 
 * 
 * @throws {Error} IF input arr and/or handler is not valid.
 * 
 * @returns {*} - The first element from the input array that matches the condition.
 * 
 * 
 */
var vac = $("vacations")

vac.text()

function find(arr, condition) {

    if ( !(arr instanceof Array)) throw Error('input arr is not an array');

    if ( !(condition instanceof Function)) throw Error('input handler is not a function');


    var value;

    var iterate = function (index) {

        if (condition(arr[index])) {
            value = arr[index];
            return;
        }

        if (++index < arr.length)
            iterate(index);
    };

    iterate(0);

    return value;


}