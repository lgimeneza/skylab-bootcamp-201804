
  function toReduce(array, handler, init) {
    var sum= init;
    var iterate = function (index) {
        sum = handler(sum, array[index]);
      if (++index < array.length) {
          iterate(index);
      }
   }
    iterate(0);
   return sum;
}