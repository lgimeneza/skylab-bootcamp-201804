'use strict'

test(
    function() {
        return [1,2,3].wrap('[', ']').wrap('{', '}');
    },
    'wrap("[", "]").wrap("{", "}") should return new array with values --> ["{[1]}", "{[2]}", "{[3]}"]',
    function(result) {
        return result.toString() === ["{[1]}", "{[2]}", "{[3]}"].toString();
    }
);



