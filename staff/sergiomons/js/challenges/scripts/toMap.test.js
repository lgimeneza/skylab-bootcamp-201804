'use strict';

var input = [2, 4, 6];


test(
    function() {
        return toMap(input, 2);
    },
    'toMap(input, 2) should show [4,8,12]',
    function(result) {
        return result.toString() === [4,8,12].toString();
    }
);

test(
    runWithErrorCapturing(
        function() {
            toMap();
        }
    ),
    'toMap() without arguments should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    runWithErrorCapturing(
        function() {
            toMap(undefined, 2);
        }
    ),
    'toMap(undefined, 2) without first argument should throw an error',
    function(result) {
        return result.message === 'input array is not an array';
    }
);

test(
    runWithErrorCapturing(
        function() {
            toMap(input);
        }
    ),
    'toMap(input) without second argument should throw an error',
    function(result) {
        return result.message === 'input numMult is not a number';
    }
);