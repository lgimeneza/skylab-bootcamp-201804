'use strict'

function forEach(array, handler) {
    if (!Array.isArray(array)) {
        throw Error('input str is not a string');
    }
    var index=0;
    var iterate = function (index) {
       handler(array[index], index , array);
       if (++index < array.length) {
          iterate(index);
       }
   }
    iterate(0);
}