'use strict';

  function toReduce(array, handler, init) {
      var sum= init;
     for (var i=0; i < array.length; i++) {
          sum+= handler(init, array[i]) ;
     }
     return sum;
  }
