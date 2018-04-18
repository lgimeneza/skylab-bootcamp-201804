'use strict';

test(function () {
    return map(['john', 'mary', 'jack'],function(v) { return v.toUpperCase(); });
},
    "map(['john', 'mary', 'jack'],function(v) { return v.toUpperCase(); }) should return ['JOHN', 'MARY', 'JACK']",
    function (result) {
        return result.toString() === ['JOHN', 'MARY', 'JACK'].toString();
    });