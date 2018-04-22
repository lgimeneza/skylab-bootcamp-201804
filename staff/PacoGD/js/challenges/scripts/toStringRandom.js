'use strict';

/**
 * Generate random strings.
 * 
 * @example
 * 
 * var a=(“hola que tal”)
 * 
 * return newString = ('tal que hola')
 * 
 * @param {string} - The same words ordered randomly.
 * 
 * @throws {Error} - If input is not a string.
 */

var text = ('hola que tal');

if (typeof String.prototype.toStringRandom !== 'function') {
    String.prototype.toStringRandom = function () {
        if (typeof this !== 'string')
            throw Error('input text is not a string');
        var arr = this.split(' ');
        arr = arr.sort(function () { return Math.random() - 0.5 }).toString().replace(/,/g, " ");
        console.log(arr);
    }
}

console.log(text.toStringRandom());

