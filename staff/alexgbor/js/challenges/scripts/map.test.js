'use strict';
var input=['john', 'mary', 'jack']
test(function () {
    return map(input,function(v) { return v.toUpperCase(); });
},
    "map(['john', 'mary', 'jack'],function(v) { return v.toUpperCase(); }) should return ['JOHN', 'MARY', 'JACK']",
    function (result) {
        return result.toString() === ['JOHN', 'MARY', 'JACK'].toString() && input!==result;
    });

test(withErrorCapturing(function () {
    return map(input,true);
}),
    "map(['john', 'mary', 'jack'],true) should throw an error",
    function (result) {
        return result.message === "The second parameter must be a function.";
    });

test(withErrorCapturing(function () {
    return map(true,function(v) { return v.toUpperCase(); });
}),
    "map(true,function(v) { return v.toUpperCase(); }) should throw an error",
    function (result) {
        return result.message === "The first parameter must be an array.";
    });