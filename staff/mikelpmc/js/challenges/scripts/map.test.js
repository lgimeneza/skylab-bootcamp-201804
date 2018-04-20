'use strict';

var names = ['john', 'mary', 'jack'];

/**
 * POSITIVE CASES
 */

test(
    function() {
        return map(names)(function(v) {
            return v.toUpperCase();
        });
    },
    'map(names)(function(v) {return v.toUpperCase(); } should return a new Array with uppercased names of the given array',
    function(result) {
        return (
            names !== result &&
            ['JOHN', 'MARY', 'JACK'].toString() === result.toString()
        );
    }
);
