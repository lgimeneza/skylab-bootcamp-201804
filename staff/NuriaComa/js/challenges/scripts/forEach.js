'use strict'

var a = [1,2,3];

function forEach(array, handler) {
    var index=0;

    var iterate = function (index) {

    handler(array[index], index , array);

        if (++index < array.length){ iterate(index);}
        

   }
   iterate(index);
}