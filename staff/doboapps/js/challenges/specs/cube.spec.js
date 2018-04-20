'use strict'

describe('cube test', function () {

    it("should cube(3) return 27", function () {
        expect(cube(3)).toBe(27);
    });


    it("should cube([1,2,3]) return [1,8,27]", function () {
        expect(cube([1, 2, 3])).toEqual([1, 8, 27]);
    });


    it("should cube(true) return trhow ", function () {
        expect(function () {
            cube(true);
        }).toThrow(Error('input value is not a number, neither an array'));
    });


    it("should cube([1,2,'a'] return trhow ", function () {
        expect(function () {
            cube([1,2,'a']);
        }).toThrow(Error('input array is not a number at index2'));
    });

});

