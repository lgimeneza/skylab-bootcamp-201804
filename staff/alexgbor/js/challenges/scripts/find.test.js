'use strict';

test(function () {
    return find(['john', 'mary', 'jack'],function(v) { return v.indexOf('a') > -1 });
},
    'find(["john", "mary", "jack"],function(v) { return v.indexOf("a") > -1 }) should return "mary"',
    function (result) {
        return result === 'mary';
    });

test(function () {
    return find(['john', 'mary', 'jack'],function(v) { return v.indexOf('1') > -1 });
},
    'find(["john", "mary", "jack"],function(v) { return v.indexOf("1") > -1 }) should return undefined',
    function (result) {
        return result === undefined;
    });

test(withErrorCapturing(function () {
    return find(['john', 'mary', 'jack'],true);
}),
    "find(['john', 'mary', 'jack'],true) should throw an error",
    function (result) {
        return result.message === "The second parameter must be a function.";
    });

test(withErrorCapturing(function () {
    return find(true,function(v) { return v.toUpperCase(); });
}),
    "find(true,function(v) { return v.toUpperCase(); }) should throw an error",
    function (result) {
        return result.message === "The first parameter must be an array.";
    });