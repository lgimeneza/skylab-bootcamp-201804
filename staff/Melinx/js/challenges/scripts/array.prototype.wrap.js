'use strict';

/**
 * DOCUM: wrap
 * creates a polyfill and its test, in files Array.prototype.wrap.js (and .test.js, respectively) , that performs as the following demos show:
 * 
 * @example
 * 
 * demos:   

var a = [1, 2, 3]

a.wrap('[', ']'); // -> ['[1]', '[2]', '[3]']

a.wrap('[', ']').wrap('{', '}'); // -> ['{[1]}', '{[2]}', '{[3]}']

a.wrap('[', ']').wrap('{', '}').wrap('<', '>'); // -> ['<{[1]}>', '<{[2]}>', '<{[3]}>']
 * 
 */


if (typeof Array.prototype.wrap !== 'function')
/**
 * 
 * @param
 * 
 * @param
 * 
 * 
 * 
 */

    Array.prototype.wrap = function (left, right) {

        //TODO


        for (var i = 0; i < this.length; i++)
            if (typeof this[i] !== 'number') return false;
        return true;
    };


var arr = ['1', 2, 3, 'hola']; // shorcut of new Array(1, 2, 3);

Array.prototype.wrap = function (left,right) {
if (typeof left !== 'string' || typeof right !== 'string') throw Error ('a and b should be strings');

var res = [];
    for (var i = 0; i < this.length; i++) {
        var newElement = left + this[i] + right;
        this[i] += newElement;
    }
return this;
};

console.log(arr.wrap('[',']').wrap('{','}').wrap('<','>'));

