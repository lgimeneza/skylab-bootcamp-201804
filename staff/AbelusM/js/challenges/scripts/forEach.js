'use strict';

var a = [1, 2, 3];
function forEach(array, handler) {
    var index = 0;
function iterate (index) {
        handler(array[index], index, array);
        if (++index < array.length) {
            iterate(index);
        }
    }
    iterate(0);
}