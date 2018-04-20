'use strict';
var input = [1,2,3];
test(
    function(){
        return map(input, function(v) {return v**2;});
    },
    'map([1,2,3], function(v){ return v**2; }) should return a new array with values [1,4,9]',
    function(result){
        return input !== result && result.toString()==='1,4,9';
    }
);

test(
    withErrorCapturing(
        function() {
            map();
        }
    ),
    'map() should throw an error if input array is undefined',
    function(result) {
        return result.message === 'input array is not valid';
    }
);

test(
    withErrorCapturing(
        function() {
            map([]);
        }
    ),
    'map([]) without first argument should throw an error',
    function(result) {
        return result.message === 'input handler is not valid';
    }
);

/* test(
    withErrorCapturing(
        function() {
            map(input);
        }
    ),
    'map(input) without second argument should throw an error',
    function(result) {
        return result.message === 'input handler is not a valid';
    }
); 
   */