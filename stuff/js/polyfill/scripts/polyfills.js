if (typeof Array.prototype.forEach !== 'function')
    Array.prototype.forEach = function (handler) {
        for (var i = 0; i < this.length; i++) handler(this[i]);
    };

if (typeof Array.prototype.areAllNumbers !== 'function')
    Array.prototype.areAllNumbers = function () {
        for (var i = 0; i < this.length; i++)
            if (typeof this[i] !== 'number') return false;

        return true;
    };

var a = [1, 2, 3]; // shorcut of new Array(1, 2, 3);

console.log(a, 'are all numbers?', a.areAllNumbers()); // -> true

var b = [1, 2, 3, 'a'];

console.log(b, 'are all numbers?', b.areAllNumbers()); // -> false

