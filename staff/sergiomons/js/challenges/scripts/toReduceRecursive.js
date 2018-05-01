'use strict';
  function toReduce(array, handler, init) {
    if (typeof array !== 'object' || !array instanceof Array) throw Error('input array is not an array');

   if (typeof handler !== 'function') throw Error('input handler is not a function');
    var sum= init;
    var iterate = function (index) {
        sum = handler(sum, array[index]);
      if (++index < array.length) {
          iterate(index);
      }
   }
    iterate(0);
   return sum;
};