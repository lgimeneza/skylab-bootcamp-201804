'use strict';

test(function () {
    return toCamelCase("Hello My World");
},
    'toCamelCase(Hello My World) should return helloMyWorld',
    function (result) {
        return result === "helloMyWorld";
    });

    test(
        runWithErrorCapturing(function() {
            toCamelCase(true);
        }),
        'toCamelCase(true) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    test(
        runWithErrorCapturing(function() {
            toCamelCase(1);
        }),
        'toCamelCase(1) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    test(
        runWithErrorCapturing(function() {
            toCamelCase([]);
        }),
        'toCamelCase([]) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    