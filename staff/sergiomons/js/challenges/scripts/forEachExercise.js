'use strict'

function forEach(array, handler) {
    if (typeof array !== 'object' || !array instanceof Array) throw Error('input array is not an array');
    if (typeof handler !== 'function') throw Error('input handler is not a function');

    var index=0;
    var iterate = function (index) {
       handler(array[index], index, array);
       if (++index < array.length) {
          iterate(index);
       }
   }
    iterate(0);
}
