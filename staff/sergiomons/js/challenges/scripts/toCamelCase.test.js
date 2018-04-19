'use strict';

test(function () {
    return toCamelCase("Hello My World");
},
    'toCamelCase(Hello My World) should return helloMyWorld',
    function (result) {
        return result === "helloMyWorld";
    });

    test(
        withErrorCapturing(function() {
            toCamelCase(true);
        }),
        'toCamelCase(true) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    test(
        withErrorCapturing(function() {
            toCamelCase(1);
        }),
        'toCamelCase(1) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    test(
        withErrorCapturing(function() {
            toCamelCase([]);
        }),
        'toCamelCase([]) should throw an error',
        function(result) {
            return result.message === 'input text is not a string';
        }
    );
    
    