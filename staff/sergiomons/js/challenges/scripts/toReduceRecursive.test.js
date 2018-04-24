'use strict';
var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];


test(
    function() {
        return toReduce(a, function(accum, valueCurrent) {
          if (valueCurrent.price > 10){
            return accum + valueCurrent.price;
           }  
         return accum;
      }, 0); 
    },
    'toReduce(a, function(accum, v) { return accum + v; }, 0) should return 30,49',
    function(result) {
        return result === 30.49;
    }
);

test(
    withErrorCapturing(
        function() {
            toReduce();
        }
    ),
    'toReduce() without arguments should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    withErrorCapturing(
        function() {
            toReduce(undefined, function(accum, valueCurrent) {
              if (valueCurrent.price > 10){
                return accum + valueCurrent.price;
               }  
             return accum;
          }, 0);
        }
    ),
    'toReduce(undefined, handler) without first argument should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    withErrorCapturing(
        function() {
            toReduce(a);
        }
    ),
    'toReduce(array) without second argument should throw an error',
    function(result) {
        return result.message === 'input handler is not a function';
    }
);