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