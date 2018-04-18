'use strict';
var input = 'Hello My World';
var output = toRandomCase(input);

test(function () {
    return toRandomCase("Hello My World");
},
    'toRandomCase(Hello My World) should return helloMyWorld',
    function (input) {
        return input.toLowerCase() === output.toLowerCase() && input !== output;
    });
    
    test(
        runWithErrorCapturing(function() {
            toRandomCase(true);
        }),
        'toRandomCase(true) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    test(
        runWithErrorCapturing(function() {
            toRandomCase(1);
        }),
        'toRandomCase(1) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    test(
        runWithErrorCapturing(function() {
            toRandomCase([]);
        }),
        'toRandomCase([]) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    
