'use strict';

var input = [2, 4, 6, 8, 10];


test(
    function() {
        return toFind(input, 5);
    },
    'toFind(input, 5) should show 6',
    function(result) {
        return result === 6;
    }
);

test(
    runWithErrorCapturing(
        function() {
            toFind();
        }
    ),
    'toFind() without arguments should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    runWithErrorCapturing(
        function() {
            toFind(undefined, 5);
        }
    ),
    'toFind(undefined, 2) without first argument should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    runWithErrorCapturing(
        function() {
            toFind(input);
        }
    ),
    'toFind(input) without second argument should throw an error',
    function(result) {
        return result.message === 'input numCondition is not a number';
    }
);