// 'use strict'


if (typeof Array.prototype.wrap !== 'function')
    /**
     * This function should return the array elements wrapped by the strings you select:
     * 
     * @example
     * 
     * var a = [1,2,3]
     * 
     * console.log(a.wrap('[', ']').wrap('{', '}'))
     * 
     * @param {string} - Insert a char as an input parameter.
     * @param {string} - Insert a char as an input parameter.
     * 
     * @returns {Array} - Returns an array with wrapped elements.
     */
    Array.prototype.wrap = function (left, right) {
        if (typeof left !== 'string' || typeof right !== 'string') throw Error('this is not a string!');

        if (typeof left === 'function' || typeof right === 'function') throw Error('this is not a string!');

        for (var i = 0; i < this.length; i++) {
            var newElement = left + this[i] + right;
            this[i] = newElement;
        }
        return this;
    };

// this array corresponds to the 'this' 
var a = [1, 2, 3];

console.log(a.wrap('[', ']').wrap('{', '}'));




