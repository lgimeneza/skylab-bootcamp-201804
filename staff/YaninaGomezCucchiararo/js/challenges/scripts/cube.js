'use strict';

/**
 * DOCUMENTACIÓN: 
 * 
 * calculates the cube of an input number, or array of numbers.
 * 
 * @example
 * 
 * var result = cube(3); // -> 27
 * 
 * var res = cube([1,2,3]); // -> [1,8,27]
 * 
 * @param {number | number[]} num - the input number or array of numbers.
 * 
 * @throws {Error} - if input number or array of numbers is not valid.
 * 
 * @returns {number | number[]} - the cube of the input number or array of numbers.
 * 
 * 
 */


/*function cube(currentElement) {

    if (Array.isArray(currentElement)) {

        var newArray = currentElement.map(function (x) {
            return Math.pow(x, 3);
        });
        return newArray;
    }

    if (typeof currentElement === "number") {
        var cubeNumber = Math.pow(currentElement, 3);
        return cubeNumber;
    } else {
        throw Error('input is not a number o array');
    }
}
*/
// Resultado manu:


function cube(num) {

    if (typeof num === 'number') {
        return num * num * num;
    }

    if (!(num instanceof Array)) {
        throw Error('input num is not a number, neither an array');
    }

    for (var i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            throw Error('input array isnot a number at index' + i);
        }

        var res = [];

        for (var i = 0; i < num.lenght; i++) {
            var value = num[i];
            res[i] = val ** 3;
        }
        return res;
    }

}