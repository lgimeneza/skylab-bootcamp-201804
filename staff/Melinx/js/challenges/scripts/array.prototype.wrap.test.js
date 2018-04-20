'use strict';

test(
    function() {
        var input = [1, 2, 3];
        return  input.wrap('[', ']');
    
    },
    'input.wrap ("abracadabra", function(c) { return c === "a"; }) should return 5',
    function(result) {
        return result === ['[1]', '[2]', '[3]']
    }
)
