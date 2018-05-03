'use strict';

describe('find',function() {
    it("find(['john', 'mary', 'jack'], function(v) { return v.indexOf('a') > -1; }) should return 'mary'", function() {
        var findA = find(['john', 'mary', 'jack'], function(v) { return v.indexOf('a') > -1; });
        expect(findA).toBe('mary');
    });
    it("find(['john', 'mary', 'jack'], function(v) { return v.indexOf('w') > -1; }) should return undefined", function() {
        var findB = find(['john', 'mary', 'jack'], function(v) { return v.indexOf('w') > -1; });
        expect(findB).toBe(undefined);
    });
    it("find() should throw error", function() {
        expect(function() {
           find();
        }).toThrow(Error('input array is not valid'));
    });
    it("find([]) should throw error", function() {
        expect(function() {
           find([]);
        }).toThrow(Error('input condition is not valid'));
    });
})






