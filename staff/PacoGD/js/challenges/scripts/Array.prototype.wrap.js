'use strict';
/**
 * 
 */
if (typeof Array.prototype.wrap !== 'function') {
    Array.prototype.wrap = function (a, b) {
        if (typeof a !== 'string' || typeof b !== 'string') throw Error('')
        for (var i = 0; i < this.length; i++) {
            var newNum = a + this[i] + b;
            this[i] = newNum;
        }
        return this;
    }
}
var a = [1, 2, 3]

console.log(a.wrap('[', ']'));

