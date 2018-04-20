'use strict';



var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

/* var result= reduce(a, function(accum, v){
    if (v.price > 10){
        return accum + v.price;
    }
    return accum;
});

console.log(result);
 */
test(
    withErrorCapturing(
        function() {
            reduce();
        }
    ),
    'reduce() without arguments should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    withErrorCapturing(
        function() {
            reduce(undefined, function(v) { output.push(v) });
        }
    ),
    'forEach(undefined, function(v) { output.push(v) }) without first argument should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    withErrorCapturing(
        function() {
            reduce(input);
        }
    ),
    'reduce(input) without second argument should throw an error',
    function(result) {
        return result.message === 'input handler is not a function';
    }
); 
  